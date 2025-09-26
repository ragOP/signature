import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router";
import { BACKEND_URL } from "../utils/backendUrl";
import axios from "axios";
import Lottie from "lottie-react";
import OrderProcessing from "../assets/OrderProcessing.json";
import OrderSuccessful from "../assets/OrderSuccessful.json";
import OrderFailed from "../assets/OrderFailed.json";

const SignaturePaymentProcessing = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("processing"); // processing | success | failed
  const [cashfreeOrderId, setCashfreeOrderId] = useState(null);

  const orderId = searchParams.get("orderId");
  const orderType = searchParams.get("orderType");

  useEffect(() => {
    if (!orderId) {
      toast.error("Invalid order ID");
      setStatus("failed");
      return;
    }

    const verifyAndPlaceOrder = async () => {
      try {
        // First verify the payment status with Cashfree
        const apiResponse = await axios.get(
          `${BACKEND_URL}/api/payment/cashfree-order/${orderId}`,
          {
            headers: {
              "Content-Type": "application/json",
            //   Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21hcGxlbGF3cHJvLmNvbS9uZXdhcHAvcHVibGljL2FwaS9sb2dpbiIsImlhdCI6MTc1ODg2ODcxNSwiZXhwIjoxNzYxNDYwNzE1LCJuYmYiOjE3NTg4Njg3MTUsImp0aSI6ImR2RktSaUZGeGJxN3FzU1UiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsInBlcm1pc3Npb25zIjpbInVzZXJzLnZpZXciLCJ1c2Vycy5jcmVhdGUiLCJ1c2Vycy5zaG93IiwidXNlcnMudXBkYXRlIiwidXNlcnMuZGVsZXRlIiwidXNlcnMuc3RhdHVzLnVwZGF0ZSIsInJvbGVzLnZpZXciLCJyb2xlcy5jcmVhdGUiLCJyb2xlcy5zaG93Iiwicm9sZXMudXBkYXRlIiwicm9sZXMuZGVsZXRlIiwicm9sZXMucGVybWlzc2lvbnMubWFuYWdlIiwibWFzdGVycy52aWV3IiwibWFzdGVycy5jcmVhdGUiLCJtYXN0ZXJzLnNob3ciLCJtYXN0ZXJzLnVwZGF0ZSIsIm1hc3RlcnMuZGVsZXRlIiwibWFzdGVycy5zdGF0dXMudXBkYXRlIiwiZXZlbnRzLnZpZXciLCJldmVudHMuY3JlYXRlIiwiZXZlbnRzLnNob3ciLCJldmVudHMudXBkYXRlIiwiZXZlbnRzLmRlbGV0ZSIsImV2ZW50cy50aW1lLnVwZGF0ZSIsImV2ZW50cy5hdHRhY2htZW50cy51cGxvYWQiLCJldmVudHMucmVtaW5kZXJzLmRlbGV0ZSIsImV2ZW50cy5wYXJ0aWNpcGFudHMuZGVsZXRlIiwiZXZlbnRzLmF0dGFjaG1lbnRzLmRlbGV0ZSIsInRhc2tzLnZpZXciLCJ0YXNrcy5jcmVhdGUiLCJ0YXNrcy5zaG93IiwidGFza3MudXBkYXRlIiwidGFza3MuZGVsZXRlIiwidGFza3Muc2VhcmNoIiwidGFza3MuZmlsdGVyIiwidGFza3Muc3RhdHVzLnVwZGF0ZSIsInRhc2tzLmF0dGFjaG1lbnRzLnVwbG9hZCIsInRhc2tzLnJlbWluZGVycy5kZWxldGUiLCJ0YXNrcy5hdHRhY2htZW50cy5kZWxldGUiLCJ0YXNrLWNvbW1lbnRzLnZpZXciLCJ0YXNrLWNvbW1lbnRzLmNyZWF0ZSIsInRhc2stY29tbWVudHMuc2hvdyIsInRhc2stY29tbWVudHMuYXR0YWNobWVudHMudXBsb2FkIiwiYWdlbmRhLnZpZXciLCJuZXdzZmVlZC52aWV3Iiwic2VhcmNoLmFkdmFuY2VkLnJ1biIsImRvY3VtZW50cy52aWV3IiwiZG9jdW1lbnRzLmZvbGRlcnMuY3JlYXRlIiwiZG9jdW1lbnRzLnVwbG9hZCIsImRvY3VtZW50cy5yZW5hbWUiLCJkb2N1bWVudHMuZGVsZXRlIiwiZG9jdW1lbnRzLml0ZW1zLmdldCIsImNvbW11bmljYXRpb25zLnZpZXciLCJjb21tdW5pY2F0aW9ucy5zbXMuc2VuZCJdfQ.9o7L8dG9tPZUr6ggvQ8W5j9A1V4p2P6tu8cTkrhfXBE`,
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
            },
          }
        );

        const paymentData = apiResponse?.data?.data;

        if (paymentData?.order_status === "PAID") {
          // Payment successful, now create the order
          await createOrder();
        } else {
          setStatus("failed");
          toast.error("Payment not verified. Redirecting to cart.");
          navigate(-1);
          setTimeout(() => {
            if (window.location.pathname.includes("payment-processing")) {
              navigate("/");
            }
          }, 500);
        }
      } catch (error) {
        console.error("Payment verification error:", error);
        setStatus("failed");
        toast.error("Something went wrong during payment verification.");
        navigate(-1);
        setTimeout(() => {
          if (window.location.pathname.includes("payment-processing")) {
            navigate("/");
          }
        }, 500);
      }
    };

    const createOrder = async () => {
      try {
        const orderResponse = await axios.post(
          `${BACKEND_URL}/api/lander4/create-order`,
          {
            cashfreeOrderId: orderId,
            orderType: orderType || "normal",
          },
          {
            headers: {
              "Content-Type": "application/json",
            //   Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21hcGxlbGF3cHJvLmNvbS9uZXdhcHAvcHVibGljL2FwaS9sb2dpbiIsImlhdCI6MTc1ODg2ODcxNSwiZXhwIjoxNzYxNDYwNzE1LCJuYmYiOjE3NTg4Njg3MTUsImp0aSI6ImR2RktSaUZGeGJxN3FzU1UiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsInBlcm1pc3Npb25zIjpbInVzZXJzLnZpZXciLCJ1c2Vycy5jcmVhdGUiLCJ1c2Vycy5zaG93IiwidXNlcnMudXBkYXRlIiwidXNlcnMuZGVsZXRlIiwidXNlcnMuc3RhdHVzLnVwZGF0ZSIsInJvbGVzLnZpZXciLCJyb2xlcy5jcmVhdGUiLCJyb2xlcy5zaG93Iiwicm9sZXMudXBkYXRlIiwicm9sZXMuZGVsZXRlIiwicm9sZXMucGVybWlzc2lvbnMubWFuYWdlIiwibWFzdGVycy52aWV3IiwibWFzdGVycy5jcmVhdGUiLCJtYXN0ZXJzLnNob3ciLCJtYXN0ZXJzLnVwZGF0ZSIsIm1hc3RlcnMuZGVsZXRlIiwibWFzdGVycy5zdGF0dXMudXBkYXRlIiwiZXZlbnRzLnZpZXciLCJldmVudHMuY3JlYXRlIiwiZXZlbnRzLnNob3ciLCJldmVudHMudXBkYXRlIiwiZXZlbnRzLmRlbGV0ZSIsImV2ZW50cy50aW1lLnVwZGF0ZSIsImV2ZW50cy5hdHRhY2htZW50cy51cGxvYWQiLCJldmVudHMucmVtaW5kZXJzLmRlbGV0ZSIsImV2ZW50cy5wYXJ0aWNpcGFudHMuZGVsZXRlIiwiZXZlbnRzLmF0dGFjaG1lbnRzLmRlbGV0ZSIsInRhc2tzLnZpZXciLCJ0YXNrcy5jcmVhdGUiLCJ0YXNrcy5zaG93IiwidGFza3MudXBkYXRlIiwidGFza3MuZGVsZXRlIiwidGFza3Muc2VhcmNoIiwidGFza3MuZmlsdGVyIiwidGFza3Muc3RhdHVzLnVwZGF0ZSIsInRhc2tzLmF0dGFjaG1lbnRzLnVwbG9hZCIsInRhc2tzLnJlbWluZGVycy5kZWxldGUiLCJ0YXNrcy5hdHRhY2htZW50cy5kZWxldGUiLCJ0YXNrLWNvbW1lbnRzLnZpZXciLCJ0YXNrLWNvbW1lbnRzLmNyZWF0ZSIsInRhc2stY29tbWVudHMuc2hvdyIsInRhc2stY29tbWVudHMuYXR0YWNobWVudHMudXBsb2FkIiwiYWdlbmRhLnZpZXciLCJuZXdzZmVlZC52aWV3Iiwic2VhcmNoLmFkdmFuY2VkLnJ1biIsImRvY3VtZW50cy52aWV3IiwiZG9jdW1lbnRzLmZvbGRlcnMuY3JlYXRlIiwiZG9jdW1lbnRzLnVwbG9hZCIsImRvY3VtZW50cy5yZW5hbWUiLCJkb2N1bWVudHMuZGVsZXRlIiwiZG9jdW1lbnRzLml0ZW1zLmdldCIsImNvbW11bmljYXRpb25zLnZpZXciLCJjb21tdW5pY2F0aW9ucy5zbXMuc2VuZCJdfQ.9o7L8dG9tPZUr6ggvQ8W5j9A1V4p2P6tu8cTkrhfXBE`,
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
            },
          }
        );

        if (orderResponse?.data?.success) {
          setCashfreeOrderId(orderId);
          setStatus("success");
          toast.success("Order placed successfully!");
        } else {
          setStatus("failed");
          toast.error("Failed to place order");
        }
      } catch (error) {
        console.error("Order creation error:", error);
        setStatus("failed");
        toast.error("Failed to place order");
      }
    };

    verifyAndPlaceOrder();
    window.history.replaceState(null, "", "/payment-processing#done");
  }, [orderId, orderType, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] py-8">
      {status === "processing" && (
        <>
          <Lottie
            animationData={OrderProcessing}
            style={{ width: 180, height: 180 }}
          />
          <h2 className="text-xl font-bold mt-4 text-blue-700">
            Processing your payment...
          </h2>
          <p className="text-gray-600 mt-2">
            Please wait while we verify your payment and place your order.
          </p>
        </>
      )}
      {status === "success" && (
        <>
          <Lottie
            animationData={OrderSuccessful}
            style={{ width: 180, height: 180 }}
          />
          <h1 className="text-2xl font-bold text-green-600 mt-2">Thank You!</h1>
          <p className="text-lg text-gray-700 mt-2">
            Your payment was successful and your order has been placed.
          </p>
          {cashfreeOrderId && (
            <p className="mt-2 text-gray-700">
              <strong>Cashfree Order ID:</strong> {cashfreeOrderId}
            </p>
          )}
          <button
            onClick={() => navigate("/signature-order-confirmation-cashfree", {
              state: {
                orderId: cashfreeOrderId,
                amount: "N/A", // You might want to get this from the order response
                paymentMethod: "Cashfree"
              }
            })}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            View Order Details
          </button>
        </>
      )}
      {status === "failed" && (
        <>
          <Lottie
            animationData={OrderFailed}
            style={{ width: 180, height: 180 }}
          />
          <h1 className="text-2xl font-bold text-red-600 mt-2">
            Payment Failed
          </h1>
          <p className="text-lg text-gray-700 mt-2">
            Sorry, your payment could not be verified or the order could not be
            placed.
          </p>
          <button
            onClick={() => navigate("/signature-cart")}
            className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Back to Cart
          </button>
        </>
      )}
    </div>
  );
};

export default SignaturePaymentProcessing;
