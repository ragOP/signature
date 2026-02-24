import React, { useEffect, useRef, useState } from 'react';
import { FileText, Package, Clock, CheckCircle } from 'lucide-react';

const archetypes = ['The Executive', 'The Visionary', 'The Authority'];

const reportItems = [
  'What your signature communicates',
  'Why this design works',
  'How to practice it correctly',
  'Where to use each variation',
];

const SIPowerKitSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="kit" ref={ref} className="si-section">
      <div className={`transition-all duration-700 ${visible ? 'si-reveal-visible' : 'opacity-0 translate-y-8'}`}>
        <p className="si-label mb-4">Section 4</p>
        <h2 className="si-headline text-[#F5F5F7] mb-12">
          The <span className="text-[#D4AF37]">Signature Power Kit™</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="si-glass-card p-6 rounded-xl hover:border-[rgba(212,175,55,0.4)] transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-[rgba(212,175,55,0.15)]">
                <Package className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h3 className="font-bold text-[#F5F5F7]">3 Strategically Designed Signatures</h3>
            </div>
            <p className="text-sm text-[#9CA3AF] mb-4">Each built around a different personality archetype:</p>
            <ul className="space-y-2">
              {archetypes.map((a) => (
                <li key={a} className="text-[#F5F5F7] text-sm flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="si-glass-card p-6 rounded-xl hover:border-[rgba(212,175,55,0.4)] transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-[rgba(212,175,55,0.15)]">
                <FileText className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h3 className="font-bold text-[#F5F5F7]">Signature Intelligence Report (PDF)</h3>
            </div>
            <p className="text-sm text-[#9CA3AF] mb-3">A breakdown explaining:</p>
            <ul className="space-y-2">
              {reportItems.map((item) => (
                <li key={item} className="text-[#F5F5F7] text-sm">• {item}</li>
              ))}
            </ul>
          </div>

          <div className="si-glass-card p-6 rounded-xl hover:border-[rgba(212,175,55,0.4)] transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-[rgba(212,175,55,0.15)]">
                <Clock className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <h3 className="font-bold text-[#F5F5F7]">Practice & Delivery</h3>
            </div>
            <ul className="space-y-2 text-sm text-[#F5F5F7]">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                Practice Framework — step-by-step mastery system
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                High-Resolution Files — PNG, SVG, PDF (legal + digital)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                24–48 Hour Delivery
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="si-divider mt-16" />
    </section>
  );
};

export default SIPowerKitSection;
