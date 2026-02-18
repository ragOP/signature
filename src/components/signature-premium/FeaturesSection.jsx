import React from 'react';
import { CheckCircle, Sparkles, Download, Clock, Mail, FileText, Crown } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: '3 Unique Designs',
      description: 'Receive three professionally crafted signature designs to choose from',
      highlight: true,
      gradient: 'from-amber-500 to-yellow-500'
    },
    {
      icon: FileText,
      title: 'Comprehensive PDF Guide',
      description: 'Detailed guide explaining the importance of signatures and best practices',
      highlight: true,
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Download,
      title: 'High-Resolution Files',
      description: 'Get your signatures in multiple formats (PNG, SVG, PDF) ready for use',
      highlight: false,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: '24-48 Hour Delivery',
      description: 'Fast turnaround time - receive your designs within 1-2 business days',
      highlight: false,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Delivery',
      description: 'Everything delivered directly to your inbox, including the guide PDF',
      highlight: false,
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: CheckCircle,
      title: 'Professional Quality',
      description: 'Designed by experts who understand typography, psychology, and branding',
      highlight: false,
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 premium-section-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,.05)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
            <Crown className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-amber-300">PREMIUM FEATURES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6">
            What You'll <span className="premium-gradient-text">Receive</span>
          </h2>
          <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to elevate your signature and understand its importance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-2xl md:rounded-3xl p-6 md:p-8 transition-all duration-500 transform hover:-translate-y-2 ${
                  feature.highlight
                    ? 'bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 border-2 border-amber-500/30 shadow-2xl shadow-amber-500/10'
                    : 'bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/80 border border-slate-700/50 shadow-xl hover:border-amber-500/30'
                } backdrop-blur-xl`}
              >
                {feature.highlight && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-amber-500/50 flex items-center gap-1">
                    <Crown className="w-3 h-3" />
                    Premium
                  </div>
                )}
                <div className={`inline-flex p-3 md:p-4 rounded-xl mb-4 md:mb-6 bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className={`text-lg md:text-xl font-bold mb-2 md:mb-3 ${
                  feature.highlight ? 'text-amber-200' : 'text-white'
                }`}>
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
                {feature.highlight && (
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-yellow-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:via-yellow-500/3 group-hover:to-amber-500/5 rounded-2xl md:rounded-3xl transition-all duration-500"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Premium Highlight Box with Image */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-amber-500/10"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-0">
            {/* Text Content */}
            <div className="p-8 md:p-12 text-center md:text-left flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-4 md:justify-start justify-center">
                <Crown className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
                  Plus: Complete Signature Guide PDF
                </h3>
              </div>
              <p className="text-base md:text-xl mb-6 md:mb-8 text-slate-300">
                Learn why signatures matter, how to practice yours, and why we recommend this approach
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                {['Psychology of Signatures', 'Best Practices', 'Practice Techniques', 'Professional Tips'].map((item, idx) => (
                  <span key={idx} className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm border border-amber-500/30 px-4 py-2 rounded-full text-sm md:text-base text-amber-200 font-semibold shadow-lg">
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>
            {/* Image */}
            <div className="relative h-64 md:h-auto bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-6 md:p-12">
              <img
                src="/past-proof-1.png"
                alt="Signature Guide Preview"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  e.target.src = "/signature-hero.webp";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
