import React from 'react';

const SICTASection = () => {
  return (
    <section id="cta" className="si-section si-cta-section-bg relative overflow-hidden">
      <div className="si-gradient-overlay" />
      <div className="relative max-w-3xl mx-auto text-center">
        <p className="si-label mb-4">Section 7</p>
        <h2 className="si-headline text-[#F5F5F7] mb-6">
          Stop Signing Small.
        </h2>
        <p className="si-subhead mb-10 max-w-xl mx-auto">
          Upgrade to a signature that represents your future — not your past.
        </p>
        <a href="/signature-cart" className="si-cta text-base">
          Engineer My Signature Now →
        </a>
      </div>
    </section>
  );
};

export default SICTASection;
