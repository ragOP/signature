import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, Star } from 'lucide-react';
import ShimmerCTA from './ShimmerCTA';

const OurWorkSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animateElements, setAnimateElements] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    // Sample signature work images
    const workImages = [
        {
            src: "/signature-1.png",
            alt: "Professional Signature Design 1"
        },
        {
            src: "/signature-2.png", 
            alt: "Professional Signature Design 2"
        },
        {
            src: "/signature-3.png",
            alt: "Professional Signature Design 3"
        },
        {
            src: "/signature-4.png",
            alt: "Professional Signature Design 4"
        },
        {
            src: "/signature-5.png",
            alt: "Professional Signature Design 5"
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateElements(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    // Auto-scroll functionality
    useEffect(() => {
        if (!isPaused) {
            const autoScrollInterval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % workImages.length);
            }, 3000); // Change slide every 3 seconds

            return () => clearInterval(autoScrollInterval);
        }
    }, [workImages.length, isPaused]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % workImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + workImages.length) % workImages.length);
    };

    const qualityFeatures = [
        {
            icon: <Star className="w-6 h-6 text-yellow-500" />,
            title: "Premium Quality",
            description: "Every signature is crafted with attention to detail and professional standards."
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-green-500" />,
            title: "24hr Delivery",
            description: "Get your signature delivered within 24 hours of approval."
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
            title: "Unlimited Revisions",
            description: "We work with you until you're completely satisfied with your signature."
        }
    ];

    return (
        <section className="py-10" style={{ backgroundColor: '#6bc3af' }}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className={`text-center transition-all duration-1000 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <h2 className="text-5xl md:text-5xl italic font-bold text-white mb-4">
                        Our Signature <span className="text-yellow-300">Work</span>
                    </h2>
                    <p className="text-xl text-black px-4 max-w-3xl mx-auto">
                        See the transformation we create for professionals like you
                    </p>
                </div>

                {/* Image Carousel */}
                <div className={`relative mb-8 transition-all duration-1000 delay-300 transform px-4 ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <div 
                        className="relative overflow-hidden rounded-xl"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            {workImages.map((image, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-64 object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>

                        {/* Slide Indicators */}
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {workImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        index === currentSlide ? 'bg-yellow-400' : 'bg-white/60'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Quality Features */}
                <div className={`grid md:grid-cols-3 px-4 gap-6 transition-all duration-1000 delay-500 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    {qualityFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                        >
                            <div className="flex items-center justify-center gap-3 mb-3">
                                {feature.icon}
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className={`text-center mt-12 transition-all duration-1000 delay-700 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <p className="text-lg text-white/90 mb-6">
                        Ready to get your professional signature?
                    </p>
                    <div className="flex justify-center px-4">
                        <ShimmerCTA text="Get Your Signature Now" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurWorkSection;
