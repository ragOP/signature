import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star, Quote, Heart } from 'lucide-react';

const TestimonialsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animateElements, setAnimateElements] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

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
                setCurrentSlide((prev) => (prev + 1) % testimonials.length);
            }, 4000); // Change slide every 4 seconds

            return () => clearInterval(autoScrollInterval);
        }
    }, [isPaused]);

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Business Executive",
            image: "/signature-1.png",
            rating: 5,
            text: "Absolutely amazing work! My signature looks so professional and elegant. The team delivered exactly what I envisioned and even exceeded my expectations. Highly recommended!"
        },
        {
            name: "Michael Chen",
            role: "Lawyer",
            image: "/signature-2.png",
            rating: 5,
            text: "Outstanding service! The attention to detail in my signature design is remarkable. It perfectly represents my professional identity. Thank you for the excellent work!"
        },
        {
            name: "Emily Rodriguez",
            role: "Doctor",
            image: "/signature-3.png",
            rating: 5,
            text: "I'm so impressed with the quality and speed of delivery. My signature now has that professional touch I was looking for. The team is truly talented!"
        },
        {
            name: "David Thompson",
            role: "Entrepreneur",
            image: "/signature-4.png",
            rating: 5,
            text: "Fantastic experience from start to finish. The signature design is perfect and the customer service was exceptional. Will definitely use again!"
        },
        {
            name: "Lisa Park",
            role: "Consultant",
            image: "/signature-5.png",
            rating: 5,
            text: "The signature design is exactly what I needed for my business. Professional, elegant, and delivered on time. I couldn't be happier with the results!"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
        ));
    };

    return (
        <section className="py-8" style={{ backgroundColor: '#6bc3af' }}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className={`text-center transition-all duration-1000 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <h2 className="text-5xl md:text-5xl italic font-bold text-white mb-4">
                        What Our <span className="text-yellow-300">Clients Say</span>
                    </h2>
                    <p className="text-xl text-black px-4 max-w-3xl mx-auto">
                        Hear from professionals who trust us with their signature design
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div className={`relative mb-6 transition-all duration-1000 delay-300 transform mt-12 ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <div 
                        className="relative overflow-hidden rounded-xl"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 mx-4 relative">
                                        {/* Top Right Icon */}
                                        <div className="absolute top-4 right-4">
                                            <Quote className="w-6 h-6 text-yellow-500" />
                                        </div>
                                        <div className="text-center">
                                            {/* Quote Icon */}
                                            {/* <div className="flex justify-center mb-4">
                                                <Quote className="w-8 h-8 text-yellow-500" />
                                            </div>
                                             */}
                                            {/* Testimonial Image */}
                                            <div className="flex justify-center mb-6">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-24 h-24 object-contain rounded-full border-4 border-yellow-400"
                                                />
                                            </div>
                                            
                                            {/* Rating */}
                                            <div className="flex justify-center mb-4">
                                                {renderStars(testimonial.rating)}
                                            </div>
                                            
                                            {/* Testimonial Text */}
                                            <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                                                "{testimonial.text}"
                                            </p>
                                            
                                            {/* Client Info */}
                                            <div>
                                                <h4 className="text-xl font-semibold text-gray-900 mb-1">
                                                    {testimonial.name}
                                                </h4>
                                                <p className="text-gray-600 font-medium">
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
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
                            {testimonials.map((_, index) => (
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
            </div>
        </section>
    );
};

export default TestimonialsSection;
