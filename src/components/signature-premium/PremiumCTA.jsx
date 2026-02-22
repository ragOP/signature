import React from 'react';
import { Sparkles, Crown } from 'lucide-react';

const PremiumCTA = ({ onGetStarted }) => {
  return (
    <section className="py-16 md:py-24 premium-hero-bg relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[rgba(251,206,177,0.06)] rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgba(253,228,212,0.05)] rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,206,177,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,206,177,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(251,206,177,0.1)] border border-[rgba(251,206,177,0.2)] mb-6 md:mb-8">
          <Crown className="w-4 h-4 text-[#FBCEB1]" />
          <span className="text-sm font-semibold text-[#555555]">PREMIUM OFFER</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a] mb-4 md:mb-6">
          Ready to Transform Your <span className="premium-gradient-text">Signature?</span>
        </h2>
        <p className="text-base md:text-xl text-[#555555] mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
          Get your custom signature design plus a comprehensive PDF guide explaining 
          everything you need to know about signatures
        </p>

        <button
          onClick={onGetStarted}
          className="group relative px-8 md:px-12 py-4 md:py-5 bg-[linear-gradient(135deg,#FBCEB1_0%,#fde4d4_50%,#FBCEB1_100%)] rounded-full font-bold text-white text-base md:text-lg shadow-xl shadow-[rgba(251,206,177,0.3)] hover:shadow-[rgba(251,206,177,0.45)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 md:gap-3 mx-auto justify-center"
        >
          <Sparkles className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" />
          Get Your Signature Now
          <Sparkles className="w-5 h-5 md:w-6 md:h-6 group-hover:-rotate-12 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default PremiumCTA;
