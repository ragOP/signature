import React from "react";
import "../../components/new/animations.css";
import InfiniteBanner from "../../components/new/InfiniteBanner";
import NewNavbar from "../../components/new/NewNavbar";
import HeaderBanner from "../../components/new/HeaderBanner";
import NewHero from "../../components/new/NewHero";
import OurWorkSection from "../../components/new/OurWorkSection";
import TestimonialsSection from "../../components/new/TestimonialsSection";
import WhoIsThisForSection from "../../components/new/WhoIsThisForSection";
import HowItWorksSection from "../../components/new/HowItWorksSection";
import WhyChooseUsSection from "../../components/new/WhyChooseUsSection";
import LimitedSlotsSection from "../../components/new/LimitedSlotsSection";
import StickyPricingFooter from "../../components/new/StickyPricingFooter";

function SignatureNew() {
    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">
            {/* 1. Infinite Moving Banner */}
            <InfiniteBanner />

            {/* 2. Navbar */}
            <NewNavbar />
            
            {/* 3. Header Banner */}
            <HeaderBanner />
            
            {/* 4. Hero Section with Title, Image, CTA, and Video */}
            <NewHero />

            {/* 5. Our Work Section */}
            <OurWorkSection />

            {/* 6. Testimonials Section */}
            <TestimonialsSection />

            {/* 7. Who Is This For Section */}
            <WhoIsThisForSection />

            {/* 8. How It Works Section */}
            <HowItWorksSection />

            {/* 9. Why Choose Us Section */}
            <WhyChooseUsSection />

            {/* 10. Limited Slots Section */}
            <LimitedSlotsSection />

            {/* 11. Sticky Pricing Footer */}
            <StickyPricingFooter />
            
            {/* Add bottom padding to prevent content being hidden behind sticky footer */}
            <div className="h-16 sm:h-20 lg:h-24"></div>
        </div>
    );
}

export default SignatureNew;
