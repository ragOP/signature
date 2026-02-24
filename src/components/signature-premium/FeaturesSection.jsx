import React from 'react';
import { CheckCircle, Sparkles, Download, Clock, Mail, FileText, Crown } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    { icon: Sparkles, title: '3 Unique Designs', description: 'Receive three professionally crafted signature designs to choose from', highlight: true, gradient: 'from-[#FBCEB1] to-[#fde4d4]' },
    { icon: FileText, title: 'Comprehensive PDF Guide', description: 'Detailed guide explaining the importance of signatures and best practices', highlight: true, gradient: 'from-[#FBCEB1] to-[#fde4d4]' },
    { icon: Download, title: 'High-Resolution Files', description: 'Get your signatures in multiple formats (PNG, SVG, PDF) ready for use', highlight: false, gradient: 'from-[#FBCEB1] to-[#fde4d4]' },
    { icon: Clock, title: '24-48 Hour Delivery', description: 'Fast turnaround time - receive your designs within 1-2 business days', highlight: false, gradient: 'from-[#FBCEB1] to-[#fde4d4]' },
    { icon: Mail, title: 'Email Delivery', description: 'Everything delivered directly to your inbox, including the guide PDF', highlight: false, gradient: 'from-[#FBCEB1] to-[#fde4d4]' },
    { icon: CheckCircle, title: 'Professional Quality', description: 'Designed by experts who understand typography, psychology, and branding', highlight: false, gradient: 'from-[#FBCEB1] to-[#fde4d4]' }
  ];

  return (
    <section id="features" className="py-16 md:py-24 premium-section-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,206,177,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(251,206,177,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(251,206,177,0.12)] border border-[rgba(251,206,177,0.25)] mb-4">
            <Crown className="w-4 h-4 text-[#FBCEB1]" />
            <span className="text-sm font-semibold text-[#FBCEB1]">PREMIUM FEATURES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2d2a26] mb-4 md:mb-6">
            What You'll <span className="premium-gradient-text">Receive</span>
          </h2>
          <p className="text-base md:text-xl text-[#5c5651] max-w-3xl mx-auto leading-relaxed">
            Everything you need to elevate your signature and understand its importance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-2xl md:rounded-3xl p-6 md:p-8 transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-xl ${
                  feature.highlight
                    ? 'bg-white/95 border-2 border-[rgba(251,206,177,0.35)] shadow-xl shadow-[rgba(251,206,177,0.08)]'
                    : 'bg-white/90 border border-[rgba(251,206,177,0.2)] shadow-lg hover:border-[rgba(251,206,177,0.35)]'
                }`}
              >
                {feature.highlight && (
                  <div className="absolute -top-3 -right-3 bg-[linear-gradient(135deg,#FBCEB1,#fde4d4)] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                    <Crown className="w-3 h-3" />
                    Premium
                  </div>
                )}
                <div className={`inline-flex p-3 md:p-4 rounded-xl mb-4 md:mb-6 bg-gradient-to-br ${feature.gradient} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className={`text-lg md:text-xl font-bold mb-2 md:mb-3 ${feature.highlight ? 'text-[#FBCEB1]' : 'text-[#2d2a26]'}`}>
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-[#5c5651] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="relative bg-white/95 rounded-3xl overflow-hidden border border-[rgba(251,206,177,0.25)] shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(251,206,177,0.05)] via-[rgba(251,206,177,0.02)] to-[rgba(251,206,177,0.05)]"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 text-center md:text-left flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-4 md:justify-start justify-center">
                <Crown className="w-6 h-6 text-[#FBCEB1]" />
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2d2a26]">
                  Plus: Complete Signature Guide PDF
                </h3>
              </div>
              <p className="text-base md:text-xl mb-6 md:mb-8 text-[#5c5651]">
                Learn why signatures matter, how to practice yours, and why we recommend this approach
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                {['Psychology of Signatures', 'Best Practices', 'Practice Techniques', 'Professional Tips'].map((item, idx) => (
                  <span key={idx} className="bg-[rgba(251,206,177,0.12)] border border-[rgba(251,206,177,0.25)] px-4 py-2 rounded-full text-sm md:text-base text-[#FBCEB1] font-semibold shadow-sm">
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative h-64 md:h-auto bg-[#FBCEB1] flex items-center justify-center p-6 md:p-12">
              <img
                src="/past-proof-1.png"
                alt="Signature Guide Preview"
                className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                loading="eager"
                decoding="async"
                onError={(e) => { e.target.src = "/signature-hero.webp"; }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
