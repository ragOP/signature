import React, { useEffect, useRef, useState } from 'react';
import { FileText, Package, Download, Mail } from 'lucide-react';

const SIG_SAMPLES = ['/signature-1.png', '/signature-2.png', '/signature-3.png'];

const StudioWhatYouGet = () => {
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

  const styles = [
    { name: 'Style A: Clean Professional', tag: 'formal + corporate' },
    { name: 'Style B: Modern Minimal', tag: 'sharp + clean' },
    { name: 'Style C: Bold Statement', tag: 'strong + premium' },
  ];

  const blueprintItems = [
    'Why signatures change perception',
    'How to pick the best style for your purpose',
    'The "2-minute practice method"',
    'Best places to use it (legal / email / invoices / brand)',
  ];

  return (
    <section id="what-you-get" ref={ref} className="studio-section">
      <div className={`studio-reveal ${visible ? 'visible' : ''}`}>
        <h2 className="studio-headline text-center mb-4">
          What you receive
        </h2>
        <p className="studio-subhead text-center mb-12 max-w-xl mx-auto">
          The Signature Kit <span className="text-[#1a1a2e] font-semibold">(Delivered to your inbox)</span>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* 1) 3 Unique Signature Styles */}
          <div className="studio-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[rgba(46,196,182,0.12)] text-[#2EC4B6]">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#1a1a2e] text-lg">1) 3 Unique Signature Styles</h3>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {SIG_SAMPLES.map((src, i) => (
                <div key={i} className="aspect-[4/3] rounded-xl bg-[#f8fafc] border border-[rgba(46,196,182,0.1)] overflow-hidden flex items-center justify-center p-2">
                  <img src={src} alt="" className="max-h-full w-auto object-contain" onError={(e) => e.target.style.display = 'none'} />
                </div>
              ))}
            </div>
            <ul className="space-y-2">
              {styles.map((s) => (
                <li key={s.name} className="text-sm text-[#1a1a2e]">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-[#64748b]"> ({s.tag})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2) Signature Blueprint PDF */}
          <div className="studio-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[rgba(46,196,182,0.15)] text-[#2EC4B6]">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#1a1a2e] text-lg">2) Signature Blueprint PDF</h3>
            </div>
            <p className="text-sm text-[#64748b] mb-3">A beautifully designed guide that covers:</p>
            <ul className="space-y-2">
              {blueprintItems.map((item) => (
                <li key={item} className="text-sm text-[#1a1a2e] flex items-start gap-2">
                  <span className="text-[#2EC4B6] mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 3) Ready Files */}
          <div className="studio-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[rgba(77,163,255,0.15)] text-[#4DA3FF]">
                <Download className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#1a1a2e] text-lg">3) Ready Files</h3>
            </div>
            <ul className="space-y-2 text-sm text-[#1a1a2e]">
              <li>Transparent PNG</li>
              <li>Vector SVG (super crisp)</li>
              <li>PDF set (printing & official use)</li>
            </ul>
          </div>

          {/* 4) Delivery */}
          <div className="studio-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[rgba(255,93,162,0.12)] text-[#FF5DA2]">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#1a1a2e] text-lg">4) Delivery</h3>
            </div>
            <p className="text-sm text-[#1a1a2e]">24–48 hours on email.</p>
          </div>
        </div>
      </div>
      <div className="studio-divider" />
    </section>
  );
};

export default StudioWhatYouGet;
