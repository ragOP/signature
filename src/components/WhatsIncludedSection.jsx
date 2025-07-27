import React from 'react';
import { Phone } from 'lucide-react';

// Data configuration for easy maintenance
const SERVICES_DATA = [
    {
        title: '45-Minute Live Consultation',
        description: 'With India\'s most trusted astro-numerologist, personally on call.',
        icon: '📞'
    },
    {
        title: 'Free Kundali Analysis',
        description: 'A detailed birth chart breakdown — simplified for you.',
        icon: '🔮'
    },
    {
        title: 'Love Report PDF',
        description: 'Covers your emotional patterns, love timeline, soulmate clarity, and more.',
        icon: '💕'
    },
    {
        title: 'Wealth Report PDF',
        description: 'Career direction, money blocks, business timing & wealth astrology.',
        icon: '💰'
    },
    {
        title: 'Ask ANY Question You Have',
        description: 'About your past, present, or future — this call is fully customized to you.',
        icon: '❓'
    },
    {
        title: 'Numerology Add-On',
        description: 'Mr. X will also decode your name vibration and number destiny.',
        icon: '🔢'
    }
];

// Reusable UI components
const ServiceCard = ({ title, description, icon }) => (
    <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-400/30 transition-all duration-300 hover:bg-white/10">
        <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-xl flex items-center justify-center border border-amber-400/30">
                    <span className="text-2xl">{icon}</span>
                </div>
            </div>
            <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
        <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-amber-400/10 to-transparent rounded-bl-2xl" />
    </div>
);

const CTAButton = () => (
  <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-amber-500/25 flex items-center justify-center">
    <span className="flex items-center justify-center gap-2">
      <Phone className="w-5 h-5" />
      Get Your Mega Bundle
    </span>
  </button>
);

function WhatsIncludedSection() {
    return (
        <section className="py-6 sm:py-16 bg-gradient-to-b from-black via-slate-900/50 to-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
                            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                            <span className="text-white/70 text-sm sm:text-base font-medium">Complete Package</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                            <span className="block text-white">What's Included</span>
                        </h2>

                        <p className="text-lg sm:text-xl text-white/80 font-medium max-w-3xl mx-auto">
                            Here's what you get in this Mega Bundle Call:
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                        {SERVICES_DATA.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>

                    {/* Call Button Section */}
                    <div className="text-left sm:mb-12">
                        <div className="flex flex-col ">
                            <h3 className="text-xl sm:text-2xl font-bold text-white">Ready to Transform Your Life?</h3>
                            <p className="text-white/80 text-base sm:text-lg mb-4 mt-1 italic">Ye call sirf astrology nahi — yeh aapka realignment hai.</p>
                            <CTAButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Add ringing animation
const ringAnimation = `
  @keyframes ring {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(-25deg); }
    20% { transform: rotate(25deg); }
    30% { transform: rotate(-25deg); }
    40% { transform: rotate(25deg); }
    50% { transform: rotate(-25deg); }
    60% { transform: rotate(25deg); }
    70% { transform: rotate(-25deg); }
    80% { transform: rotate(25deg); }
    90% { transform: rotate(-25deg); }
    100% { transform: rotate(0deg); }
  }
  .animate-ring {
    animation: ring 2s ease-in-out infinite;
  }
`;

// Inject the CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = ringAnimation;
  document.head.appendChild(style);
}

export default WhatsIncludedSection; 