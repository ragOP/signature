import React, { useEffect, useRef, useState } from 'react';
import { ShoppingBag, PenTool, CheckCircle } from 'lucide-react';

const steps = [
  { icon: ShoppingBag, text: 'Place your order' },
  { icon: PenTool, text: 'We design 3 signature options' },
  { icon: CheckCircle, text: 'You pick your favorite + receive full files + guide' },
];

const StudioHowItWorks = () => {
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

  return (
    <section ref={ref} className="studio-section">
      <div className={`studio-reveal ${visible ? 'visible' : ''}`}>
        <h2 className="studio-headline text-center mb-10">
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {steps.map(({ icon: Icon, text }, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex p-4 rounded-2xl bg-[rgba(46,196,182,0.12)] text-[#2EC4B6] mb-4">
                <Icon className="w-8 h-8" />
              </div>
              <p className="font-semibold text-[#1a1a2e] text-lg mb-1">{i + 1}.</p>
              <p className="text-[#64748b]">{text}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="/signature-cart" className="studio-cta">
            Start Now →
          </a>
        </div>
      </div>
      <div className="studio-divider" />
    </section>
  );
};

export default StudioHowItWorks;
