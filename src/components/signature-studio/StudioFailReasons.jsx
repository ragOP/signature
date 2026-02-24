import React, { useEffect, useRef, useState } from 'react';

const StudioFailReasons = () => {
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

  const reasons = [
    { if: 'Too simple', then: 'it looks generic' },
    { if: 'Too random', then: 'it looks unprofessional' },
    { if: 'Too complex', then: "you can't repeat it consistently" },
  ];

  return (
    <section id="why-fail" ref={ref} className="studio-section">
      <div className={`studio-reveal ${visible ? 'visible' : ''}`}>
        <h2 className="studio-headline text-center mb-10">
          Most signatures fail for 3 reasons
        </h2>
        <p className="studio-subhead text-center mb-8">If your signature is…</p>
        <ul className="space-y-4 max-w-lg mx-auto mb-12">
          {reasons.map((r, i) => (
            <li key={i} className="flex flex-wrap items-baseline gap-2 justify-center text-[#1a1a2e] font-medium">
              <span className="text-[#2EC4B6]">{r.if}</span>
              <span className="text-[#64748b]">→</span>
              <span className="text-[#64748b]">{r.then}</span>
            </li>
          ))}
        </ul>
        <p className="studio-subhead text-center max-w-2xl mx-auto">
          We design a signature that&apos;s:{' '}
          <span className="text-[#1a1a2e] font-semibold">readable enough to trust</span>
          {' + '}
          <span className="text-[#1a1a2e] font-semibold">stylish enough to remember</span>
          {' + '}
          <span className="text-[#1a1a2e] font-semibold">easy enough to repeat</span>
        </p>
      </div>
      <div className="studio-divider" />
    </section>
  );
};

export default StudioFailReasons;
