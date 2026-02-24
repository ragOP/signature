import React from 'react';

const HERO_IMG = 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80';

const StudioHero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="studio-headline studio-headline-hero text-[#1a1a2e] mb-6 studio-reveal" style={{ transitionDelay: '0.1s' }}>
          A Signature That Looks Like You Mean It.
        </h1>
        <p className="studio-subhead mb-8 max-w-2xl mx-auto studio-reveal" style={{ transitionDelay: '0.2s' }}>
          Turn your messy, forgettable sign into a clean, confident signature system—built for documents, emails, forms, and your personal brand.
        </p>
        <p className="studio-subhead text-sm mb-10 max-w-xl mx-auto studio-reveal" style={{ transitionDelay: '0.25s' }}>
          What you get: 3 signature styles + a Signature Blueprint PDF + practice method + ready-to-use files.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 studio-reveal" style={{ transitionDelay: '0.3s' }}>
          <a href="/signature-cart" className="studio-cta w-full sm:w-auto">
            Create My Signature →
          </a>
          <a href="#showcase" className="studio-cta studio-cta-secondary w-full sm:w-auto">
            See Examples
          </a>
        </div>
        <div className="studio-trust-strip studio-reveal" style={{ transitionDelay: '0.35s' }}>
          <span>3 Custom Styles</span>
          <span>PNG/SVG/PDF</span>
          <span>24–48 Hours</span>
          <span>Email Delivery</span>
          <span>Practice Guide Included</span>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 w-full max-w-4xl mx-auto studio-reveal" style={{ transitionDelay: '0.4s' }}>
        <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(46,196,182,0.12)] border border-[rgba(46,196,182,0.1)]">
          <img
            src={HERO_IMG}
            alt="Professional signature and handwriting"
            className="w-full h-auto object-cover aspect-[2/1]"
            loading="eager"
            onError={(e) => {
              e.target.src = '/signature-hero.webp';
            }}
          />
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-10 rounded-full border-2 border-[rgba(46,196,182,0.35)] flex justify-center pt-2">
        <div className="w-1 h-2 rounded-full bg-[#2EC4B6] animate-bounce" />
      </div>
    </section>
  );
};

export default StudioHero;
