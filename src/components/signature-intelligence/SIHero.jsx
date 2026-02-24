import React from 'react';
import InkStrokeSVG from './InkStrokeSVG';

const SIHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center si-hero-gradient pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="si-label si-initial-opacity si-animate-fade-up mb-6">
          Psychology-Optimized Signatures
        </p>
        <h1 className="si-headline-lg si-initial-opacity si-animate-fade-up si-animate-delay-1 text-[#F5F5F7] mb-6">
          Your Signature Should Command Respect — Not Just Sign Documents
        </h1>
        <p className="si-subhead si-initial-opacity si-animate-fade-up si-animate-delay-2 mb-4 max-w-2xl mx-auto">
          Most people sign their name.<br />
          <span className="text-[#D4AF37] font-semibold">High performers engineer their identity.</span>
        </p>
        <p className="si-subhead si-initial-opacity si-animate-fade-up si-animate-delay-2 mb-10 max-w-2xl mx-auto">
          Get your psychology-optimized signature system designed to elevate authority, confidence, and professional impact.
        </p>

        <div className="si-initial-opacity si-animate-fade-up si-animate-delay-3 mb-16">
          <InkStrokeSVG width={320} height={90} className="mx-auto opacity-90" />
        </div>

        <a href="/signature-cart" className="si-cta si-initial-opacity si-animate-fade-up si-animate-delay-4">
          Get My Power Signature →
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-12 rounded-full border-2 border-[rgba(212,175,55,0.4)] flex justify-center pt-2">
        <div className="w-1 h-2 rounded-full bg-[#D4AF37] animate-bounce" />
      </div>
    </section>
  );
};

export default SIHero;
