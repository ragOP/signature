import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  X,
  Shield,
  Sparkles,
  Check,
  Star,
  Palette,
  Briefcase,
  Search,
  DollarSign,
} from "lucide-react";
import SignatureNavbar from "../components/signature/SignatureNavbar";
import SignatureTestimonialsSection from "../components/signature/SignatureTestimonialsSection";
import SignatureImageSlider from "../components/signature/SignatureImageSlider";
import SignatureCartItem from "../components/signature/SignatureCartItem";
import SignatureConsultationForm from "../components/signature/SignatureConsultationForm";
import SignatureOrderSummary from "../components/signature/SignatureOrderSummary";
import SignatureAdditionalProducts from "../components/signature/SignatureAdditionalProducts";
import axios from "axios";
import { BACKEND_URL } from "../utils/backendUrl";
import { load } from "@cashfreepayments/cashfree-js";
import { toast } from "react-toastify";

function SignatureCartCashFree() {
  const navigate = useNavigate();
  const location = useLocation();
  const [creatingSession, setCreatingSession] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "✍ Professional Signature Design",
      description:
        "Personalized professional signature design based on your name and personality",
      price: 589,
      originalPrice: 999,
      duration: "24-48 hours",
      features: [
        "Your Professional Signature Design",
        "Multiple Style Variations",
        "Digital & Print Ready Formats",
        "Lifetime Usage Rights",
      ],
      image: "/astro-hero.jpeg",
    },
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [animateElements, setAnimateElements] = useState(false);
  const [cashfree, setCashfree] = useState(null);
  const [sdkInitialized, setSdkInitialized] = useState(false);
  const [consultationFormData, setConsultationFormData] = useState({
    name: "",
    phoneNumber: "1234567890",
    email: "",
    profession: "",
    remarks: "",
  });

  // Additional products data
  const additionalProducts = [
    {
      id: 2,
      title: "✍️ Want to master your new signature perfectly?",
      description:
        "Add a printable sheet with your signature traced & outlined — just like handwriting practice sheets.",
      features: [
        "Light grey version for trace-over",
        "Lined version for repeat practice",
        "Adds premium feel for very little effort",
      ],
      price: 299,
      originalPrice: 499,
      icon: "✍️",
      color: {
        from: "from-gray-500/20",
        via: "via-black/20",
        to: "to-gray-500/20",
      },
    },
  ];

  useEffect(() => {
    // Scroll to top when component mounts or when navigating from other pages
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // Check if we're coming from a CTA button (with scrollToTop state)
    if (location.state?.scrollToTop) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    const timer = setTimeout(() => {
      setAnimateElements(true);
    }, 100);

    // Initialize Cashfree SDK
    initializeSDK();

    return () => {
      clearTimeout(timer);
    };
  }, [location.state]);

  // Initialize Cashfree SDK
  const initializeSDK = async () => {
    try {
      const cashfreeInstance = await load({
        // mode: "sandbox", // Change to "production" for live environment
        mode: "production"
      });
      setCashfree(cashfreeInstance);
      setSdkInitialized(true);
      console.log("Cashfree SDK initialized successfully");
    } catch (error) {
      console.error("Failed to initialize Cashfree SDK:", error);
      toast.error("Failed to initialize payment system");
      setSdkInitialized(false);
    }
  };

  const onProductToggle = (productId) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleConsultationFormSubmit = (formData) => {
    setConsultationFormData(formData);
    console.log("Consultation form submitted:", formData);
  };

  const removeItem = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  // Calculate cart totals including selected additional products
  const selectedAdditionalProducts = additionalProducts.filter((product) =>
    selectedProducts.includes(product.id)
  );

  const cartSubtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const additionalSubtotal = selectedAdditionalProducts.reduce(
    (sum, product) => sum + product.price,
    0
  );
  const subtotal = cartSubtotal + additionalSubtotal;

  const cartDiscount = cartItems.reduce(
    (sum, item) =>
      sum + (item.originalPrice - item.price) * (item.quantity || 1),
    0
  );
  const additionalDiscount = selectedAdditionalProducts.reduce(
    (sum, product) => sum + (product.originalPrice - product.price),
    0
  );
  const discount = cartDiscount + additionalDiscount;

  const total = subtotal;

  // Create Payment Session
  const createPaymentSession = async () => {
    if (creatingSession) {
      toast.error("Payment session is already being created. Please wait.");
      return null;
    }
    try {
      setCreatingSession(true);
      
      // Create abandoned cart first
      const abandonedCartRes = await axios.post(
        `${BACKEND_URL}/api/lander4/create-order-abd`,
        {
          amount: total,
          fullName: consultationFormData?.name,
          email: consultationFormData?.email,
          phoneNumber: consultationFormData?.phoneNumber,
          profession: consultationFormData?.profession,
          remarks: consultationFormData?.remarks,
          additionalProducts: selectedAdditionalProducts.map(product => product.title),
        },
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21hcGxlbGF3cHJvLmNvbS9uZXdhcHAvcHVibGljL2FwaS9sb2dpbiIsImlhdCI6MTc1ODg2ODcxNSwiZXhwIjoxNzYxNDYwNzE1LCJuYmYiOjE3NTg4Njg3MTUsImp0aSI6ImR2RktSaUZGeGJxN3FzU1UiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsInBlcm1pc3Npb25zIjpbInVzZXJzLnZpZXciLCJ1c2Vycy5jcmVhdGUiLCJ1c2Vycy5zaG93IiwidXNlcnMudXBkYXRlIiwidXNlcnMuZGVsZXRlIiwidXNlcnMuc3RhdHVzLnVwZGF0ZSIsInJvbGVzLnZpZXciLCJyb2xlcy5jcmVhdGUiLCJyb2xlcy5zaG93Iiwicm9sZXMudXBkYXRlIiwicm9sZXMuZGVsZXRlIiwicm9sZXMucGVybWlzc2lvbnMubWFuYWdlIiwibWFzdGVycy52aWV3IiwibWFzdGVycy5jcmVhdGUiLCJtYXN0ZXJzLnNob3ciLCJtYXN0ZXJzLnVwZGF0ZSIsIm1hc3RlcnMuZGVsZXRlIiwibWFzdGVycy5zdGF0dXMudXBkYXRlIiwiZXZlbnRzLnZpZXciLCJldmVudHMuY3JlYXRlIiwiZXZlbnRzLnNob3ciLCJldmVudHMudXBkYXRlIiwiZXZlbnRzLmRlbGV0ZSIsImV2ZW50cy50aW1lLnVwZGF0ZSIsImV2ZW50cy5hdHRhY2htZW50cy51cGxvYWQiLCJldmVudHMucmVtaW5kZXJzLmRlbGV0ZSIsImV2ZW50cy5wYXJ0aWNpcGFudHMuZGVsZXRlIiwiZXZlbnRzLmF0dGFjaG1lbnRzLmRlbGV0ZSIsInRhc2tzLnZpZXciLCJ0YXNrcy5jcmVhdGUiLCJ0YXNrcy5zaG93IiwidGFza3MudXBkYXRlIiwidGFza3MuZGVsZXRlIiwidGFza3Muc2VhcmNoIiwidGFza3MuZmlsdGVyIiwidGFza3Muc3RhdHVzLnVwZGF0ZSIsInRhc2tzLmF0dGFjaG1lbnRzLnVwbG9hZCIsInRhc2tzLnJlbWluZGVycy5kZWxldGUiLCJ0YXNrcy5hdHRhY2htZW50cy5kZWxldGUiLCJ0YXNrLWNvbW1lbnRzLnZpZXciLCJ0YXNrLWNvbW1lbnRzLmNyZWF0ZSIsInRhc2stY29tbWVudHMuc2hvdyIsInRhc2stY29tbWVudHMuYXR0YWNobWVudHMudXBsb2FkIiwiYWdlbmRhLnZpZXciLCJuZXdzZmVlZC52aWV3Iiwic2VhcmNoLmFkdmFuY2VkLnJ1biIsImRvY3VtZW50cy52aWV3IiwiZG9jdW1lbnRzLmZvbGRlcnMuY3JlYXRlIiwiZG9jdW1lbnRzLnVwbG9hZCIsImRvY3VtZW50cy5yZW5hbWUiLCJkb2N1bWVudHMuZGVsZXRlIiwiZG9jdW1lbnRzLml0ZW1zLmdldCIsImNvbW11bmljYXRpb25zLnZpZXciLCJjb21tdW5pY2F0aW9ucy5zbXMuc2VuZCJdfQ.9o7L8dG9tPZUr6ggvQ8W5j9A1V4p2P6tu8cTkrhfXBE`,
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
          },
        }
      );

      const abandonedCartID = abandonedCartRes.data.data._id;

      // Create payment session
      const apiResponse = await axios.post(
        `${BACKEND_URL}/api/payment/create-session`,
        {
          // amount: total,
          amount: 1,
          fullName: consultationFormData?.name,
          email: consultationFormData?.email,
          phoneNumber: consultationFormData?.phoneNumber,
          profession: consultationFormData?.profession,
          remarks: consultationFormData?.remarks,
          additionalProducts: selectedAdditionalProducts.map(product => product.title),
          orderType: "normal",
          quantity: 1
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21hcGxlbGF3cHJvLmNvbS9uZXdhcHAvcHVibGljL2FwaS9sb2dpbiIsImlhdCI6MTc1ODg2ODcxNSwiZXhwIjoxNzYxNDYwNzE1LCJuYmYiOjE3NTg4Njg3MTUsImp0aSI6ImR2RktSaUZGeGJxN3FzU1UiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsInBlcm1pc3Npb25zIjpbInVzZXJzLnZpZXciLCJ1c2Vycy5jcmVhdGUiLCJ1c2Vycy5zaG93IiwidXNlcnMudXBkYXRlIiwidXNlcnMuZGVsZXRlIiwidXNlcnMuc3RhdHVzLnVwZGF0ZSIsInJvbGVzLnZpZXciLCJyb2xlcy5jcmVhdGUiLCJyb2xlcy5zaG93Iiwicm9sZXMudXBkYXRlIiwicm9sZXMuZGVsZXRlIiwicm9sZXMucGVybWlzc2lvbnMubWFuYWdlIiwibWFzdGVycy52aWV3IiwibWFzdGVycy5jcmVhdGUiLCJtYXN0ZXJzLnNob3ciLCJtYXN0ZXJzLnVwZGF0ZSIsIm1hc3RlcnMuZGVsZXRlIiwibWFzdGVycy5zdGF0dXMudXBkYXRlIiwiZXZlbnRzLnZpZXciLCJldmVudHMuY3JlYXRlIiwiZXZlbnRzLnNob3ciLCJldmVudHMudXBkYXRlIiwiZXZlbnRzLmRlbGV0ZSIsImV2ZW50cy50aW1lLnVwZGF0ZSIsImV2ZW50cy5hdHRhY2htZW50cy51cGxvYWQiLCJldmVudHMucmVtaW5kZXJzLmRlbGV0ZSIsImV2ZW50cy5wYXJ0aWNpcGFudHMuZGVsZXRlIiwiZXZlbnRzLmF0dGFjaG1lbnRzLmRlbGV0ZSIsInRhc2tzLnZpZXciLCJ0YXNrcy5jcmVhdGUiLCJ0YXNrcy5zaG93IiwidGFza3MudXBkYXRlIiwidGFza3MuZGVsZXRlIiwidGFza3Muc2VhcmNoIiwidGFza3MuZmlsdGVyIiwidGFza3Muc3RhdHVzLnVwZGF0ZSIsInRhc2tzLmF0dGFjaG1lbnRzLnVwbG9hZCIsInRhc2tzLnJlbWluZGVycy5kZWxldGUiLCJ0YXNrcy5hdHRhY2htZW50cy5kZWxldGUiLCJ0YXNrLWNvbW1lbnRzLnZpZXciLCJ0YXNrLWNvbW1lbnRzLmNyZWF0ZSIsInRhc2stY29tbWVudHMuc2hvdyIsInRhc2stY29tbWVudHMuYXR0YWNobWVudHMudXBsb2FkIiwiYWdlbmRhLnZpZXciLCJuZXdzZmVlZC52aWV3Iiwic2VhcmNoLmFkdmFuY2VkLnJ1biIsImRvY3VtZW50cy52aWV3IiwiZG9jdW1lbnRzLmZvbGRlcnMuY3JlYXRlIiwiZG9jdW1lbnRzLnVwbG9hZCIsImRvY3VtZW50cy5yZW5hbWUiLCJkb2N1bWVudHMuZGVsZXRlIiwiZG9jdW1lbnRzLml0ZW1zLmdldCIsImNvbW11bmljYXRpb25zLnZpZXciLCJjb21tdW5pY2F0aW9ucy5zbXMuc2VuZCJdfQ.9o7L8dG9tPZUr6ggvQ8W5j9A1V4p2P6tu8cTkrhfXBE`,
          },
        }
      );

      // localStorage.setItem("cashfree_payment_session_id", apiResponse?.data?.data);
      console.log("Payment session created:", apiResponse);
      return apiResponse?.data?.data?.payment_session_id;
    } catch (error) {
      console.error("Error creating payment session:", error);
      toast.error("Failed to create payment session. Please try again.");
      return null;
    } finally {
      setCreatingSession(false);
    }
  };

  const doPayment = async () => {
        // Check if SDK is initialized
        if (!sdkInitialized || !cashfree) {
          toast.error("Payment system is not ready. Please try again in a moment.");
          return;
        }
    const paymentSessionId = await createPaymentSession();
    console.log("paymentsessionid", paymentSessionId)

    if (!paymentSessionId) {
      return;
    }

    try {
      setIsCheckingOut(true);
      
      const checkoutOptions = {
        paymentSessionId: paymentSessionId,
        redirectTarget: "_self",
      };

      cashfree.checkout(checkoutOptions);
    } catch (error) {
      console.error("Error during payment:", error);
      toast.error("An error occurred during payment. Please try again.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 selection:bg-gray-500/20 selection:text-white">
      {/* Navigation */}
      <div className="relative z-50">
        <SignatureNavbar />
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent_50%)]"></div>

        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            <div
              className={`w-1 h-1 rounded-full ${
                i % 3 === 0
                  ? "bg-gray-400"
                  : i % 3 === 1
                  ? "bg-blue-400"
                  : "bg-black"
              } opacity-60`}
            ></div>
          </div>
        ))}
      </div>

      {/* Cart Content */}
      <section className="relative pt-2 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-4 sm:mb-6 px-4 mt-4 sm:mt-6 transition-all duration-1000 transform ${
              animateElements
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2">
              <span className="bg-gradient-to-r from-gray-800 via-black to-gray-800 bg-clip-text text-transparent animate-pulse">
                Your Signature Cart
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto px-2">
              Review your selected signature design and prepare for your
              professional journey
            </p>
          </div>

          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div
              className={`max-w-2xl px-4 mx-auto transition-all duration-1000 delay-300 transform ${
                animateElements
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-95"
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-500/20 via-black/20 to-gray-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-gray-200">
                  <div className="text-center space-y-4 sm:space-y-6">
                    <div className="text-4xl sm:text-6xl mb-3 sm:mb-4 animate-bounce">
                      ✍️
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                      Your Signature Cart is Empty
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 px-2">
                      Ready to create your professional signature? Browse our
                      signature services!
                    </p>
                    <Link
                      to="/signature"
                      className="inline-block bg-gradient-to-r from-gray-800 to-black text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105 buy-now-shimmer text-sm sm:text-base"
                    >
                      <span>Explore Signature Services</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Cart Items - Mobile Layout */}
              <div
                className={`lg:hidden grid grid-cols-1 px-4 gap-4 sm:gap-6 transition-all duration-1000 delay-500 transform ${
                  animateElements
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {/* Cart Items List */}
                <div className="space-y-4 sm:space-y-6">
                  {cartItems.map((item, index) => (
                    <div
                      key={item.id}
                      className={`transition-all duration-700 delay-${
                        index * 200
                      } transform ${
                        animateElements
                          ? "translate-x-0 opacity-100"
                          : "translate-x-8 opacity-0"
                      }`}
                    >
                      <SignatureCartItem
                        item={item}
                        onRemove={removeItem}
                        showRemoveButton={false}
                      />
                    </div>
                  ))}
                </div>

                {/* Order Summary and Forms - Mobile: Stacked */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Additional Products Section */}
                  <div
                    className={`transition-all duration-700 delay-700 transform ${
                      animateElements
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <SignatureAdditionalProducts
                      products={additionalProducts}
                      selectedProducts={selectedProducts}
                      onProductToggle={onProductToggle}
                    />
                  </div>

                  {/* Consultation Form */}
                  <div
                    className={`transition-all duration-700 delay-800 transform ${
                      animateElements
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <SignatureConsultationForm
                      onSubmit={handleConsultationFormSubmit}
                      formData={consultationFormData}
                      setFormData={setConsultationFormData}
                    />
                  </div>

                  {/* Order Summary */}
                  <div
                    className={`transition-all duration-700 delay-900 transform ${
                      animateElements
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <SignatureOrderSummary
                      subtotal={subtotal}
                      discount={discount}
                      total={total}
                      isCheckingOut={isCheckingOut}
                      onCheckout={doPayment}
                    />
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div
                className={`hidden lg:block px-4 transition-all duration-1000 delay-500 transform ${
                  animateElements
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="max-w-6xl mx-auto space-y-8">
                  {/* Main Cart Item */}
                  <div
                    className={`transition-all duration-700 delay-200 transform ${
                      animateElements
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
                  >
                    {cartItems.map((item) => (
                      <SignatureCartItem
                        key={item.id}
                        item={item}
                        onRemove={removeItem}
                        showRemoveButton={false}
                      />
                    ))}
                  </div>

                  {/* Additional Products Section */}
                  <div
                    className={`transition-all duration-700 delay-400 transform ${
                      animateElements
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <SignatureAdditionalProducts
                      products={additionalProducts}
                      selectedProducts={selectedProducts}
                      onProductToggle={onProductToggle}
                    />
                  </div>

                  {/* Consultation Form */}
                  <div
                    className={`transition-all duration-700 delay-600 transform ${
                      animateElements
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <SignatureConsultationForm
                      onSubmit={handleConsultationFormSubmit}
                      formData={consultationFormData}
                      setFormData={setConsultationFormData}
                    />
                  </div>

                  {/* Order Summary */}
                  <div
                    className={`transition-all duration-700 delay-800 transform ${
                      animateElements
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <SignatureOrderSummary
                      subtotal={subtotal}
                      discount={discount}
                      total={total}
                      isCheckingOut={isCheckingOut}
                      // onCheckout={handleCheckout}
                      onCheckout={doPayment}
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <SignatureTestimonialsSection />
        </div>
      </section>
    </div>
  );
}

export default SignatureCartCashFree;
