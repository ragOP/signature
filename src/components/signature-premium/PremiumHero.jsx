import React from 'react';
import { Sparkles, PenTool, Download, Star, Crown, Zap } from 'lucide-react';

const PremiumHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden premium-hero-bg">
      {/* Premium Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/20 via-yellow-500/10 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-600/20 via-indigo-600/10 to-transparent rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-shimmer"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-500/20 to-amber-500/20 backdrop-blur-xl border border-amber-400/30 mb-8 md:mb-12 animate-fade-in shadow-lg shadow-amber-500/10">
            <Crown className="w-4 h-4 text-amber-400" />
            <span className="text-sm md:text-base font-semibold text-amber-100 tracking-wide">PREMIUM SIGNATURE DESIGN</span>
            <Zap className="w-4 h-4 text-amber-400" />
          </div>

          {/* Main Heading with Premium Typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-6 md:mb-8 leading-[1.1] animate-slide-up tracking-tight">
            <span className="block mb-2">Your Signature,</span>
            <span className="block premium-gradient-text relative">
              Your Legacy
              <span className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 rounded-lg blur-lg opacity-30 animate-pulse"></span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 md:mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay font-light px-4">
            Transform your signature into a powerful symbol of your identity. 
            <span className="block mt-2 text-amber-200 font-medium">Get a professionally designed signature plus a comprehensive guide explaining why it matters and how to perfect it.</span>
          </p>

          {/* Hero Image */}
          <div className="mb-12 md:mb-16 max-w-4xl mx-auto px-4 animate-fade-in-delay">
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-2xl shadow-amber-500/20 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl">
              <img 
                src="/signature-hero.webp" 
                alt="Premium Signature Design" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.src = "/assets_task_01k22vfckxfrwvajxyg1zn9s5t_1754590211_img_0.webp";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Premium Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 max-w-5xl mx-auto px-4">
            <div className="group relative bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-700/50 hover:border-amber-500/50 transition-all duration-500 animate-slide-up-delay-1 shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-yellow-500/0 to-amber-500/0 group-hover:from-amber-500/10 group-hover:via-yellow-500/5 group-hover:to-amber-500/10 rounded-2xl md:rounded-3xl transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="inline-flex p-3 md:p-4 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 mb-4 md:mb-6 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                  <PenTool className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3">Custom Design</h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">3 unique signature designs tailored to your style and profession</p>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 animate-slide-up-delay-2 shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-indigo-500/5 group-hover:to-purple-500/10 rounded-2xl md:rounded-3xl transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="inline-flex p-3 md:p-4 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 mb-4 md:mb-6 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Download className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3">Complete Guide</h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">Comprehensive PDF guide on signature importance and best practices</p>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 animate-slide-up-delay-3 shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/5 group-hover:to-blue-500/10 rounded-2xl md:rounded-3xl transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="inline-flex p-3 md:p-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4 md:mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3">Professional Quality</h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">Expertly crafted by signature design professionals</p>
              </div>
            </div>
          </div>

          {/* Premium CTA Button */}
          <div className="animate-fade-in-delay-2 px-4">
            <button className="group relative px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 rounded-full font-bold text-white text-base md:text-lg shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/70 transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" />
                Get Your Signature Now
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 group-hover:-rotate-12 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-9 md:w-6 md:h-10 border-2 border-amber-400/40 rounded-full flex justify-center backdrop-blur-sm bg-slate-900/20">
          <div className="w-1 h-2 md:h-3 bg-gradient-to-b from-amber-400 to-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;
