import Navbar from "./Navbar";
import SignatureHeroRedesigned from "./Hero";
import BeforeAfter from "./BeforeAfter";
import WhyChooseUs from "./WhyChooseUs";
import HowItWorks from "./HowItWorks";

const SignatureNew = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <Navbar />
      <SignatureHeroRedesigned />
      <BeforeAfter />
      <WhyChooseUs />
      <HowItWorks />
    </div>
  );
};

export default SignatureNew;
