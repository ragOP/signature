import React from 'react';
import { FileText, BookOpen, Lightbulb, Target, Download, Sparkles } from 'lucide-react';

const GuidePreviewSection = () => {
  const guideTopics = [
    { icon: Lightbulb, title: 'The Psychology of Signatures', description: 'Understand how your signature affects first impressions and professional perception', gradient: 'from-[#FBCEB1] to-[#fde4d4]' },
    { icon: Target, title: 'Why This Approach Works', description: 'Learn the science and reasoning behind our signature design methodology', gradient: 'from-[#FBCEB1] to-[#fde4d4]' },
    { icon: BookOpen, title: 'How to Practice Your Signature', description: 'Step-by-step techniques to master your new signature design', gradient: 'from-[#FBCEB1] to-[#fde4d4]' },
    { icon: FileText, title: 'Best Practices & Tips', description: 'Professional advice on when and how to use your signature effectively', gradient: 'from-[#FBCEB1] to-[#fde4d4]' }
  ];

  return (
    <section id="guide" className="py-16 md:py-24 premium-section-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,206,177,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,206,177,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2d2a26] mb-4 md:mb-6">
            Your Complete <span className="premium-gradient-text">Signature Guide</span>
          </h2>
          <p className="text-base md:text-xl text-[#5c5651] max-w-3xl mx-auto leading-relaxed">
            Included with every signature purchase - a comprehensive PDF guide covering everything you need to know
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
          {guideTopics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <div
                key={index}
                className="group bg-white/95 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-[0_20px_40px_rgba(251,206,177,0.1)] transition-all duration-500 border border-[rgba(251,206,177,0.2)] hover:border-[rgba(251,206,177,0.35)] transform hover:-translate-y-1 backdrop-blur-xl"
              >
                <div className="flex items-start space-x-4 md:space-x-6">
                  <div className="flex-shrink-0">
                    <div className={`p-3 md:p-4 rounded-xl bg-gradient-to-br ${topic.gradient} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-[#2d2a26] mb-2 md:mb-3">
                      {topic.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#5c5651] leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative bg-white/95 rounded-3xl overflow-hidden text-[#2d2a26] shadow-xl border border-[rgba(251,206,177,0.25)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(251,206,177,0.05)] via-[rgba(251,206,177,0.02)] to-[rgba(251,206,177,0.05)]"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="p-3 md:p-4 rounded-xl bg-[linear-gradient(135deg,#FBCEB1,#fde4d4)] shadow-md">
                  <FileText className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2d2a26]">Signature Guide PDF</h3>
              </div>
              <p className="text-base md:text-xl text-[#5c5651] mb-4 md:mb-6">
                A beautifully designed, comprehensive guide that explains:
              </p>
              <ul className="space-y-2 md:space-y-3 text-[#5c5651] text-sm md:text-base mb-6 md:mb-8">
                {[
                  'The importance and impact of your signature',
                  'Why we recommend this specific approach',
                  'How to practice and perfect your signature',
                  'Professional tips and best practices'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 md:gap-3">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#FBCEB1] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-[#FBCEB1] rounded-2xl p-6 border border-[rgba(251,206,177,0.25)] shadow-md inline-block">
                <Download className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 text-[#FBCEB1]" />
                <p className="text-center font-bold text-base md:text-lg mb-1 text-[#2d2a26]">Included Free</p>
                <p className="text-center text-sm text-[#555555]">With Your Purchase</p>
              </div>
            </div>
            <div className="relative bg-[#FBCEB1] flex items-center justify-center p-6 md:p-12">
              <div className="relative w-full max-w-md">
                <img
                  src="/past-proof-5.png"
                  alt="Signature Guide Preview"
                  className="w-full h-auto object-contain rounded-lg shadow-lg border-2 border-[rgba(251,206,177,0.2)]"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { e.target.src = "/signature-hero.webp"; }}
                />
                <div className="absolute -top-4 -right-4 bg-[linear-gradient(135deg,#FBCEB1,#fde4d4)] rounded-full p-3 shadow-md">
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
