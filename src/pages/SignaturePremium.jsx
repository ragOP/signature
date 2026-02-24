import React, { useState, useEffect } from 'react';
import PremiumNavbar from '../components/signature-premium/PremiumNavbar';
import PremiumHero from '../components/signature-premium/PremiumHero';
import PremiumWorkSection from '../components/signature-premium/PremiumWorkSection';
import FeaturesSection from '../components/signature-premium/FeaturesSection';
import ImportanceSection from '../components/signature-premium/ImportanceSection';
import GuidePreviewSection from '../components/signature-premium/GuidePreviewSection';
import PremiumCTA from '../components/signature-premium/PremiumCTA';
import PremiumFooter from '../components/signature-premium/PremiumFooter';
import '../components/signature-premium/premium-signature.css';

const PREMIUM_BG = '#fef9f6';

const SignaturePremium = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.body.setAttribute('data-premium-page', 'true');
    const prevBg = document.body.style.background;
    const prevColor = document.body.style.color;
    document.body.style.background = PREMIUM_BG;
    document.body.style.color = '#1a1a1a';
    return () => {
      document.body.removeAttribute('data-premium-page');
      document.body.style.background = prevBg;
      document.body.style.color = prevColor;
    };
  }, []);

  const handleGetStarted = () => {
    window.location.href = '/signature-cart';
  };

  return (
    <div className="signature-premium-page">
      <PremiumNavbar />
      <PremiumHero />
      <PremiumWorkSection />
      <FeaturesSection />
      <ImportanceSection />
      <GuidePreviewSection />
      <PremiumCTA onGetStarted={handleGetStarted} />
      <PremiumFooter />
    </div>
  );
};

export default SignaturePremium;
