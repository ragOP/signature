import React from 'react';
import { FileText, Download, Clock, Mail, Sparkles, CheckCircle, PenTool, Award } from 'lucide-react';

const ModernFeaturesSection = () => {
  const features = [
    {
      icon: PenTool,
      title: '3 Custom Signature Designs',
      description: 'Receive three unique, professionally crafted signature designs tailored to your style and profession',
      gradient: 'from-indigo-500 to-purple-500',
      highlight: true
    },
    {
      icon: FileText,
      title: 'Complete PDF Guide',
      description: 'Comprehensive guide covering signature psychology, importance, and best practices',
      gradient: 'from-purple-500 to-pink-500',
      highlight: true
    },
    {
      icon: Download,
      title: 'Multiple File Formats',
      description: 'Get your signatures in PNG, SVG, and PDF formats ready for any use case',
      gradient: 'from-pink-500 to-rose-500',
      highlight: false
    },
    {
      icon: Clock,
      title: 'Fast 24-48 Hour Delivery',
      description: 'Quick turnaround - receive your custom designs within 1-2 business days',
      gradient: 'from-blue-500 to-cyan-500',
      highlight: false
    },
    {
      icon: Mail,
      title: 'Email Delivery',
      description: 'Everything delivered directly to your inbox, including the comprehensive guide',
      gradient: 'from-cyan-500 to-teal-500',
      highlight: false
    },
    {
      icon: Award,
      title: 'Professional Quality',
      description: 'Designed by experts who understand typography, psychology, and branding',
      gradient: 'from-teal-500 to-green-500',
      highlight: false
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-indigo-600 font-bold text-sm tracking-widest uppercase">What's Included</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Everything You Need for <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Signature Success</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            A complete package to transform your signature into a professional asset
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 transition-all duration-300 transform hover:-translate-y-2 ${
                  feature.highlight
                    ? 'border-2 border-indigo-200 shadow-xl'
                    : 'border border-gray-200 shadow-lg hover:shadow-xl'
                }`}
              >
                {feature.highlight && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    INCLUDED
                  </div>
                )}
                
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Product Highlight Box */}
        <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%)] bg-[length:2rem_2rem]"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Left - Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-3 mb-4">
                  <FileText className="w-8 h-8 md:w-10 md:h-10 text-yellow-300" />
                  <h3 className="text-3xl md:text-4xl font-black">
                    Complete Signature Guide PDF
                  </h3>
                </div>
                <p className="text-indigo-100 text-lg md:text-xl mb-6">
                  Learn why signatures matter, how to practice yours, and why we recommend this approach
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {['Psychology of Signatures', 'Best Practices', 'Practice Techniques', 'Professional Tips'].map((item, idx) => (
                    <span key={idx} className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      <CheckCircle className="w-4 h-4 inline mr-2" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right - Visual */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/20 backdrop-blur-md border-4 border-white/30 flex items-center justify-center shadow-2xl">
                  <Download className="w-16 h-16 md:w-20 md:h-20 text-yellow-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernFeaturesSection;
