import React, { useState } from 'react';
import { generateSignatureGuidePDF } from '../../utils/pdfGenerator';
import { Download, Sparkles, Loader, ArrowRight, Zap } from 'lucide-react';
import { toast } from 'react-toastify';

const ModernCTA = ({ onGetStarted }) => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleDownloadGuide = async () => {
    setIsGeneratingPDF(true);
    try {
      generateSignatureGuidePDF();
      toast.success('PDF guide downloaded successfully!');
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #fef3c7 0%, #fce7f3 50%, #e0e7ff 100%)'
    }}>
      {/* Unique Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(99, 102, 241, 0.1) 35px, rgba(99, 102, 241, 0.1) 70px)'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unique Card Design */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-indigo-200 relative overflow-hidden">
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-br-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-400/20 to-transparent rounded-tl-3xl"></div>

          <div className="relative z-10 text-center">
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 mb-6 shadow-xl">
              <Zap className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4 md:mb-6" style={{
              letterSpacing: '-0.02em'
            }}>
              READY TO <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">START?</span>
            </h2>
            
            <p className="text-gray-600 text-lg md:text-xl mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Get your custom signature design plus a comprehensive PDF guide
            </p>

            {/* Unique Button Group */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <button
                onClick={onGetStarted}
                className="group relative px-10 md:px-14 py-5 md:py-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full font-black text-white text-base md:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center gap-3">
                  GET YOUR SIGNATURE
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                </span>
              </button>

              <button
                onClick={handleDownloadGuide}
                disabled={isGeneratingPDF}
                className="group relative px-10 md:px-14 py-5 md:py-6 bg-white border-4 border-indigo-600 rounded-full font-black text-indigo-600 text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto justify-center"
              >
                {isGeneratingPDF ? (
                  <>
                    <Loader className="w-5 h-5 md:w-6 md:h-6 animate-spin" />
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 md:w-6 md:h-6" />
                    <span>Download Free Guide</span>
                  </>
                )}
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>24-48hr Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>Professional Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-600" />
                <span>Money Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernCTA;
