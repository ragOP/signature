import { Link, useLocation } from "react-router-dom";
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
import NewNavbar from "../../components/new/NewNavbar";
import TestimonialsSection from "../../components/new/TestimonialsSection";
import ShimmerCTA from "../../components/new/ShimmerCTA";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../utils/backendUrl";

function NewCart() {
  const navigate = useNavigate();
  const location = useLocation();
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
      image: "/signature-hero.webp",
    },
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [animateElements, setAnimateElements] = useState(false);
  const [consultationFormData, setConsultationFormData] = useState({
    name: "",
    phoneNumber: "",
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

    return () => {
      clearTimeout(timer);
    };
  }, [location.state]);

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

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js").then(
      (result) => {
        if (result) {
          console.log("Razorpay script loaded successfully");
        }
      }
    );
  }, []);

  console.log(consultationFormData);

  const handleCheckout = async () => {
    const additionalProducts = selectedAdditionalProducts.map(
      (product) => product.title
    );
    try {
      setIsCheckingOut(true);

      const abodentCartRes = await axios.post(
        `${BACKEND_URL}/api/lander4/create-order-abd`,
        {
          amount: total,
          fullName: consultationFormData?.name,
          email: consultationFormData?.email,
          phoneNumber: consultationFormData?.phoneNumber,
          profession: consultationFormData?.profession,
          remarks: consultationFormData?.remarks,
          additionalProducts: additionalProducts,
        }
      );

      const abodentCartID = abodentCartRes.data.data._id;

      const res = await axios.post(`${BACKEND_URL}/api/payment/razorpay`, {
        amount: total,
      });

      const data = res.data.data;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: total,
        currency: "INR",
        name: "Signature Studio",
        description: "Signature Design Order Payment",
        order_id: data.orderId,
        handler: async function (response) {
          try {
            await axios.post(`${BACKEND_URL}/api/lander4/create-order`, {
              amount: total,
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
              fullName: consultationFormData?.name,
              email: consultationFormData?.email,
              phoneNumber: consultationFormData?.phoneNumber,
              profession: consultationFormData?.profession,
              remarks: consultationFormData?.remarks,
              orderId: data.orderId,
              additionalProducts: additionalProducts,
            });

            await axios.delete(
              `${BACKEND_URL}/api/lander4/delete-order-abd/${abodentCartID}`
            );

            navigate("/signature-order-confirmation", {
              state: {
                orderId: data.orderId,
                amount: total,
              },
            });
          } catch (error) {
            console.error("Error creating order:", error);
            alert(
              "Payment successful but order creation failed. Please contact support."
            );
          }
        },
        prefill: {
          name: consultationFormData?.name,
          email: consultationFormData?.email,
          contact: consultationFormData?.phoneNumber,
        },
        theme: {
          color: "#000000",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.log(error);
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      {/* Navbar */}
      <NewNavbar />

      {/* Cart Content */}
      <section className="relative py-8" style={{ backgroundColor: '#6bc3af' }}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div
            className={`text-center mb-8 transition-all duration-1000 transform ${
              animateElements
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-5xl italic font-bold text-white mb-4">
              Your Signature <span className="text-yellow-300">Cart</span>
            </h1>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Review your selected signature design and prepare for your professional journey
            </p>
          </div>

          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div
              className={`max-w-2xl mx-auto transition-all duration-1000 delay-300 transform ${
                animateElements
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-95"
              }`}
            >
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="text-center space-y-6">
                  <div className="text-6xl mb-4 animate-bounce">
                    ✍️
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Your Signature Cart is Empty
                  </h3>
                  <p className="text-gray-600">
                    Ready to create your professional signature? Browse our signature services!
                  </p>
                  <div className="flex justify-center">
                    <Link
                      to="/new"
                      className="inline-block"
                    >
                      <ShimmerCTA text="Explore Signature Services" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div
                className={`space-y-6 transition-all duration-1000 delay-300 transform ${
                  animateElements
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {/* Main Cart Item */}
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Product Image */}
                    <div className="md:w-48 flex-shrink-0">
                      <img
                        src={cartItems[0].image}
                        alt={cartItems[0].name}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {cartItems[0].name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {cartItems[0].description}
                      </p>
                      
                      {/* Features */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        {cartItems[0].features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Price */}
                      <div className="flex items-center gap-4">
                        <span className="text-3xl font-bold text-gray-900">
                          ₹{cartItems[0].price}
                        </span>
                        <span className="text-xl text-gray-500 line-through">
                          ₹{cartItems[0].originalPrice}
                        </span>
                        <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
                          Save ₹{cartItems[0].originalPrice - cartItems[0].price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Products Section */}
                <div
                  className={`transition-all duration-1000 delay-500 transform ${
                    animateElements
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Add More to Your Order
                    </h3>
                    <div className="space-y-4">
                      {additionalProducts.map((product) => (
                        <div
                          key={product.id}
                          className="border border-gray-200 rounded-lg p-4 hover:border-yellow-400 transition-colors"
                        >
                          <div className="flex items-start gap-4">
                            <input
                              type="checkbox"
                              id={`product-${product.id}`}
                              checked={selectedProducts.includes(product.id)}
                              onChange={() => onProductToggle(product.id)}
                              className="mt-1 w-4 h-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-2">
                                {product.title}
                              </h4>
                              <p className="text-gray-600 text-sm mb-3">
                                {product.description}
                              </p>
                              <div className="space-y-1">
                                {product.features.map((feature, index) => (
                                  <div key={index} className="flex items-center gap-2">
                                    <Check className="w-3 h-3 text-green-500" />
                                    <span className="text-xs text-gray-600">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-gray-900">
                                ₹{product.price}
                              </div>
                              <div className="text-sm text-gray-500 line-through">
                                ₹{product.originalPrice}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Consultation Form */}
                <div
                  className={`transition-all duration-1000 delay-700 transform ${
                    animateElements
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Tell Us About Yourself
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={consultationFormData.name}
                          onChange={(e) => setConsultationFormData({
                            ...consultationFormData,
                            name: e.target.value
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={consultationFormData.email}
                          onChange={(e) => setConsultationFormData({
                            ...consultationFormData,
                            email: e.target.value
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          value={consultationFormData.phoneNumber}
                          onChange={(e) => setConsultationFormData({
                            ...consultationFormData,
                            phoneNumber: e.target.value
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Profession
                        </label>
                        <input
                          type="text"
                          value={consultationFormData.profession}
                          onChange={(e) => setConsultationFormData({
                            ...consultationFormData,
                            profession: e.target.value
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          placeholder="e.g., Lawyer, Doctor, Executive"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Special Requirements (Optional)
                      </label>
                      <textarea
                        value={consultationFormData.remarks}
                        onChange={(e) => setConsultationFormData({
                          ...consultationFormData,
                          remarks: e.target.value
                        })}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        placeholder="Any specific style preferences or requirements..."
                      />
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div
                  className={`transition-all duration-1000 delay-900 transform ${
                    animateElements
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Order Summary
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-semibold">₹{subtotal}</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span>-₹{discount}</span>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between text-xl font-bold">
                          <span>Total</span>
                          <span>₹{total}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <div className="flex justify-center">
                        <ShimmerCTA 
                          text={isCheckingOut ? "Processing..." : "Proceed to Payment"} 
                          onClick={handleCheckout}
                          disabled={isCheckingOut || !consultationFormData.name || !consultationFormData.email || !consultationFormData.phoneNumber}
                        />
                      </div>
                      <p className="text-xs text-gray-500 text-center mt-2">
                        Secure payment powered by Razorpay
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Testimonials Section */}
          <div className="mt-12">
            <TestimonialsSection />
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewCart;
