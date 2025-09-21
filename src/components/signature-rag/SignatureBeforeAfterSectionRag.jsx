import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SignatureImageSlider from '../signature/SignatureImageSlider';
import SignatureCTAButton from './SignatureCTAButton';

const SignatureBeforeAfterSectionRag = () => {
    const [animateElements, setAnimateElements] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateElements(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    // Sample before/after images - you can replace these with actual signature transformation images
    const transformationImages = [
        {
            src: "/signature-1.png",
            alt: "Signature Transformation 1",
            beforeLabel: "BEFORE",
            afterLabel: "AFTER"
        },
        {
            src: "/signature-2.png",
            alt: "Signature Transformation 2",
            beforeLabel: "BEFORE",
            afterLabel: "AFTER"
        },
        {
            src: "/signature-3.png",
            alt: "Signature Transformation 3",
            beforeLabel: "BEFORE",
            afterLabel: "AFTER"
        },
        {
            src: "/signature-4.png",
            alt: "Signature Transformation 4",
            beforeLabel: "BEFORE",
            afterLabel: "AFTER"
        },
        {
            src: "/signature-5.png",
            alt: "Signature Transformation 5",
            beforeLabel: "BEFORE",
            afterLabel: "AFTER"
        },

    ];

    const transformationPoints = [
        {
            before: "Basic",
            after: "Bold",
            description: "From simple scribbles to confident, professional signatures"
        },
        {
            before: "Cluttered",
            after: "Clean",
            description: "Transform messy handwriting into elegant, readable signatures"
        },
        {
            before: "Forgettable",
            after: "Flawless",
            description: "Make your signature memorable and distinctive"
        }
    ];

    return (
        <section className="px-4 py-12 bg-blue-50 mt-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className={`text-center mb-8 transition-all duration-1000 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-blue-900 mb-4">
                        ✍ Our Work
                    </h2>
                    <p className="text-lg text-blue-700 max-w-3xl mx-auto">
                        Here are a few example of our signature design work
                    </p>
                </div>

                {/* Image Slider */}
                <div className={`mb-12 transition-all duration-1000 delay-300 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}>
                    <SignatureImageSlider images={transformationImages} showArrows={false} />
                </div>

                {/* Transformation Points Grid */}
                <div className={`grid md:grid-cols-3 gap-8 mb-8 transition-all duration-1000 delay-500 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}>
                    {transformationPoints.map((point, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-200 hover:shadow-xl hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="text-center space-y-4">
                                {/* Before/After Labels */}
                                <div className="flex items-center justify-center space-x-4">
                                    <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg font-semibold border border-red-300">
                                        {point.before}
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-blue-600" />
                                    <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold border border-green-300">
                                        {point.after}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-blue-700 text-sm leading-relaxed">
                                    {point.description}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>

                <SignatureCTAButton
                    text="Get My Signature Now"
                    className="w-full"
                />
            </div>
        </section>
    );
};

export default SignatureBeforeAfterSectionRag;
