import React, { useEffect, useRef, useState } from 'react';

const triggers = [
  'Confidence perception',
  'Leadership bias',
  'Competence assumption',
  'Authority reinforcement',
];

const SIPsychologySection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="si-section">
      <div className={`transition-all duration-700 ${visible ? 'si-reveal-visible' : 'opacity-0 translate-y-8'}`}>
        <p className="si-label mb-4">Section 5</p>
        <h2 className="si-headline text-[#F5F5F7] mb-6">
          Why This Works
        </h2>
        <p className="si-subhead mb-8 max-w-2xl">
          Your brain forms impressions in milliseconds. A strong signature triggers:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-2xl">
          {triggers.map((t) => (
            <li key={t} className="flex items-center gap-2 text-[#F5F5F7] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
              {t}
            </li>
          ))}
        </ul>
        <p className="text-lg text-[#D4AF37] font-medium italic">
          Small visual signals create large subconscious impressions.
        </p>
      </div>
      <div className="si-divider mt-16" />
    </section>
  );
};

export default SIPsychologySection;
