import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";

// --- Helper Component: Interactive Comparison Slider ---
// We'll reuse a compact version of this powerful component inside each testimonial card.
const InteractiveComparisonSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!isDragging || !containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    const x = clientX - bounds.left;
    const percentage = (x / bounds.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleInteractionStart = () => setIsDragging(true);
  const handleInteractionEnd = () => setIsDragging(false);

  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden rounded-lg select-none cursor-ew-resize border border-yellow-200 shadow-sm"
      onMouseDown={handleInteractionStart}
      onTouchStart={handleInteractionStart}
      onMouseUp={handleInteractionEnd}
      onMouseLeave={handleInteractionEnd}
      onTouchEnd={handleInteractionEnd}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={beforeImage}
          alt="Before"
          className="w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
          BEFORE
        </div>
      </div>

      {/* After Image */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={afterImage}
          alt="After"
          className="w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
          AFTER
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 h-full w-1 bg-yellow-400 cursor-ew-resize shadow-lg"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -left-3.5 bg-white rounded-full p-1.5 shadow-lg border-2 border-yellow-400">
          <svg
            className="w-4 h-4 text-yellow-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            ></path>
          </svg>
        </div>
      </div>

      {/* Drag Instruction */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
        Drag to compare
      </div>
    </div>
  );
};

// --- Main Redesigned Section Component ---
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const testimonials = [
    {
      text: "From messy to magnetic. My new signature gets compliments every time I use it. The transformation is just incredible!",
      author: "Priya S.",
      role: "Chartered Accountant",
      rating: 5,
      beforeImage: "/signature-1.png",
      afterImage: "/signature-2.png",
    },
    {
      text: "I didn't realize how weak and unprofessional my old signature looked until I saw the 'after.' This was a total upgrade for my personal brand.",
      author: "Rahul V.",
      role: "Startup Founder",
      rating: 5,
      beforeImage: "/signature-3.png",
      afterImage: "/signature-4.png",
    },
    {
      text: "Honestly, this is the best money I've spent on my professional development this year. Worth every single penny.",
      author: "Aisha K.",
      role: "MBA Graduate",
      rating: 5,
      beforeImage: "/signature-5.png",
      afterImage: "/signature-6.png",
    },
    {
      text: "Professional signature that matches my brand perfectly! My clients notice the difference immediately.",
      author: "Sarah M.",
      role: "Marketing Director",
      rating: 5,
      beforeImage: "/signature-1.png",
      afterImage: "/signature-3.png",
    },
    {
      text: "Worth every penny. My confidence has skyrocketed since getting my new signature. It's amazing what a difference it makes!",
      author: "Michael R.",
      role: "Software Engineer",
      rating: 5,
      beforeImage: "/signature-2.png",
      afterImage: "/signature-5.png",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white border border-yellow-200 rounded-full px-6 py-3 mb-6 shadow-sm">
            <Quote className="w-5 h-5 text-yellow-600" />
            <span className="text-sm font-semibold text-yellow-700">
              Customer Stories
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Real Transformations, Real Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we've helped professionals elevate their identity with
            stunning signature transformations
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-white border border-yellow-200 shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 p-6">
                    {/* Left Side: Testimonial Content */}
                    <div className="flex flex-col justify-center space-y-6">
                      {/* Star Rating */}
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-6 h-6 text-yellow-500 fill-current"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed">
                        <Quote className="w-8 h-8 text-yellow-400 mb-4" />"
                        {testimonial.text}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="pt-4 border-t border-yellow-100">
                        <div className="font-semibold text-gray-900 text-lg">
                          {testimonial.author}
                        </div>
                        <div className="text-yellow-600 font-medium">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    {/* Right Side: Interactive Comparison */}
                    <div className="flex flex-col justify-center">
                      <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          See the Transformation
                        </h3>
                        <p className="text-sm text-gray-600">
                          Drag the slider to see the before and after
                        </p>
                      </div>
                      <InteractiveComparisonSlider
                        beforeImage={testimonial.beforeImage}
                        afterImage={testimonial.afterImage}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => {
              prevSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-yellow-50 border border-yellow-200 rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={() => {
              nextSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-yellow-50 border border-yellow-200 rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-yellow-500 scale-125"
                  : "bg-yellow-200 hover:bg-yellow-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-6 border border-yellow-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-gray-600 mb-6">
              Transform your signature and elevate your professional presence
              today
            </p>

            <button
              onClick={() => navigate("/signature-new-cart")}
              className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-yellow-500 hover:to-amber-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
