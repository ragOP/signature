import React, { useEffect, useRef, useState } from 'react';
import { PenLine, Scale, Heart, Zap, Repeat } from 'lucide-react';

const StudioBlueprint = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const points = [
    { icon: PenLine, label: 'Flow', desc: 'looks smooth, never shaky' },
    { icon: Scale, label: 'Balance', desc: 'professional structure' },
    { icon: Heart, label: 'Personality', desc: 'your identity shows' },
    { icon: Zap, label: 'Speed', desc: 'can be signed fast' },
    { icon: Repeat, label: 'Consistency', desc: 'same result every time' },
  ];

  return (
    <section id="blueprint" ref={ref} className="studio-section">
      <div className={`studio-reveal ${visible ? 'visible' : ''}`}>
        <div className="flex justify-center mb-10">
          <img
            src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80"
            alt="Pen and writing"
            className="rounded-2xl w-full max-w-md object-cover aspect-[4/3] shadow-lg border border-[rgba(46,196,182,0.1)]"
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
        <h2 className="studio-headline text-center mb-4">
          Introducing the <span className="text-[#2EC4B6]">Signature Blueprint™</span>
        </h2>
        <p className="studio-subhead text-center mb-12 max-w-xl mx-auto">
          This isn&apos;t just &quot;design&quot;. It&apos;s a repeatable system.
        </p>
        <p className="studio-subhead text-center mb-10">We build your signature around:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {points.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="studio-card p-6 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[rgba(46,196,182,0.12)] text-[#2EC4B6] flex-shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a2e] mb-1">{label}</h3>
                <p className="text-sm text-[#64748b]">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="studio-divider" />
    </section>
  );
};

export default StudioBlueprint;
