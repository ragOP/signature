import React, { useState, useEffect } from 'react';
import { ArrowDown, CheckCircle, FileText, Brain, Palette, Mail } from 'lucide-react';
import SignatureCTAButton from './SignatureCTAButton';

const SignatureHowItWorksRag = () => {
    const [animateElements, setAnimateElements] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateElements(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const workflowSteps = [
        {
            step: "01",
            icon: FileText,
            title: "Place your order & share your name",
            description: "Simple form with your name and preferences",
            color: "from-blue-900 to-purple-900",
            borderColor: "border-blue-700",
            iconColor: "text-blue-400"
        },
        {
            step: "02",
            icon: Brain,
            title: "Our designers study your name, vibe & goals",
            description: "Expert analysis of your personality and professional needs",
            color: "from-purple-900 to-pink-900",
            borderColor: "border-purple-700",
            iconColor: "text-purple-400"
        },
        {
            step: "03",
            icon: Palette,
            title: "We craft 3 designer-style signatures",
            description: "Three unique options tailored to your style",
            color: "from-green-900 to-blue-900",
            borderColor: "border-green-700",
            iconColor: "text-green-400"
        },
        {
            step: "04",
            icon: Mail,
            title: "Receive your full package within 24–48 hours",
            description: "Complete package with tutorials and practice sheets",
            color: "from-orange-900 to-yellow-900",
            borderColor: "border-orange-700",
            iconColor: "text-orange-400"
        }
    ];

    return (
        <section className="py-12 px-4 bg-blue-50">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className={`text-center mb-6 transition-all duration-1000 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}>
                    <div className="inline-flex items-center space-x-2 bg-blue-100 border-2 border-blue-300 rounded-full px-6 py-3 mb-6">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-800 font-secondary">Simple Process</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-blue-900 mb-6">
                        How It Works
                    </h2>
                    <p className="text-xl text-blue-700 max-w-3xl mx-auto font-primary">
                        Get your custom signature in just 4 simple steps
                    </p>
                </div>

                <div className={`transition-all mb-8 duration-1000 delay-300 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}>
                    <div className="flex px-2 flex-col items-center w-full">
                        {workflowSteps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <div key={index} className="flex flex-col items-center">
                                    {/* Step Node */}
                                    <div className="min-h-24 bg-white border-2 border-blue-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group p-6">
                                        <div className="flex flex-col space-y-4 w-full">
                                            {/* Row 1: Icon + Title + Step Number */}
                                            <div className="flex items-center space-x-4">
                                                {/* Icon with Pointer Line */}
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shadow-lg border-2 border-blue-300 flex-shrink-0 relative group-hover:shadow-xl transition-all duration-300">
                                                        <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                                                            <Icon className="w-5 h-5 text-white" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Title */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-lg font-display font-semibold text-blue-900 leading-tight">
                                                        {step.title}
                                                    </div>
                                                </div>


                                            </div>

                                            {/* Row 2: Description */}
                                            <div className="w-full">
                                                <div className="text-sm text-blue-700 font-primary leading-relaxed">
                                                    {step.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Arrow (except for last step) */}
                                    {index < workflowSteps.length - 1 && (
                                        <div className="flex justify-center py-2">
                                            <ArrowDown className="w-6 h-6 text-blue-600" />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <SignatureCTAButton
                    text="Get My Signature Now"
                    className="w-full"
                />

            </div>
        </section>
    );
};

export default SignatureHowItWorksRag;
