import React, { useState, useEffect } from 'react';
import ShimmerCTA from './ShimmerCTA';

const NewHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative flex items-center justify-center landing-bg-1 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
        <div className="floating-element element-4"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">

        {/* Image */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex justify-center mb-5">
            <img
              src="/signature-hero.webp"
              alt="Premium Signature Design"
              className="w-full h-[30vh] max-w-lg  shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Main Title */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl mt-3 md:text-8xl lg:text-9xl font-bold text-white leading-none mb-4 italic shadow-2xl">
            Sign with <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 font-bold to-yellow-500 bg-clip-text text-transparent">Confidence</span>
          </h1>
        </div>

        <div className={`transition-all duration-1000 delay-400 mt-4 flex flex-col md:flex-row items-center w-full justify-center gap-4 px-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <ShimmerCTA />
          <button 
            onClick={() => {
              const videoElement = document.getElementById('hero-video');
              if (videoElement) {
                videoElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-2 text-gray-800 hover:text-black transition-colors duration-300 group"
          >
            <div className="w-6 h-6 rounded-full bg-white/90 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white transition-all duration-300 shadow-md relative">
              {/* Blinking background animation */}
              <div className="absolute inset-0 rounded-full bg-yellow-400/30 animate-pulse"></div>
              <svg className="w-5 h-5 fill-current relative z-10" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="font-medium">
              Show Demo
              <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full ml-2 animate-blink"></span>
            </span>
          </button>
        </div>

        <div className={`transition-all duration-1000 delay-400 mt-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} px-4`}>
          <div className="max-w-5xl mx-auto mb-4">
            <p className="text-base md:text-2xl lg:text-3xl text-black font-semibold leading-relaxed mb-3">
              Transform your professional identity with a signature that builds trust.
            </p>
            <div className="flex flex-col items-center gap-3 text-sm md:text-base text-gray-800">
              {/* Top row - 2 items */}
              <div className="flex items-center justify-center gap-3">
                <div className="flex items-center gap-2 bg-gradient-to-r from-white/90 via-white/85 to-white/90 px-4 py-2 rounded-full shadow-md border border-white/30">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold">24hr Delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-white/90 via-white/85 to-white/90 px-4 py-2 rounded-full shadow-md border border-white/30">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Premium Quality</span>
                </div>
              </div>
              
              {/* Bottom row - 1 item */}
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-2 bg-gradient-to-r from-white/90 via-white/85 to-white/90 px-4 py-2 rounded-full shadow-md border border-white/30">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Handcrafted Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Video */}
        <div id="hero-video" className="relative w-full h-60 md:h-40 lg:h-48 overflow-hidden mt-8">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/signature-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Blended overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
        </div>

      </div>

    </section>
  );
};

export default NewHero;
