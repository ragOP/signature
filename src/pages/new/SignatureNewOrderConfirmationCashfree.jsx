import React, { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  CheckCircle,
  Star,
  Sparkles,
  PhoneCall,
  ArrowLeft,
  FileText,
  Signature,
  AlertCircle,
  Loader2,
  RefreshCw,
} from "lucide-react";
import axios from "axios";
import { BACKEND_URL } from "../../utils/backendUrl";
import { toast } from "react-toastify";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center px-4 py-3 md:px-6 md:py-4 border-b border-amber-200">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="bg-gradient-to-r from-yellow-500 to-amber-500 p-2 rounded-xl">
          <Signature className="h-6 w-6 text-white" />
        </div>
        <span className="text-xl font-bold text-gray-800">SignaturePro</span>
      </div>
    </div>
  );
};
const SignatureNewOrderConfirmationCashfree = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // State management
  const [orderStatus, setOrderStatus] = useState("processing"); // processing, success, failed, verifying
  const [orderData, setOrderData] = useState(null);
  const [verificationAttempts, setVerificationAttempts] = useState(0);
  const [isRetrying, setIsRetrying] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  // Get order ID from URL params or location state
  const orderIdFromParams = searchParams.get("orderId");
  const orderIdFromState = location.state?.orderId;
  const orderId = orderIdFromParams || orderIdFromState;

  // Get other data from location state or localStorage
  const { paymentMethod } = location.state || {};
  const storedOrderData = localStorage.getItem("orderData")
    ? JSON.parse(localStorage.getItem("orderData"))
    : null;
  const amount = storedOrderData?.amount || 0;

  const abandonedCartID = localStorage.getItem("abandonedCartID");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // If no order ID, redirect to cart
    if (!orderId) {
      console.error("No order ID found");
      setOrderStatus("failed");
      setErrorMessage("Invalid order. Please try again.");
      toast.error("No order ID found. Redirecting to cart.");
      setTimeout(() => navigate("/signature-new-cart"), 2000);
      return;
    }

    // Start verification process
    verifyPaymentAndCreateOrder();
  }, [orderId, navigate]);

  // Robust payment verification and order creation
  const verifyPaymentAndCreateOrder = async () => {
    const maxAttempts = 5;
    const retryDelay = 2000; // 2 seconds

    if (verificationAttempts >= maxAttempts) {
      setOrderStatus("failed");
      setErrorMessage(
        "Maximum verification attempts reached. Please contact support."
      );
      toast.error("Payment verification failed after multiple attempts.");
      return;
    }

    try {
      setOrderStatus("verifying");
      setVerificationAttempts((prev) => prev + 1);

      console.log(
        `Verifying payment for order: ${orderId} (Attempt ${
          verificationAttempts + 1
        })`
      );

      // Step 1: Verify payment status with Cashfree
      const paymentVerificationResponse = await axios.get(
        `${BACKEND_URL}/api/payment/details/${orderId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
          },
          timeout: 15000, // 15 second timeout
        }
      );

      console.log(
        "Payment verification response:",
        paymentVerificationResponse.data
      );

      const paymentData = paymentVerificationResponse?.data?.data?.[0];

      // Validate payment data
      if (!paymentData) {
        throw new Error("No payment data received from server");
      }

      // Check payment status
      if (paymentData.payment_status === "SUCCESS") {
        console.log("Payment verified successfully");

        // Step 2: Create order in database
        await createOrderInDatabase();
      } else if (paymentData.order_status === "ACTIVE") {
        // Payment is still pending, retry after delay
        console.log("Payment still pending, retrying...");
        setTimeout(() => {
          verifyPaymentAndCreateOrder();
        }, retryDelay);
      } else if (paymentData.order_status === "EXPIRED") {
        throw new Error("Payment session has expired. Please try again.");
      } else {
        throw new Error(
          `Payment not successful. Status: ${paymentData.order_status}`
        );
      }
    } catch (error) {
      console.error("Payment verification error:", error);

      // Handle different types of errors
      if (error.code === "ECONNABORTED" || error.message.includes("timeout")) {
        setErrorMessage("Connection timeout. Retrying...");
        setTimeout(() => {
          verifyPaymentAndCreateOrder();
        }, retryDelay);
      } else if (error.response?.status === 404) {
        setErrorMessage("Order not found. Please contact support.");
        setOrderStatus("failed");
      } else if (error.response?.status === 401) {
        setErrorMessage("Authentication failed. Please login again.");
        setOrderStatus("failed");
        toast.error("Session expired. Please login again.");
        setTimeout(() => navigate("/signature-new-cart"), 2000);
      } else if (error.response?.status >= 500) {
        setErrorMessage("Server error. Retrying...");
        setTimeout(() => {
          verifyPaymentAndCreateOrder();
        }, retryDelay * 2);
      } else {
        setErrorMessage(error.message || "Payment verification failed");
        setOrderStatus("failed");
        toast.error("Payment verification failed. Please contact support.");
      }
    }
  };

  // Create order in database
  const createOrderInDatabase = async () => {
    try {
      console.log("Creating order in database...");

      const orderPayload = {
        // cashfreeOrderId: orderId,
        // orderType: "normal",
        // amount: amount || 1,
        ...(storedOrderData || {}),

        orderId: orderId,
        amount: amount,
        fullName: storedOrderData?.name,
        email: storedOrderData?.email,
        phoneNumber: storedOrderData?.phoneNumber,
        profession: storedOrderData?.profession,
        remarks: storedOrderData?.remarks,
        additionalProducts: storedOrderData?.additionalProducts,
      };

      const orderResponse = await axios.post(
        `${BACKEND_URL}/api/lander4/create-order`,
        orderPayload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
          },
          timeout: 20000, // 20 second timeout
        }
      );

      console.log("Order creation response:", orderResponse.data);

      if (orderResponse?.data?.success) {
        setOrderData(orderResponse.data);
        setOrderStatus("success");
        toast.success("Order placed successfully!");

        // Clear stored order data
        localStorage.removeItem("orderData");

        // Clear abandoned cart if exists
        await axios.delete(
          `${BACKEND_URL}/api/lander4/delete-order-abd/${abandonedCartID}`
        );

        // Clear abandoned cart ID
        localStorage.removeItem("abandonedCartID");
      } else {
        throw new Error(
          orderResponse?.data?.message || "Failed to create order"
        );
      }
    } catch (error) {
      console.error("Order creation error:", error);

      if (error.response?.status === 409) {
        // Order already exists
        setOrderStatus("success");
        toast.info("Order already exists and is confirmed.");
      } else if (error.response?.status === 400) {
        setErrorMessage("Invalid order data. Please contact support.");
        setOrderStatus("failed");
      } else {
        setErrorMessage(
          "Order creation failed. Payment was successful but order could not be created."
        );
        setOrderStatus("failed");
        toast.error(
          "Order creation failed. Please contact support with your payment details."
        );
      }
    }
  };

  // Retry verification
  const handleRetry = () => {
    setIsRetrying(true);
    setVerificationAttempts(0);
    setErrorMessage("");
    setRetryCount((prev) => prev + 1);
    verifyPaymentAndCreateOrder();
    setTimeout(() => setIsRetrying(false), 1000);
  };

  // Loading state
  if (orderStatus === "processing" || orderStatus === "verifying") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="relative">
            <Loader2 className="w-16 h-16 text-blue-600 animate-spin mx-auto" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-xl"></div>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-800">
              {orderStatus === "processing"
                ? "Processing your order..."
                : "Verifying payment..."}
            </h2>
            <p className="text-gray-600">
              {orderStatus === "processing"
                ? "Please wait while we process your order."
                : "We are verifying your payment with Cashfree."}
            </p>
            {/* {verifiabandonedCartID */}
          </div>
        </div>
      </div>
    );
  }

  // Failed state
  if (orderStatus === "failed") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center space-y-6">
          <div className="relative">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full blur-xl"></div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Order Verification Failed
            </h2>
            <p className="text-gray-600">{errorMessage}</p>
            <div className="space-y-3">
              <button
                onClick={handleRetry}
                disabled={isRetrying}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isRetrying ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Retrying...</span>
                  </>
                ) : (
                  <>
                    <RefreshCw className="w-4 h-4" />
                    <span>Try Again</span>
                  </>
                )}
              </button>
              <button
                onClick={() => navigate("/signature-new-cart")}
                className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
              >
                Back to Cart
              </button>
            </div>
            {retryCount > 0 && (
              <p className="text-sm text-gray-500">
                Retry attempts: {retryCount}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  console.log("amount paid is", amount);

  // Success state continues with existing UI...
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 selection:bg-amber-200/40 selection:text-amber-900">
      <Navbar />

      {/* Background Accents */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 via-white/40 to-yellow-100/60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,158,11,0.08),transparent_60%)]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 pb-16">
        {/* Success Animation Container */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-amber-400/20 rounded-full blur-2xl"></div>
            <div className="relative bg-white rounded-full p-6 border border-amber-200 shadow-lg">
              <CheckCircle className="w-16 h-16 text-amber-600 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/30 backdrop-blur-sm border border-amber-200/60 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
              <span className="text-amber-800 text-sm font-medium font-primary">
                Order Confirmed
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold leading-tight font-display">
              <span className="text-amber-900">Thank You!</span>
              <span className="bg-gradient-to-r from-amber-700 via-orange-700 to-amber-700 bg-clip-text text-transparent pl-2">
                Signature Design Ordered
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-amber-900/80 leading-relaxed max-w-2xl mx-auto font-primary">
              Your Professional Signature Design has been successfully ordered.
              Our expert designer will create your personalized signature and
              deliver it within 24-48 hours.
            </p>
          </div>

          {/* Order Details Card */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/15 via-orange-400/15 to-amber-400/15 rounded-2xl blur-xl transition-all duration-500"></div>
            <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-amber-200 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-amber-900 font-display">
                    Order Details
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-amber-500 fill-current" />
                    <Star className="w-4 h-4 text-amber-500 fill-current" />
                    <Star className="w-4 h-4 text-amber-500 fill-current" />
                    <Star className="w-4 h-4 text-amber-500 fill-current" />
                    <Star className="w-4 h-4 text-amber-500 fill-current" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-amber-900/70 text-sm font-primary">
                      Order ID
                    </p>
                    <p className="text-amber-900 font-mono">{orderId}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-amber-900/70 text-sm font-primary">
                      Service
                    </p>
                    <p className="text-amber-900 font-primary">
                      Professional Signature Design
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-amber-900/70 text-sm font-primary">
                      Amount Paid
                    </p>
                    <p className="text-amber-900 font-semibold">₹{amount}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-amber-900/70 text-sm font-primary">
                      Payment Method
                    </p>
                    <p className="text-amber-900 font-primary">
                      {paymentMethod || "Cashfree"}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-amber-900/70 text-sm font-primary">
                      Status
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-700 font-medium font-primary">
                        Confirmed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center text-amber-900 font-display">
              What's Next?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-xl blur-lg transition-all duration-500"></div>
                <div className="relative bg-white rounded-xl p-6 border border-amber-200 text-center shadow-md">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                    />
                  </div>
                  <h4 className="text-amber-900 font-semibold mb-2 font-display">
                    Design Analysis
                  </h4>
                  <p className="text-amber-900/80 text-sm font-primary">
                    Our expert will analyze your personality and create unique
                    designs
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/10 to-amber-400/10 rounded-xl blur-lg transition-all duration-500"></div>
                <div className="relative bg-white rounded-xl p-6 border border-amber-200 text-center shadow-md">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-amber-900 font-semibold mb-2 font-display">
                    Personalized Design
                  </h4>
                  <p className="text-amber-900/80 text-sm font-primary">
                    Receive your custom signature design in multiple formats
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-xl blur-lg transition-all duration-500"></div>
                <div className="relative bg-white rounded-xl p-6 border border-amber-200 text-center shadow-md">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-amber-900 font-semibold mb-2 font-display">
                    Professional Guidance
                  </h4>
                  <p className="text-amber-900/80 text-sm font-primary">
                    Get tips on using your new signature effectively
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/signature-new" className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <button className="relative bg-white/30 backdrop-blur-xl rounded-full border border-amber-200/60 shadow-xl text-amber-900 px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 font-primary">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </button>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="text-center space-y-4 pt-8 border-t border-amber-200/60">
            <p className="text-amber-900/80 text-sm font-primary">
              Need immediate assistance? Contact us at{" "}
              <span className="text-gray-800 font-medium">
                support@easysoul.com
              </span>
            </p>
            <p className="text-amber-900/70 text-xs font-primary">
              You will receive a confirmation email shortly with all the
              details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignatureNewOrderConfirmationCashfree;
