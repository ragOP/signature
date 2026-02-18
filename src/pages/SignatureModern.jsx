import React, { useState } from 'react';
import ModernNavbar from '../components/signature-modern/ModernNavbar';
import ModernHero from '../components/signature-modern/ModernHero';
import ModernWorkSection from '../components/signature-modern/ModernWorkSection';
import ModernFeaturesSection from '../components/signature-modern/ModernFeaturesSection';
import ModernGuideSection from '../components/signature-modern/ModernGuideSection';
import ModernCTA from '../components/signature-modern/ModernCTA';
import ModernFooter from '../components/signature-modern/ModernFooter';
import '../components/signature-modern/modern-signature.css';

const SignatureModern = () => {
  const handleGetStarted = () => {
    window.location.href = '/signature-cart';
  };

  return (
    <div className="signature-modern-page">
      <ModernNavbar />
      <ModernHero />
      <ModernWorkSection />
      <ModernFeaturesSection />
      <ModernGuideSection />
      <ModernCTA onGetStarted={handleGetStarted} />
      <ModernFooter />
    </div>
  );
};

export default SignatureModern;
