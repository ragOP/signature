import React from 'react';
import { Sparkles, PenTool, Zap, ArrowRight, CheckCircle, Download } from 'lucide-react';

const ModernHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Modern Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/80 text-sm font-semibold">PROFESSIONAL SIGNATURE DESIGN</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
              Custom Signature
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Design Service
              </span>
            </h1>

            {/* Subheadline - Clear Product Description */}
            <p className="text-xl md:text-2xl text-white/70 mb-4 leading-relaxed">
              We create <span className="text-white font-bold">3 unique signature designs</span> tailored to your style, plus a comprehensive guide on signature mastery.
            </p>
            <p className="text-lg md:text-xl text-white/60 mb-8">
              Professional. Personal. Powerful.
            </p>

            {/* Key Benefits - Clear Value Prop */}
            <div className="space-y-3 mb-8 md:mb-10">
              {[
                '3 Custom Signature Designs',
                'Complete PDF Guide Included',
                '24-48 Hour Delivery',
                'Multiple File Formats (PNG, SVG, PDF)'
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/90 text-base md:text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group relative px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl font-bold text-white text-base md:text-lg shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <PenTool className="w-5 h-5 md:w-6 md:h-6 relative z-10" />
                <span className="relative z-10">Get Your Signature Now</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 md:px-10 py-4 md:py-5 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl font-bold text-white text-base md:text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3">
                <Download className="w-5 h-5 md:w-6 md:h-6" />
                <span>View Examples</span>
              </button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              
              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center p-4">
                  <img 
                    src="/signature-hero.webp" 
                    alt="Professional Signature Design Examples" 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src = "/assets_task_01k22vfckxfrwvajxyg1zn9s5t_1754590211_img_0.webp";
                    }}
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl px-4 py-2 shadow-xl border-2 border-white/20">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-white" />
                    <span className="text-white font-black text-sm">3 DESIGNS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
