import React from 'react';
import { Sparkles, PenTool, Download, Star, Crown, Zap } from 'lucide-react';

const PremiumHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden premium-hero-bg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff] via-[#fef9f6] to-[#FBCEB1]"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[rgba(251,206,177,0.08)] rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[rgba(251,206,177,0.06)] rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-[rgba(251,206,177,0.06)] rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,206,177,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(251,206,177,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(251,206,177,0.03)] to-transparent -skew-x-12 animate-shimmer"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[rgba(251,206,177,0.15)] backdrop-blur-xl border border-[rgba(251,206,177,0.3)] mb-8 md:mb-12 animate-fade-in shadow-md">
            <Crown className="w-4 h-4 text-[#FBCEB1]" />
            <span className="text-sm md:text-base font-semibold text-[#555555] tracking-wide">PREMIUM SIGNATURE DESIGN</span>
            <Zap className="w-4 h-4 text-[#FBCEB1]" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-[#2d2a26] mb-6 md:mb-8 leading-[1.1] animate-slide-up tracking-tight">
            <span className="block mb-2">Your Signature,</span>
            <span className="block premium-gradient-text relative">
              Your Legacy
              <span className="absolute -inset-1 bg-[rgba(251,206,177,0.15)] rounded-lg blur-lg opacity-50 animate-pulse"></span>
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#5c5651] mb-8 md:mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay font-light px-4">
            Transform your signature into a powerful symbol of your identity. 
            <span className="block mt-2 text-[#555555] font-medium">Get a professionally designed signature plus a comprehensive guide explaining why it matters and how to perfect it.</span>
          </p>

          <div className="mb-12 md:mb-16 max-w-4xl mx-auto px-4 animate-fade-in-delay">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[rgba(251,206,177,0.25)] shadow-xl bg-white/80 backdrop-blur-sm">
              <img
                src="/signature-hero.webp"
                alt="Premium Signature Design"
                className="w-full h-auto object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                onError={(e) => {
                  e.target.src = "/assets_task_01k22vfckxfrwvajxyg1zn9s5t_1754590211_img_0.webp";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(254,249,246,0.6)] via-transparent to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 max-w-5xl mx-auto px-4">
            <div className="group relative bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[rgba(251,206,177,0.2)] hover:border-[rgba(251,206,177,0.45)] transition-all duration-500 animate-slide-up-delay-1 shadow-lg hover:shadow-[0_20px_40px_rgba(251,206,177,0.15)] hover:-translate-y-2">
              <div className="relative z-10">
                <div className="inline-flex p-3 md:p-4 rounded-xl bg-[linear-gradient(135deg,#FBCEB1,#fde4d4)] mb-4 md:mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <PenTool className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#2d2a26] mb-2 md:mb-3">Custom Design</h3>
                <p className="text-xs md:text-sm text-[#5c5651] leading-relaxed">3 unique signature designs tailored to your style and profession</p>
              </div>
            </div>
            
            <div className="group relative bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[rgba(251,206,177,0.2)] hover:border-[rgba(251,206,177,0.45)] transition-all duration-500 animate-slide-up-delay-2 shadow-lg hover:shadow-[0_20px_40px_rgba(251,206,177,0.12)] hover:-translate-y-2">
              <div className="relative z-10">
                <div className="inline-flex p-3 md:p-4 rounded-xl bg-gradient-to-br from-[#FBCEB1] to-[#fde4d4] mb-4 md:mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Download className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#2d2a26] mb-2 md:mb-3">Complete Guide</h3>
                <p className="text-xs md:text-sm text-[#5c5651] leading-relaxed">Comprehensive PDF guide on signature importance and best practices</p>
              </div>
            </div>
            
            <div className="group relative bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[rgba(251,206,177,0.2)] hover:border-[rgba(251,206,177,0.45)] transition-all duration-500 animate-slide-up-delay-3 shadow-lg hover:shadow-[0_20px_40px_rgba(251,206,177,0.15)] hover:-translate-y-2">
              <div className="relative z-10">
                <div className="inline-flex p-3 md:p-4 rounded-xl bg-[linear-gradient(135deg,#FBCEB1,#fde4d4)] mb-4 md:mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#2d2a26] mb-2 md:mb-3">Professional Quality</h3>
                <p className="text-xs md:text-sm text-[#5c5651] leading-relaxed">Expertly crafted by signature design professionals</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-delay-2 px-4">
            <a href="/signature-cart">
              <button className="group relative px-8 md:px-12 py-4 md:py-5 bg-[linear-gradient(135deg,#FBCEB1_0%,#fde4d4_50%,#FBCEB1_100%)] rounded-full font-bold text-white text-base md:text-lg shadow-xl hover:shadow-[0_20px_50px_rgba(251,206,177,0.4)] transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" />
                  Get Your Signature Now
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 group-hover:-rotate-12 transition-transform duration-300" />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-9 md:w-6 md:h-10 border-2 border-[rgba(251,206,177,0.4)] rounded-full flex justify-center backdrop-blur-sm bg-white/30">
          <div className="w-1 h-2 md:h-3 bg-[linear-gradient(to_bottom,#FBCEB1,#fde4d4)] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;
