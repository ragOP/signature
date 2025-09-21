import React, { useState } from "react";
import BackgroundVariationsRag from "../components/signature-rag/BackgroundVariationsRag";
import SignatureNavbarRag from "../components/signature-rag/SignatureNavbarRag";
import SignatureHeroRag from "../components/signature-rag/SignatureHeroRag";
import SignatureFooterRag from "../components/signature-rag/SignatureFooterRag";
import BrandSignatureOverlayRag from "../components/signature-rag/BrandSignatureOverlayRag";
import "../components/signature/signature-rag-fresh.css";
import SignatureBeforeAfterSectionRag from "../components/signature-rag/SignatureBeforeAfterSectionRag";
import SignatureWhyChooseUsRag from "../components/signature-rag/SignatureWhyChooseUsRag";
import SignatureHowItWorksRag from "../components/signature-rag/SignatureHowItWorksRag";
import SignatureWhoIsThisForRag from "../components/signature-rag/SignatureWhoIsThisForRag";
import SignatureTestimonialsSectionRag from "../components/signature-rag/SignatureTestimonialsSectionRag";
import SignatureLimitedSlotsRag from "../components/signature-rag/SignatureLimitedSlotsRag";
import SignatureVideoSectionRag from "../components/signature-rag/SignatureVideoSectionRag";
import SignatureCTAButton from "../components/signature-rag/SignatureCTAButton";

function SignatureRag() {
  const [showLandingPage, setShowLandingPage] = useState(true);

  const handleAnimationComplete = () => {
    setShowLandingPage(true);
  };

  return (
    <>
      {/* Always show navbar */}
      <SignatureNavbarRag />

      {/* {!showLandingPage && (
        <BrandSignatureOverlayRag onAnimationComplete={handleAnimationComplete} />
      )} */}

      {showLandingPage && (
        <div className="signature-rag-fresh mb-20 relative">
          <SignatureHeroRag />
          <SignatureVideoSectionRag />
          <SignatureBeforeAfterSectionRag />

          <SignatureWhyChooseUsRag />
          <SignatureHowItWorksRag />

          <SignatureWhoIsThisForRag />
          <SignatureTestimonialsSectionRag />


          <SignatureLimitedSlotsRag />
          <SignatureFooterRag />
        </div>
      )}
    </>
  );
}

export default SignatureRag;
