import Navbar from "./Navbar";
import SignatureHeroRedesigned from "./Hero";
import BeforeAfter from "./BeforeAfter";
import WhyChooseUs from "./WhyChooseUs";
import HowItWorks from "./HowItWorks";
import WhoThisIsFor from "./WhoThisIsFor";
import Testimonial from "./Testimonial";
import LimitedSlot from "./LimitedSlot";
import Footer from "./Footer";
import CtaButton from "./CtaButton";

const SignatureNewRedesigned = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <Navbar />
      <SignatureHeroRedesigned />
      <BeforeAfter />
      <WhyChooseUs />
      <HowItWorks />
      <WhoThisIsFor />
      <Testimonial />
      <LimitedSlot />
      {/* Floating CTA Button */}
      <div className="fixed  bottom-24 right-4 z-[60]">
        <CtaButton
          size="small"
          title=""
          className="w-16 h-16 p-0 [&>div]:!space-x-0 [&>div>span]:hidden [&>div>svg:first-child]:hidden [&>div>svg:last-child]:!translate-x-0"
        />
      </div>
      <Footer />
    </div>
  );
};

export default SignatureNewRedesigned;
