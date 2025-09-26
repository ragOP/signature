import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  CheckCircle,
  Star,
  Sparkles,
  PhoneCall,
  ArrowLeft,
  FileText,
  Signature,
} from "lucide-react";

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
const SignatureNewOrderConfirmationPage = () => {
  const { orderId, amount } = useLocation().state;

  // const orderId = "1234567890";
  // const amount = 1000;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

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

export default SignatureNewOrderConfirmationPage;
