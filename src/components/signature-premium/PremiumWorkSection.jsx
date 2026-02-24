import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

const PremiumWorkSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const signatureExamples = [
    { src: "/signature-1.png", alt: "Premium Signature Design 1", title: "Elegant Professional", description: "Clean, sophisticated design perfect for executives" },
    { src: "/signature-2.png", alt: "Premium Signature Design 2", title: "Bold & Confident", description: "Strong, memorable signature for leaders" },
    { src: "/signature-3.png", alt: "Premium Signature Design 3", title: "Creative & Unique", description: "Distinctive design that stands out" },
    { src: "/signature-4.png", alt: "Premium Signature Design 4", title: "Classic Elegance", description: "Timeless design with modern flair" },
    { src: "/signature-5.png", alt: "Premium Signature Design 5", title: "Modern Minimalist", description: "Sleek and professional design" },
    { src: "/signature-6.png", alt: "Premium Signature Design 6", title: "Artistic Flair", description: "Creative signature with personality" }
  ];

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % signatureExamples.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + signatureExamples.length) % signatureExamples.length);

  return (
    <section className="py-16 md:py-24 premium-section-bg-light relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[rgba(251,206,177,0.06)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgba(251,206,177,0.2)] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(251,206,177,0.12)] border border-[rgba(251,206,177,0.25)] mb-4">
            <Sparkles className="w-4 h-4 text-[#FBCEB1]" />
            <span className="text-sm font-semibold text-[#555555]">OUR WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2d2a26] mb-4 md:mb-6">
            Signature <span className="premium-gradient-text">Transformations</span>
          </h2>
          <p className="text-base md:text-xl text-[#5c5651] max-w-3xl mx-auto leading-relaxed">
            See how we transform ordinary signatures into extraordinary statements of identity
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto mb-8 md:mb-12">
          <div className="relative rounded-3xl overflow-hidden border-2 border-[rgba(251,206,177,0.25)] shadow-xl bg-white/90 backdrop-blur-sm">
            <img
              src={signatureExamples[currentIndex].src}
              alt={signatureExamples[currentIndex].alt}
              className="w-full h-auto object-contain bg-[#FBCEB1] p-8 md:p-12"
              loading="eager"
              decoding="async"
              onError={(e) => {
                const fallbacks = ["/sign-1.jpg", "/sign-2.jpg", "/sign-3.jpg"];
                e.target.src = fallbacks[currentIndex % fallbacks.length];
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,251,245,0.7)] via-transparent to-transparent pointer-events-none"></div>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 backdrop-blur-xl border border-[rgba(251,206,177,0.3)] text-[#FBCEB1] hover:bg-[rgba(251,206,177,0.15)] transition-all duration-300 shadow-lg z-10"
              aria-label="Previous image"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 backdrop-blur-xl border border-[rgba(251,206,177,0.3)] text-[#FBCEB1] hover:bg-[rgba(251,206,177,0.15)] transition-all duration-300 shadow-lg z-10"
              aria-label="Next image"
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(255,251,245,0.98)] to-transparent p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#2d2a26] mb-2">
                {signatureExamples[currentIndex].title}
              </h3>
              <p className="text-sm md:text-base text-[#5c5651]">
                {signatureExamples[currentIndex].description}
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {signatureExamples.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-[#FBCEB1]'
                    : 'w-2 bg-[rgba(251,206,177,0.35)] hover:bg-[rgba(251,206,177,0.5)]'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {signatureExamples.map((example, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`group relative rounded-xl md:rounded-2xl overflow-hidden border-2 transition-all duration-300 transform hover:scale-105 ${
                index === currentIndex
                  ? 'border-[#FBCEB1] shadow-lg shadow-[rgba(251,206,177,0.25)]'
                  : 'border-[rgba(251,206,177,0.2)] hover:border-[rgba(251,206,177,0.45)]'
              }`}
            >
              <div className="aspect-square bg-[#FBCEB1] flex items-center justify-center p-2 md:p-3">
                <img
                  src={example.src}
                  alt={example.alt}
                  className="w-full h-full object-contain"
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                  onError={(e) => {
                    const fallbacks = ["/sign-1.jpg", "/sign-2.jpg", "/sign-3.jpg", "/sign-4.jpg", "/sign-5.jpg", "/sign-6.jpg"];
                    e.target.src = fallbacks[index] || "/sign-1.jpg";
                  }}
                />
              </div>
              {index === currentIndex && (
                <div className="absolute inset-0 bg-[rgba(251,206,177,0.08)] border-2 border-[rgba(251,206,177,0.5)] rounded-xl md:rounded-2xl"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumWorkSection;
