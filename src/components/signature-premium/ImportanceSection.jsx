import React from 'react';
import { Shield, Briefcase, Heart, TrendingUp, Users, Award } from 'lucide-react';

const ImportanceSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Professional Credibility',
      description: 'A well-designed signature establishes trust and professionalism in business and legal documents.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/5'
    },
    {
      icon: Briefcase,
      title: 'Career Advancement',
      description: 'Stand out in job applications, contracts, and professional correspondence with a memorable signature.',
      gradient: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-500/10 to-indigo-500/5'
    },
    {
      icon: Heart,
      title: 'Personal Identity',
      description: 'Your signature is a reflection of your personality and values - make it count.',
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-500/10 to-rose-500/5'
    },
    {
      icon: TrendingUp,
      title: 'Brand Recognition',
      description: 'A consistent, unique signature becomes part of your personal brand and recognition.',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/5'
    },
    {
      icon: Users,
      title: 'Social Impact',
      description: 'First impressions matter - your signature is often the first thing people see on your documents.',
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-500/10 to-amber-500/5'
    },
    {
      icon: Award,
      title: 'Legacy Building',
      description: 'Create a signature that will be remembered and associated with your achievements.',
      gradient: 'from-amber-500 to-yellow-500',
      bgGradient: 'from-amber-500/10 to-yellow-500/5'
    }
  ];

  return (
    <section id="importance" className="py-16 md:py-24 premium-section-bg-light relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6">
            Why Your Signature <span className="premium-gradient-text">Matters</span>
          </h2>
          <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Your signature is more than just a name - it's a powerful tool that shapes how others perceive you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 transform hover:-translate-y-2 border border-slate-700/50 hover:border-amber-500/30 backdrop-blur-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-100 rounded-2xl md:rounded-3xl transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className={`inline-flex p-3 md:p-4 rounded-xl bg-gradient-to-br ${benefit.gradient} mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action with Images */}
        <div className="mt-12 md:mt-16">
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto border border-amber-500/20 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-yellow-500/5 to-amber-500/10"></div>
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 md:mb-6">
                    Ready to Transform Your Signature?
                  </h3>
                  <p className="text-base md:text-lg text-slate-300 mb-6 md:mb-8 leading-relaxed">
                    Get your custom signature design plus a comprehensive PDF guide explaining everything you need to know
                  </p>
                  <button className="px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-white rounded-full font-bold text-base md:text-lg shadow-2xl shadow-amber-500/50 hover:shadow-amber-500/70 transition-all duration-300 transform hover:scale-105">
                    Get Started Now
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {['/past-proof-1.png', '/past-proof-2.png', '/past-proof-3.png', '/past-proof-4.png'].map((img, idx) => (
                    <div key={idx} className="relative rounded-xl overflow-hidden border border-amber-500/20 bg-slate-800/50 aspect-square">
                      <img
                        src={img}
                        alt={`Signature proof ${idx + 1}`}
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                          const fallbacks = ['/signature-1.png', '/signature-2.png', '/signature-3.png', '/signature-4.png'];
                          e.target.src = fallbacks[idx] || '/signature-1.png';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportanceSection;
