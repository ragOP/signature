import React, { useEffect, useRef, useState } from 'react';

const audiences = [
  'Founders',
  'Lawyers',
  'Doctors',
  'Executives',
  'Creators',
  'Students entering competitive careers',
];

const SISocialProofSection = () => {
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
        <p className="si-label mb-4">Designed for</p>
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {audiences.map((a) => (
            <span
              key={a}
              className="px-5 py-2.5 rounded-full si-glass-card text-[#F5F5F7] font-medium text-sm border border-[rgba(212,175,55,0.2)] hover:border-[rgba(212,175,55,0.5)] transition-colors"
            >
              {a}
            </span>
          ))}
        </div>
        <p className="text-xl sm:text-2xl font-semibold text-[#F5F5F7] text-center">
          Your name deserves power.
        </p>
      </div>
      <div className="si-divider mt-16" />
    </section>
  );
};

export default SISocialProofSection;
