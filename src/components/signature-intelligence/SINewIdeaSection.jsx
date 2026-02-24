import React, { useEffect, useRef, useState } from 'react';
import InkStrokeSVG from './InkStrokeSVG';

const pillars = [
  'Stroke psychology',
  'Confidence geometry',
  'Authority balance',
  'Flow dynamics',
  'Memorability structure',
];

const sources = [
  'Behavioral psychology',
  'Branding science',
  'Executive presence theory',
  'Typography structure',
];

const SINewIdeaSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="intelligence" ref={ref} className="si-section">
      <div className={`transition-all duration-700 ${visible ? 'si-reveal-visible' : 'opacity-0 translate-y-8'}`}>
        <p className="si-label mb-4">Section 3</p>
        <h2 className="si-headline text-[#F5F5F7] mb-4">
          Introducing <span className="text-[#D4AF37]">Signature Intelligence™</span>
        </h2>
        <p className="si-subhead mb-10 max-w-2xl">
          We don&apos;t just design signatures. We engineer:
        </p>
        <ul className="si-check-list mb-12 max-w-xl">
          {pillars.map((item) => (
            <li key={item} className="text-[#F5F5F7] font-medium">
              {item}
            </li>
          ))}
        </ul>
        <div className="my-12 flex justify-center opacity-60">
          <InkStrokeSVG width={200} height={56} />
        </div>
        <p className="si-subhead mb-4">Each signature is crafted using principles from:</p>
        <div className="flex flex-wrap gap-3">
          {sources.map((s) => (
            <span
              key={s}
              className="px-4 py-2 rounded-lg bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.2)] text-[#D4AF37] text-sm font-medium"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="si-divider mt-16" />
    </section>
  );
};

export default SINewIdeaSection;
