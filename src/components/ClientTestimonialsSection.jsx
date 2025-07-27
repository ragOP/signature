import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, PhoneCall } from 'lucide-react';
import PrimaryButton from './PrimaryButton';

const ClientTestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Vikram R.",
      text: "A friend recommended this, and I'm so glad I tried it. The sketch is now my phone wallpaper, a daily reminder of who to look for.",
      rating: 5
    },
    {
      id: 2,
      name: "Sunita M.",
      text: "I received my sketch within 24 hours as promised. The details were incredible, from his eyes to the small mole on his cheek.",
      rating: 5
    },
    {
      id: 3,
      name: "Karan V.",
      text: "The likeness to someone I met a month later is uncanny. I'm a believer now. This service is worth every penny and more!",
      rating: 5
    }
  ];

  // Auto carousel for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-white/5 via-pink-50/10 to-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          {/* Desktop Layout - 3 cards side by side */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:mb-12">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Mobile Layout - Carousel */}
          <div className="lg:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Arrows */}
            {/* <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full border border-red-400/30 flex items-center justify-center text-red-400 hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full border border-red-400/30 flex items-center justify-center text-red-400 hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button> */}

            {/* Mobile Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-red-400 to-pink-400 w-6' 
                      : 'bg-red-400/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="max-w-md mx-auto">
            <PrimaryButton 
              text="Book Your Call" 
              icon={<PhoneCall className='h-5 w-5' />}
              className="mb-4"
            />
          </div>
          
          {/* Disclaimer */}
          <p className="text-sm sm:text-base text-red-400/80 font-medium">
            Only a few spots left! Hurry before the special offer ends.
          </p>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-red-500/10 via-pink-500/10 to-purple-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
      <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-red-400/20 shadow-xl">
        {/* Rating Stars */}
        <div className="flex mb-4">
          {[...Array(testimonial.rating)].map((_, index) => (
            <Star key={index} className="w-5 h-5 text-red-400 fill-current" />
          ))}
        </div>

        {/* Quote Line */}
        <div className="absolute left-4 top-16 bottom-16 w-1 bg-gradient-to-b from-red-400 to-pink-400 rounded-full"></div>

        {/* Testimonial Text */}
        <div className="pl-6 mb-6">
          <p className="text-white/90 text-base sm:text-lg leading-relaxed italic">
            "{testimonial.text}"
          </p>
        </div>

        {/* Client Name */}
        <div className="text-right">
          <p className="text-red-400 font-semibold text-sm sm:text-base">
            — {testimonial.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonialsSection; 