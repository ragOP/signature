import React, { useEffect, useRef, useState } from 'react';

const BEFORE_AFTER = [
  { before: '/signature-1.png', after: '/signature-2.png', label: 'Rushed scribble → signature with structure' },
  { before: '/signature-2.png', after: '/signature-3.png', label: 'Generic sign → memorable identity mark' },
  { before: '/signature-3.png', after: '/signature-4.png', label: 'Inconsistent strokes → repeatable flow' },
  { before: '/signature-4.png', after: '/signature-5.png', label: 'Before → After' },
  { before: '/signature-5.png', after: '/signature-6.png', label: 'Before → After' },
  { before: '/signature-6.png', after: '/signature-1.png', label: 'Before → After' },
];

const StudioShowcase = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="showcase" ref={ref} className="studio-section">
      <div className={`studio-reveal ${visible ? 'visible' : ''}`}>
        <h2 className="studio-headline text-center mb-4">
          Before → After
        </h2>
        <p className="studio-subhead text-center mb-10 max-w-xl mx-auto">
          From rushed scribble → to signature with structure. From generic sign → to memorable identity mark.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {BEFORE_AFTER.map((item, i) => (
            <div key={i} className="studio-card overflow-hidden">
              <div className="grid grid-cols-2 gap-2 p-4">
                <div className="aspect-[4/3] rounded-lg bg-[#f8fafc] border border-[rgba(46,196,182,0.1)] overflow-hidden flex items-center justify-center p-2">
                  <img src={item.before} alt="Before" className="max-h-full w-auto object-contain" onError={(e) => e.target.style.display = 'none'} />
                </div>
                <div className="aspect-[4/3] rounded-lg bg-[#f8fafc] border border-[rgba(46,196,182,0.1)] overflow-hidden flex items-center justify-center p-2">
                  <img src={item.after} alt="After" className="max-h-full w-auto object-contain" onError={(e) => e.target.style.display = 'none'} />
                </div>
              </div>
              <p className="text-xs text-[#64748b] text-center px-4 pb-4">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="studio-divider" />
    </section>
  );
};

export default StudioShowcase;
