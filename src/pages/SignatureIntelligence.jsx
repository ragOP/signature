import React, { useState, useEffect } from 'react';
import SINavbar from '../components/signature-intelligence/SINavbar';
import SIHero from '../components/signature-intelligence/SIHero';
import SIProblemSection from '../components/signature-intelligence/SIProblemSection';
import SINewIdeaSection from '../components/signature-intelligence/SINewIdeaSection';
import SIPowerKitSection from '../components/signature-intelligence/SIPowerKitSection';
import SIPsychologySection from '../components/signature-intelligence/SIPsychologySection';
import SISocialProofSection from '../components/signature-intelligence/SISocialProofSection';
import SICTASection from '../components/signature-intelligence/SICTASection';
import SIFooter from '../components/signature-intelligence/SIFooter';
import '../components/signature-intelligence/signature-intelligence.css';

const SignatureIntelligence = () => {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    document.body.setAttribute('data-si-page', 'true');
    document.body.style.background = '#0B0F19';
    document.body.style.color = '#F5F5F7';

    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.6;
      setShowStickyCta(pastHero);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => {
      document.body.removeAttribute('data-si-page');
      document.body.style.background = '';
      document.body.style.color = '';
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="si-page">
      <SINavbar />
      <SIHero />
      <SIProblemSection />
      <SINewIdeaSection />
      <SIPowerKitSection />
      <SIPsychologySection />
      <SISocialProofSection />
      <SICTASection />
      <SIFooter />

      <div className={`si-sticky-cta ${showStickyCta ? 'si-visible' : ''}`}>
        <a href="/signature-cart" className="si-cta w-full block text-center py-3">
          Engineer My Signature Now →
        </a>
      </div>
    </div>
  );
};

export default SignatureIntelligence;
