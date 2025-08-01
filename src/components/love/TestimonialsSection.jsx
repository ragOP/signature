import React, { useState, useEffect } from 'react';
import { Star, Quote, Heart } from 'lucide-react';

const TestimonialsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            name: "Neha",
            location: "Delhi",
            rating: 5,
            text: "This report gave me closure after a tough breakup.",
            avatar: "N"
        },
        {
            name: "Ishaan",
            location: "Pune",
            rating: 5,
            text: "She even predicted the month I met my current partner!",
            avatar: "I"
        },
        {
            name: "Ritika",
            location: "Jaipur",
            rating: 5,
            text: "Helped me decide whether to wait for him or move on.",
            avatar: "R"
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <div className="py-4 mt-4">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Why This Report Matters Section */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-merriweather">
                            💔 WHY THIS REPORT MATTERS
                        </h2>
                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-rose-100 mb-8">
                            <div className="flex items-center justify-center mb-4">
                                <Heart className="w-8 h-8 text-rose-500" />
                            </div>
                            <p className="text-xl md:text-2xl font-medium text-gray-700 font-poppins leading-relaxed italic">
                                "Breakups, misunderstandings, family pressure to get married, or being stuck in a one-sided love — these aren't small issues. They're emotional wounds that astrology can help heal."
                            </p>
                        </div>
                    </div>

                    {/* Testimonials Title */}
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 font-merriweather">
                            💬 What Our Clients Say
                        </h3>
                        <p className="text-lg text-gray-600 font-poppins">
                            Real stories from real people
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {/* Slider Container */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <div className="relative overflow-hidden">
                                <div className="flex transition-transform duration-700 ease-in-out" 
                                     style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                    {testimonials.map((testimonial, index) => (
                                        <div key={index} className="w-full flex-shrink-0" style={{ minWidth: '100%' }}>
                                            <div className="text-center">
                                                {/* Quote Icon */}
                                                <div className="flex justify-center mb-6">
                                                    <Quote className="w-8 h-8 text-rose-400" />
                                                </div>

                                                {/* Rating Stars */}
                                                <div className="flex justify-center mb-6 space-x-1">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                                                    ))}
                                                </div>

                                                {/* Testimonial Text */}
                                                <p className="text-gray-700 font-poppins leading-relaxed mb-8 text-lg italic">
                                                    "{testimonial.text}"
                                                </p>

                                                {/* Avatar and Name */}
                                                <div className="flex items-center justify-center space-x-3">
                                                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                                                        {testimonial.avatar}
                                                    </div>
                                                    <div className="text-left">
                                                        <div className="font-semibold text-gray-800 font-poppins">
                                                            {testimonial.name}
                                                        </div>
                                                        <div className="text-sm text-gray-600 font-poppins">
                                                            {testimonial.location}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Dots Indicator */}
                            <div className="flex justify-center mt-8 space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === currentSlide 
                                                ? 'bg-rose-500 scale-125' 
                                                : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection; 