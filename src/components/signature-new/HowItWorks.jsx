import React, { useState, useEffect } from 'react';
import { FileText, Brain, Palette, Mail } from 'lucide-react';

// --- Reusable Component for each Step ---
const ProcessStep = ({ step, icon: Icon, title, description, color, isLast, index }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Staggered animation effect
        const timer = setTimeout(() => setIsVisible(true), index * 200);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div className={`flex items-start transition-all duration-500 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>
            {/* Step Number and Connecting Line */}
            <div className="flex flex-col items-center mr-6">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full ${color.bg} border-4 ${color.border} flex items-center justify-center font-bold text-lg ${color.text}`}>
                    {step}
                </div>
                {!isLast && <div className="w-0.5 h-full bg-yellow-200 mt-2"></div>}
            </div>

            {/* Content Card */}
            <div className="flex-grow pb-12">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                        <Icon className={`w-5 h-5 ${color.text}`} />
                        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );
};

// --- Main Redesigned Section Component ---
const HowItWorks = () => {
    const workflowSteps = [
        {
            step: "1",
            icon: FileText,
            title: "Share Your Details",
            description: "Start by placing your order and filling out a simple form with your name and style preferences.",
            color: { bg: 'bg-yellow-100', border: 'border-yellow-300', text: 'text-yellow-700' }
        },
        {
            step: "2",
            icon: Brain,
            title: "Designer Analysis",
            description: "Our experts study your name, professional field, and desired vibe to conceptualize the perfect designs.",
            color: { bg: 'bg-amber-100', border: 'border-amber-300', text: 'text-amber-700' }
        },
        {
            step: "3",
            icon: Palette,
            title: "Crafting Your Options",
            description: "We handcraft three unique, designer-style signature options that are tailored specifically to you.",
            color: { bg: 'bg-orange-100', border: 'border-orange-300', text: 'text-orange-700' }
        },
        {
            step: "4",
            icon: Mail,
            title: "Receive Your Package",
            description: "Your complete signature package, including tutorials and practice sheets, is delivered to your email in 24-48 hours.",
            color: { bg: 'bg-yellow-200', border: 'border-yellow-400', text: 'text-yellow-800' }
        }
    ];

    return (
        <section className="py-12 px-4 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
                        Your Signature in 4 Simple Steps
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        From order to delivery, our process is designed to be seamless, transparent, and efficient.
                    </p>
                </div>

                {/* The Stepper */}
                <div className="space-y-0">
                    {workflowSteps.map((step, index) => (
                        <ProcessStep
                            key={index}
                            {...step}
                            isLast={index === workflowSteps.length - 1}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;