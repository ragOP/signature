import React, { useState } from 'react';
import { generateSignatureGuidePDF } from '../../utils/pdfGenerator';
import { Download, Sparkles, Loader, Crown } from 'lucide-react';
import { toast } from 'react-toastify';

const PremiumCTA = ({ onGetStarted }) => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleDownloadGuide = async () => {
    setIsGeneratingPDF(true);
    try {
      // Generate and download the PDF guide
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
    <section className="py-16 md:py-24 premium-hero-bg relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-float-medium"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6 md:mb-8">
          <Crown className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-semibold text-amber-300">PREMIUM OFFER</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6">
          Ready to Transform Your <span className="premium-gradient-text">Signature?</span>
        </h2>
        <p className="text-base md:text-xl text-slate-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
          Get your custom signature design plus a comprehensive PDF guide explaining 
          everything you need to know about signatures
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-6 md:mb-8">
          <button
            onClick={onGetStarted}
            className="group relative px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 rounded-full font-bold text-white text-base md:text-lg shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/70 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 md:gap-3 w-full sm:w-auto justify-center"
          >
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" />
            Get Your Signature Now
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 group-hover:-rotate-12 transition-transform duration-300" />
          </button>

          <button
            onClick={handleDownloadGuide}
            disabled={isGeneratingPDF}
            className="px-8 md:px-12 py-4 md:py-5 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 backdrop-blur-xl border-2 border-amber-500/30 rounded-full font-bold text-white text-base md:text-lg hover:bg-slate-800/80 hover:border-amber-500/50 transition-all duration-300 flex items-center gap-2 md:gap-3 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto justify-center shadow-xl"
          >
            {isGeneratingPDF ? (
              <>
                <Loader className="w-5 h-5 md:w-6 md:h-6 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Download className="w-5 h-5 md:w-6 md:h-6" />
                Download Free Guide PDF
              </>
            )}
          </button>
        </div>

        <p className="text-xs md:text-sm text-slate-400">
          * Download the guide PDF to preview what you'll receive with your signature purchase
        </p>
      </div>
    </section>
  );
};

export default PremiumCTA;
