import React from 'react';
import { Shield, Briefcase, Heart, TrendingUp, Users, Award } from 'lucide-react';

const ImportanceSection = () => {
  const benefits = [
    { icon: Shield, title: 'Professional Credibility', description: 'A well-designed signature establishes trust and professionalism in business and legal documents.', gradient: 'from-[#FBCEB1] to-[#fde4d4]', bgGradient: 'from-[rgba(251,206,177,0.08)] to-[rgba(251,206,177,0.04)]' },
    { icon: Briefcase, title: 'Career Advancement', description: 'Stand out in job applications, contracts, and professional correspondence with a memorable signature.', gradient: 'from-[#FBCEB1] to-[#fde4d4]', bgGradient: 'from-[rgba(251,206,177,0.08)] to-[rgba(251,206,177,0.04)]' },
    { icon: Heart, title: 'Personal Identity', description: 'Your signature is a reflection of your personality and values - make it count.', gradient: 'from-[#FBCEB1] to-[#fde4d4]', bgGradient: 'from-[rgba(251,206,177,0.08)] to-[rgba(251,206,177,0.04)]' },
    { icon: TrendingUp, title: 'Brand Recognition', description: 'A consistent, unique signature becomes part of your personal brand and recognition.', gradient: 'from-[#FBCEB1] to-[#fde4d4]', bgGradient: 'from-[rgba(251,206,177,0.08)] to-[rgba(251,206,177,0.04)]' },
    { icon: Users, title: 'Social Impact', description: 'First impressions matter - your signature is often the first thing people see on your documents.', gradient: 'from-[#FBCEB1] to-[#fde4d4]', bgGradient: 'from-[rgba(251,206,177,0.08)] to-[rgba(251,206,177,0.04)]' },
    { icon: Award, title: 'Legacy Building', description: 'Create a signature that will be remembered and associated with your achievements.', gradient: 'from-[#FBCEB1] to-[#fde4d4]', bgGradient: 'from-[rgba(251,206,177,0.08)] to-[rgba(251,206,177,0.04)]' }
  ];

  return (
    <section id="importance" className="py-16 md:py-24 premium-section-bg-light relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[rgba(251,206,177,0.05)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgba(251,206,177,0.04)] rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2d2a26] mb-4 md:mb-6">
            Why Your Signature <span className="premium-gradient-text">Matters</span>
          </h2>
          <p className="text-base md:text-xl text-[#5c5651] max-w-3xl mx-auto leading-relaxed">
            Your signature is more than just a name - it's a powerful tool that shapes how others perceive you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/95 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-[0_20px_40px_rgba(251,206,177,0.1)] transition-all duration-500 transform hover:-translate-y-2 border border-[rgba(251,206,177,0.2)] hover:border-[rgba(251,206,177,0.35)] backdrop-blur-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-100 rounded-2xl md:rounded-3xl transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className={`inline-flex p-3 md:p-4 rounded-xl bg-gradient-to-br ${benefit.gradient} mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#2d2a26] mb-2 md:mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#5c5651] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16">
          <div className="relative bg-white/95 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto border border-[rgba(251,206,177,0.25)] shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(251,206,177,0.05)] via-[rgba(251,206,177,0.02)] to-[rgba(251,206,177,0.05)]"></div>
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#2d2a26] mb-4 md:mb-6">
                    Ready to Transform Your Signature?
                  </h3>
                  <p className="text-base md:text-lg text-[#5c5651] mb-6 md:mb-8 leading-relaxed">
                    Get your custom signature design plus a comprehensive PDF guide explaining everything you need to know
                  </p>
                  <a href="/signature-cart">
                    <button className="px-8 md:px-12 py-4 md:py-5 bg-[linear-gradient(135deg,#FBCEB1,#fde4d4)] text-white rounded-full font-bold text-base md:text-lg shadow-xl shadow-[rgba(251,206,177,0.3)] hover:shadow-[rgba(251,206,177,0.45)] transition-all duration-300 transform hover:scale-105">
                      Get Started Now
                    </button>
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {['/past-proof-1.png', '/past-proof-2.png', '/past-proof-3.png', '/past-proof-4.png'].map((img, idx) => (
                    <div key={idx} className="relative rounded-xl overflow-hidden border border-[rgba(251,206,177,0.5)] bg-[#FBCEB1] aspect-square">
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
