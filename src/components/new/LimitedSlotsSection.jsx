import React, { useState, useEffect } from 'react';
import ShimmerCTA from './ShimmerCTA';

const LimitedSlotsSection = () => {
    const [animateElements, setAnimateElements] = useState(false);
    const [slotsLeft, setSlotsLeft] = useState(3); // Dynamic slots remaining

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateElements(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="py-12" style={{ backgroundColor: '#4cac98' }}>
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className={`text-center mb-8 transition-all duration-1000 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <h2 className="text-3xl md:text-4xl italic font-bold text-white mb-3">
                        Limited <span className="text-yellow-300">Slots</span>
                    </h2>
                    <p className="text-lg text-black max-w-2xl mx-auto">
                        Only 7 signature slots available each week to maintain premium quality
                    </p>
                </div>

                {/* Additional Content */}
                <div className={`text-center mb-8 transition-all duration-1000 delay-300 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <p className="text-white/90 text-lg mb-6">
                        Once full, new orders are pushed to next week
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                            <h4 className="text-gray-900 font-semibold mb-2">No Monthly Subscription</h4>
                            <p className="text-gray-600 text-sm">One-time payment, lifetime impact</p>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                            <h4 className="text-gray-900 font-semibold mb-2">Premium Quality</h4>
                            <p className="text-gray-600 text-sm">Premium quality over quantity</p>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
                            <h4 className="text-gray-900 font-semibold mb-2">Don't Miss Your Chance</h4>
                            <p className="text-gray-600 text-sm">Secure your slot before they're gone for the week</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className={`text-center transition-all duration-1000 delay-500 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <p className="text-lg text-white/90 mb-4">
                        Only {slotsLeft} slots remaining this week
                    </p>
                    <div className="flex justify-center px-4">
                        <ShimmerCTA text="Get My Signature Now" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LimitedSlotsSection;
