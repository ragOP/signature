import React, { useEffect, useRef, useState } from 'react';
import { Shield, Briefcase, Palette, Sparkles } from 'lucide-react';

const StudioWhyItMatters = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const benefits = [
    { icon: Shield, label: 'Trust', desc: 'looks authentic and confident' },
    { icon: Briefcase, label: 'Professional presence', desc: '' },
    { icon: Palette, label: 'Brand consistency', desc: '' },
    { icon: Sparkles, label: 'First-impression advantage', desc: '' },
  ];

  return (
    <section ref={ref} className="studio-section">
      <div className={`studio-reveal ${visible ? 'visible' : ''}`}>
        <h2 className="studio-headline text-center mb-6">
          Why it matters
        </h2>
        <p className="studio-subhead text-center mb-10 max-w-2xl mx-auto">
          Your signature shows up when things become real.
          Contracts. Banking. Applications. Approvals. Deals.
        </p>
        <p className="studio-subhead text-center mb-10">A clean signature creates:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {benefits.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="studio-card p-5 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-[rgba(46,196,182,0.12)] text-[#2EC4B6] flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a2e]">{label}</h3>
                {desc && <p className="text-sm text-[#64748b] mt-0.5">{desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="studio-divider" />
    </section>
  );
};

export default StudioWhyItMatters;
