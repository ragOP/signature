import React, { useEffect, useRef, useState } from 'react';

const problems = [
  'It looks rushed',
  'It lacks structure',
  "It doesn't reflect your ambition",
  'It carries no psychological weight',
  'It blends in',
];

const contexts = [
  'Contracts',
  'Bank documents',
  'Job applications',
  'Business deals',
  'Official records',
];

const SIProblemSection = () => {
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
    <section id="problem" ref={ref} className="si-section">
      <div className="si-divider mb-16" />
      <div className={`transition-all duration-700 ${visible ? 'si-reveal-visible' : 'opacity-0 translate-y-8'}`}>
        <p className="si-label mb-4">Section 2</p>
        <h2 className="si-headline text-[#F5F5F7] mb-6">
          Why Your Current Signature Is Costing You Authority
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12 max-w-3xl">
          {problems.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-2 text-[#9CA3AF] text-sm sm:text-base"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="si-subhead mb-4">
          Your signature appears on:
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          {contexts.map((ctx) => (
            <span
              key={ctx}
              className="px-4 py-2 rounded-lg si-glass-card text-sm text-[#F5F5F7] border border-[rgba(212,175,55,0.15)]"
            >
              {ctx}
            </span>
          ))}
        </div>
        <p className="si-subhead mb-2">
          And every time it silently communicates something about you.
        </p>
        <p className="text-xl sm:text-2xl font-semibold text-[#D4AF37]">
          The question is: What is it saying?
        </p>
      </div>
      <div className="si-divider mt-16" />
    </section>
  );
};

export default SIProblemSection;
