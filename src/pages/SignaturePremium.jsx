import React, { useState } from 'react';
import PremiumNavbar from '../components/signature-premium/PremiumNavbar';
import PremiumHero from '../components/signature-premium/PremiumHero';
import PremiumWorkSection from '../components/signature-premium/PremiumWorkSection';
import FeaturesSection from '../components/signature-premium/FeaturesSection';
import ImportanceSection from '../components/signature-premium/ImportanceSection';
import GuidePreviewSection from '../components/signature-premium/GuidePreviewSection';
import PremiumCTA from '../components/signature-premium/PremiumCTA';
import PremiumFooter from '../components/signature-premium/PremiumFooter';
import '../components/signature-premium/premium-signature.css';

const SignaturePremium = () => {
  const [showModal, setShowModal] = useState(false);

  const handleGetStarted = () => {
    // Navigate to cart or checkout page
    // For now, we'll show a modal or redirect
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
