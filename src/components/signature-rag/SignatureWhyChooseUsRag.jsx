import React, { useState, useEffect } from 'react';
import { Shield, Briefcase, PenTool, Smartphone, Gift, CheckCircle } from 'lucide-react';

const SignatureWhyChooseUsRag = () => {
    const [animateElements, setAnimateElements] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateElements(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const uspPoints = [
        {
            icon: Shield,
            title: "Expert Designers",
            description: "Handcrafted by professional signature designers, not AI-generated"
        },
        {
            icon: Briefcase,
            title: "Career-Focused",
            description: "Built to enhance your professional image across all documents"
        },
        {
            icon: PenTool,
            title: "Elegant & Readable",
            description: "Perfect balance of aesthetics and readability for maximum impact"
        },
        {
            icon: Smartphone,
            title: "Digital Delivery",
            description: "Instant delivery ready to use on all your devices"
        },
        {
            icon: Gift,
            title: "Personal Attention",
            description: "One-on-one attention ensuring your signature reflects your personality"
        }
    ];

    return (
        <section className="py-12 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className={`text-center mb-6 transition-all duration-1000 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}>
                    <h2 className="text-4xl font-display font-bold text-blue-900 mb-4">
                        Why Choose Us
                    </h2>
                    <p className="text-lg text-blue-700 font-primary">
                        Professional signature design that elevates your personal brand
                    </p>
                </div>

                {/* USP Points - Single Card */}
                <div className={`transition-all duration-1000 delay-300 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}>
                    <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 shadow-lg">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {uspPoints.map((point, index) => {
                                const Icon = point.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group rounded-lg hover:bg-blue-100 transition-all duration-300"
                                    >
                                        {/* Row 1: Icon + Title */}
                                        <div className="flex items-center space-x-3 mb-3">
                                            <div className="flex-shrink-0">
                                                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center border border-blue-300">
                                                    <Icon className="w-5 h-5 text-blue-700" />
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-display font-semibold text-blue-900">
                                                {point.title}
                                            </h3>
                                        </div>

                                        {/* Row 2: Full-width Description */}
                                        <div className="w-full">
                                            <p className="text-blue-700 text-sm leading-relaxed font-primary">
                                                {point.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SignatureWhyChooseUsRag;
