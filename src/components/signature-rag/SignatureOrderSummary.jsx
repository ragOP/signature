import React, { useState } from "react";
import { Shield, Sparkles } from "lucide-react";

const SignatureOrderSummary = ({
  subtotal,
  discount,
  total,
  isCheckingOut,
  onCheckout,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleButtonClick = async () => {
    if (isCheckingOut) return;

    // Add pressed effect
    setIsPressed(true);

    // Call the actual checkout function immediately
    onCheckout();

    // Reset pressed effect after a short delay
    setTimeout(() => {
      setIsPressed(false);
    }, 200);
  };

  return (
    <div className="sticky top-8">
      <div className="relative group mb-8">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-blue-600/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
        <div className="relative bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-xl rounded-3xl p-6 border border-blue-200">
          <h3 className="text-xl font-bold text-blue-800 mb-6">
            Order Summary
          </h3>

          {/* Summary Items */}
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-blue-600">Subtotal</span>
              <span className="text-blue-800 font-semibold">
                ₹{subtotal.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-green-600">Discount</span>
              <span className="text-green-600 font-semibold">
                -₹{discount.toLocaleString()}
              </span>
            </div>
            <div className="border-t border-blue-100 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-blue-800">
                  Total
                </span>
                <span className="text-2xl font-bold text-blue-800">
                  ₹{total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Checkout Button */}
          <button
            onClick={handleButtonClick}
            disabled={isCheckingOut}
            className={`w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 rounded-full font-semibold transition-all duration-300 transform shadow-xl buy-now-shimmer disabled:opacity-50 disabled:cursor-not-allowed ${
              isPressed
                ? "scale-95 shadow-inner from-blue-700 to-blue-900"
                : "hover:from-blue-700 hover:to-blue-900 hover:scale-105 hover:shadow-blue-800/25"
            }`}
          >
            {isCheckingOut ? (
              <span className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Processing...</span>
              </span>
            ) : (
              <span className="flex items-center justify-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span>Complete Purchase</span>
                <Sparkles className="w-5 h-5" />
              </span>
            )}
          </button>

          {/* Security Badge */}
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center space-x-2 text-blue-500 text-sm">
              <Shield className="w-4 h-4" />
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignatureOrderSummary;
