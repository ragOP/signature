import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Grid3x3, List, ZoomIn } from 'lucide-react';

const ModernWorkSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState('carousel');
  const [selectedImage, setSelectedImage] = useState(null);

  const signatureExamples = [
    {
      src: "/signature-1.png",
      alt: "Professional Signature Design 1",
      title: "Executive Signature",
      category: "Business",
      description: "Perfect for C-level executives and business leaders"
    },
    {
      src: "/signature-2.png",
      alt: "Professional Signature Design 2",
      title: "Bold Professional",
      category: "Leadership",
      description: "Strong, commanding signature for leaders"
    },
    {
      src: "/signature-3.png",
      alt: "Professional Signature Design 3",
      title: "Creative Professional",
      category: "Creative",
      description: "Unique design reflecting personality"
    },
    {
      src: "/signature-4.png",
      alt: "Professional Signature Design 4",
      title: "Classic Elegance",
      category: "Traditional",
      description: "Timeless elegance with modern touch"
    },
    {
      src: "/signature-5.png",
      alt: "Professional Signature Design 5",
      title: "Modern Minimalist",
      category: "Modern",
      description: "Clean, contemporary professional design"
    },
    {
      src: "/signature-6.png",
      alt: "Professional Signature Design 6",
      title: "Artistic Professional",
      category: "Artistic",
      description: "Expressive signature with character"
    }
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % signatureExamples.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + signatureExamples.length) % signatureExamples.length);
  };

  return (
    <section id="work" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-indigo-600 font-bold text-sm tracking-widest uppercase">Our Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Signature Design <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Examples</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            See real signature designs we've created for professionals like you
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setViewMode('carousel')}
              className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all ${
                viewMode === 'carousel' 
                  ? 'bg-white text-indigo-600 shadow-md' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              <List className="w-4 h-4 inline mr-2" />
              Carousel
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all ${
                viewMode === 'grid' 
                  ? 'bg-white text-indigo-600 shadow-md' 
                  : 'text-gray-600 hover:text-indigo-600'
              }`}
            >
              <Grid3x3 className="w-4 h-4 inline mr-2" />
              Grid
            </button>
          </div>
        </div>

        {viewMode === 'carousel' ? (
          /* Premium Carousel */
          <div className="relative max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              {/* Category Badge */}
              <div className="absolute top-6 left-6 z-20">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                  {signatureExamples[currentIndex].category}
                </div>
              </div>

              {/* Main Image Display */}
              <div className="relative h-80 md:h-[500px] bg-white flex items-center justify-center p-8 md:p-12 group cursor-pointer" onClick={() => setSelectedImage(currentIndex)}>
                <img
                  src={signatureExamples[currentIndex].src}
                  alt={signatureExamples[currentIndex].alt}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const fallbacks = ["/sign-1.jpg", "/sign-2.jpg", "/sign-3.jpg"];
                    e.target.src = fallbacks[currentIndex % fallbacks.length];
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-12 h-12 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Info Panel */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                  {signatureExamples[currentIndex].title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg">
                  {signatureExamples[currentIndex].description}
                </p>
              </div>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl border-2 border-gray-200 flex items-center justify-center text-indigo-600 hover:bg-indigo-50 hover:border-indigo-300 transition-all z-20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl border-2 border-gray-200 flex items-center justify-center text-indigo-600 hover:bg-indigo-50 hover:border-indigo-300 transition-all z-20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-3 mt-6 overflow-x-auto pb-2 scrollbar-hide justify-center">
              {signatureExamples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-4 transition-all ${
                    index === currentIndex
                      ? 'border-indigo-600 shadow-lg scale-110'
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  <div className="w-full h-full bg-gray-50 p-2">
                    <img
                      src={example.src}
                      alt={example.alt}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const fallbacks = ["/sign-1.jpg", "/sign-2.jpg", "/sign-3.jpg", "/sign-4.jpg", "/sign-5.jpg", "/sign-6.jpg"];
                        e.target.src = fallbacks[index] || "/sign-1.jpg";
                      }}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Premium Grid Gallery */
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {signatureExamples.map((example, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 cursor-pointer"
                onClick={() => {
                  setSelectedImage(index);
                  setViewMode('carousel');
                  setCurrentIndex(index);
                }}
              >
                <div className="absolute top-3 right-3 z-10">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {example.category}
                  </div>
                </div>
                <div className="h-48 md:h-64 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4 relative overflow-hidden">
                  <img
                    src={example.src}
                    alt={example.alt}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const fallbacks = ["/sign-1.jpg", "/sign-2.jpg", "/sign-3.jpg", "/sign-4.jpg", "/sign-5.jpg", "/sign-6.jpg"];
                      e.target.src = fallbacks[index] || "/sign-1.jpg";
                    }}
                  />
                  <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/5 transition-colors flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-4 md:p-6 bg-white">
                  <h3 className="font-black text-gray-900 mb-1 text-sm md:text-base">{example.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600">{example.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ModernWorkSection;
