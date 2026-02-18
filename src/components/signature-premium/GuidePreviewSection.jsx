import React from 'react';
import { FileText, BookOpen, Lightbulb, Target, Download, Sparkles } from 'lucide-react';

const GuidePreviewSection = () => {
  const guideTopics = [
    {
      icon: Lightbulb,
      title: 'The Psychology of Signatures',
      description: 'Understand how your signature affects first impressions and professional perception',
      gradient: 'from-amber-500 to-yellow-500'
    },
    {
      icon: Target,
      title: 'Why This Approach Works',
      description: 'Learn the science and reasoning behind our signature design methodology',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: BookOpen,
      title: 'How to Practice Your Signature',
      description: 'Step-by-step techniques to master your new signature design',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FileText,
      title: 'Best Practices & Tips',
      description: 'Professional advice on when and how to use your signature effectively',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="guide" className="py-16 md:py-24 premium-section-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6">
            Your Complete <span className="premium-gradient-text">Signature Guide</span>
          </h2>
          <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Included with every signature purchase - a comprehensive PDF guide covering everything you need to know
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
          {guideTopics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 border border-slate-700/50 hover:border-amber-500/30 transform hover:-translate-y-1 backdrop-blur-xl"
              >
                <div className="flex items-start space-x-4 md:space-x-6">
                  <div className="flex-shrink-0">
                    <div className={`p-3 md:p-4 rounded-xl bg-gradient-to-br ${topic.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                      {topic.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* PDF Preview Card */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden text-white shadow-2xl border border-amber-500/20">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-amber-500/10"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-0">
            {/* Text Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 shadow-lg">
                  <FileText className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">Signature Guide PDF</h3>
              </div>
              <p className="text-base md:text-xl text-slate-300 mb-4 md:mb-6">
                A beautifully designed, comprehensive guide that explains:
              </p>
              <ul className="space-y-2 md:space-y-3 text-slate-300 text-sm md:text-base mb-6 md:mb-8">
                {[
                  'The importance and impact of your signature',
                  'Why we recommend this specific approach',
                  'How to practice and perfect your signature',
                  'Professional tips and best practices'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 md:gap-3">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-amber-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-amber-500/30 shadow-xl inline-block">
                <Download className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 text-amber-400" />
                <p className="text-center font-bold text-base md:text-lg mb-1">Included Free</p>
                <p className="text-center text-sm text-amber-300">With Your Purchase</p>
              </div>
            </div>
            {/* Image Preview */}
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-6 md:p-12">
              <div className="relative w-full max-w-md">
                <img
                  src="/past-proof-5.png"
                  alt="Signature Guide Preview"
                  className="w-full h-auto object-contain rounded-lg shadow-2xl border-2 border-amber-500/20"
                  onError={(e) => {
                    e.target.src = "/signature-hero.webp";
                  }}
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full p-3 shadow-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidePreviewSection;
