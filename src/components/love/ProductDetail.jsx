import React from 'react';
import { ArrowUp, Heart, MessageCircle, Star } from 'lucide-react';
import CTAButton from './CTAButton';

const ProductDetail = () => {
    return (
        <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-pink-100">
            <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-rose-50 via-pink-50 to-pink-100">

                <div className="bg-gradient-to-r from-rose-400 to-pink-400 rounded-2xl overflow-hidden">

                    <img
                        src="/astro-meet.png"
                        alt="Couple with Love Analysis Report"
                        className="w-full object-cover"
                    />

                    <div className="text-left p-8 pb-4 pl-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white font-merriweather">
                            💖 What Is This?
                        </h2>
                    </div>

                    <div className="px-8 pb-6 pl-4 space-y-4">
                        <p className="text-white text-lg font-poppins leading-relaxed">
                            A personalized astrology + numerology report that uncovers the truth about your love life, compatibility, breakup possibilities & marriage timeline — all based on your birth chart.
                        </p>
                        
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-white">
                                <span className="text-base md:text-lg font-medium font-poppins">
                                    📩 Delivered in 48–72 hours via Email + WhatsApp
                                </span>
                            </div>
                            
                            <div className="flex items-center space-x-3 text-white">
                                <span className="text-base md:text-lg font-medium font-poppins">
                                    🔮 Crafted by world-renowned astrologers at AstraSoul Digital
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="px-8 pb-8 pl-4">
                        <CTAButton 
                            text="👉 Get My Love Report – ₹499 Only"
                            size="large"
                            variant="primary"
                            showArrow={false}
                            fullWidth={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail; 