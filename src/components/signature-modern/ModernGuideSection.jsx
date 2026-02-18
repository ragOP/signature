import React, { useState } from 'react';
import { FileText, BookOpen, Lightbulb, Target, Download, Sparkles, ChevronRight } from 'lucide-react';

const ModernGuideSection = () => {
  const [activeTopic, setActiveTopic] = useState(0);

  const guideTopics = [
    {
      icon: Lightbulb,
      title: 'The Psychology of Signatures',
      description: 'Understand how your signature affects first impressions and professional perception',
      color: '#fbbf24',
      details: 'Learn about the subconscious impact of signatures and how they influence how others perceive you professionally.'
    },
    {
      icon: Target,
      title: 'Why This Approach Works',
      description: 'Learn the science and reasoning behind our signature design methodology',
      color: '#6366f1',
      details: 'Discover the research-backed methods we use to create signatures that enhance your professional image.'
    },
    {
      icon: BookOpen,
      title: 'How to Practice Your Signature',
      description: 'Step-by-step techniques to master your new signature design',
      color: '#06b6d4',
      details: 'Master the art of consistent signature execution with our proven practice techniques and exercises.'
    },
    {
      icon: FileText,
      title: 'Best Practices & Tips',
      description: 'Professional advice on when and how to use your signature effectively',
      color: '#10b981',
      details: 'Get expert tips on signature placement, consistency, and professional usage across different contexts.'
    }
  ];

  return (
    <section id="guide" className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="text-indigo-400 font-bold text-sm tracking-widest uppercase">Included Guide</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            Complete Signature <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Mastery Guide</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Your comprehensive PDF guide covering everything about signatures
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-3 justify-center mb-8 md:mb-12">
          {guideTopics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveTopic(index)}
                className={`group relative px-6 py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 flex items-center gap-3 ${
                  activeTopic === index
                    ? 'bg-white text-gray-900 shadow-2xl scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                style={activeTopic === index ? {
                  boxShadow: `0 10px 40px ${topic.color}40`
                } : {}}
              >
                <Icon className={`w-5 h-5 ${activeTopic === index ? 'text-gray-900' : 'text-white'}`} />
                <span>{topic.title}</span>
                {activeTopic === index && (
                  <ChevronRight className="w-5 h-5 text-gray-900" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Topic Display */}
        <div className="relative mb-12 md:mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div 
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
              style={{backgroundColor: guideTopics[activeTopic].color}}
            ></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div 
                    className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center shadow-xl"
                    style={{backgroundColor: guideTopics[activeTopic].color}}
                  >
                    {React.createElement(guideTopics[activeTopic].icon, {
                      className: "w-10 h-10 md:w-12 md:h-12 text-white"
                    })}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                    {guideTopics[activeTopic].title}
                  </h3>
                  <p className="text-gray-600 text-lg md:text-xl mb-6 leading-relaxed">
                    {guideTopics[activeTopic].description}
                  </p>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    {guideTopics[activeTopic].details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PDF Preview */}
        <div className="relative">
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative z-10 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left - Content */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                      <Download className="w-8 h-8 text-yellow-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-1">Complete PDF Guide</h3>
                      <p className="text-indigo-200 text-sm">Included Free with Purchase</p>
                    </div>
                  </div>
                  
                  <p className="text-indigo-100 text-lg mb-6">
                    A comprehensive guide covering everything you need to know about signatures
                  </p>

                  <div className="space-y-3">
                    {[
                      'The importance and impact of your signature',
                      'Why we recommend this specific approach',
                      'How to practice and perfect your signature',
                      'Professional tips and best practices'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-4 h-4 text-indigo-900" />
                        </div>
                        <span className="text-white font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - Image Preview */}
                <div className="relative">
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/20">
                    <div className="aspect-[3/4] bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl flex items-center justify-center p-4 mb-4">
                      <img
                        src="/past-proof-5.png"
                        alt="Signature Guide Preview"
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          e.target.src = "/signature-hero.webp";
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="absolute -top-4 -right-4 bg-yellow-400 text-indigo-900 px-4 py-2 rounded-full font-black text-sm shadow-xl">
                    FREE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernGuideSection;
