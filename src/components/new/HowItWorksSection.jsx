import React, { useState, useEffect } from 'react';
import { MessageCircle, Palette, Clock, Download } from 'lucide-react';
import ShimmerCTA from './ShimmerCTA';

const HowItWorksSection = () => {
    const [animateElements, setAnimateElements] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateElements(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const steps = [
        {
            step: "01",
            icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
            title: "Submit Your Request",
            description: "Tell us your preferences, style, and any specific requirements for your signature design."
        },
        {
            step: "02", 
            icon: <Palette className="w-8 h-8 text-purple-500" />,
            title: "Design & Create",
            description: "Our expert designers craft your signature with attention to detail and professional standards."
        },
        {
            step: "03",
            icon: <Clock className="w-8 h-8 text-green-500" />,
            title: "Review & Revise",
            description: "You receive your signature design within 24 hours for review and unlimited revisions."
        },
        {
            step: "04",
            icon: <Download className="w-8 h-8 text-orange-500" />,
            title: "Download & Use",
            description: "Get your final signature in multiple formats ready for immediate professional use."
        }
    ];

    return (
        <section className="py-8" style={{ backgroundColor: '#6bc3af' }}>
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className={`text-center mb-8 transition-all duration-1000 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <h2 className="text-5xl md:text-4xl italic font-bold text-white mb-3">
                        How It <span className="text-yellow-300">Works</span>
                    </h2>
                    <p className="text-lg text-black max-w-2xl mx-auto">
                        Simple 4-step process to get your professional signature
                    </p>
                </div>

                {/* Steps Grid */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 transition-all duration-1000 delay-300 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative text-center bg-white rounded-lg p-4 shadow-md border border-gray-200"
                        >
                            {/* Step Number - Absolute Position */}
                            <div className="absolute -top-2 -left-2 bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                                {step.step}
                            </div>
                            
                            {/* Step Content */}
                            <div className="flex justify-center mb-3">
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className={`text-center transition-all duration-1000 delay-500 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <p className="text-lg text-white/90 mb-4">
                        Ready to get started with your professional signature?
                    </p>
                    <div className="flex justify-center px-4">
                        <ShimmerCTA text="Start Your Order" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
