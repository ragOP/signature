import React, { useState } from "react";
import BackgroundVariations from "../components/signature/BackgroundVariations";
import SignatureNavbar from "../components/signature/SignatureNavbar";
import SignatureHeroRag from "../components/signature/SignatureHeroRag";
import BrandSignatureOverlay from "../components/signature/BrandSignatureOverlay";
import "../components/signature/signature-css.css";
import SignatureBeforeAfterSection from "../components/signature/SignatureBeforeAfterSection";
import SignatureWhyChooseUs from "../components/signature/SignatureWhyChooseUs";
import SignatureHowItWorks from "../components/signature/SignatureHowItWorks";
import SignatureWhoIsThisFor from "../components/signature/SignatureWhoIsThisFor";
import SignatureTestimonialsSection from "../components/signature/SignatureTestimonialsSection";
import SignatureVideoSection from "../components/signature/SignatureVideoSection";
import SignatureRagCTA from "../components/signature/SignatureRagCTA";
import SignatureFooterRag from "../components/signature/SignatureFooterRag";
import SignatureLimitedSlotsRag from "../components/signature/SignatureLimitedSlotsRag";

function SignatureRag() {
  const [showLandingPage, setShowLandingPage] = useState(false);

  const handleAnimationComplete = () => {
    setShowLandingPage(true);
  };

  return (
    <>
      {/* Always show navbar */}
      <SignatureNavbar />

      {!showLandingPage && (
        <BrandSignatureOverlay onAnimationComplete={handleAnimationComplete} />
      )}

      {showLandingPage && (
        <div className="signature-container mb-20 relative bg-gradient-to-br from-white via-gray-50 to-blue-50">
          <BackgroundVariations activeVariation={0} />
          <SignatureHeroRag />
          <SignatureVideoSection />
          <SignatureBeforeAfterSection />
          <div className="flex justify-center items-center mt-4 px-6">
            <SignatureRagCTA />
          </div>
          <SignatureWhyChooseUs />
          <SignatureHowItWorks />
          <div className="flex justify-center items-center mt-2 px-6">
            <SignatureRagCTA />
          </div>
          <SignatureWhoIsThisFor />
          <SignatureTestimonialsSection />
          <div className="flex justify-center items-center mt-2 px-6">
            <SignatureRagCTA />
          </div>

          <SignatureLimitedSlotsRag />
          <SignatureFooterRag />
        </div>
      )}
    </>
  );
}

export default SignatureRag;
