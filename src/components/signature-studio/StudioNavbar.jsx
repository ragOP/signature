import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const StudioNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`studio-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="font-bold text-lg text-[#1a1a2e] tracking-tight">
          Signature <span className="text-[#2EC4B6]">Studio</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#why-fail" className="text-sm font-medium text-[#64748b] hover:text-[#2EC4B6] transition-colors">Why It Fails</a>
          <a href="#blueprint" className="text-sm font-medium text-[#64748b] hover:text-[#2EC4B6] transition-colors">Blueprint</a>
          <a href="#what-you-get" className="text-sm font-medium text-[#64748b] hover:text-[#2EC4B6] transition-colors">What You Get</a>
          <a href="#showcase" className="text-sm font-medium text-[#64748b] hover:text-[#2EC4B6] transition-colors">Examples</a>
          <a href="/signature-cart" className="studio-cta text-sm py-2.5 px-5">Create My Signature →</a>
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#64748b] hover:text-[#2EC4B6]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden mt-4 py-4 px-4 rounded-2xl bg-white/90 shadow-lg border border-[rgba(46,196,182,0.15)] space-y-3">
          <a href="#why-fail" onClick={() => setMobileOpen(false)} className="block py-2 text-[#64748b] hover:text-[#2EC4B6] font-medium">Why It Fails</a>
          <a href="#blueprint" onClick={() => setMobileOpen(false)} className="block py-2 text-[#64748b] hover:text-[#2EC4B6] font-medium">Blueprint</a>
          <a href="#what-you-get" onClick={() => setMobileOpen(false)} className="block py-2 text-[#64748b] hover:text-[#2EC4B6] font-medium">What You Get</a>
          <a href="#showcase" onClick={() => setMobileOpen(false)} className="block py-2 text-[#64748b] hover:text-[#2EC4B6] font-medium">Examples</a>
          <a href="/signature-cart" onClick={() => setMobileOpen(false)} className="block pt-2">
            <span className="studio-cta inline-flex w-full justify-center">Create My Signature →</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default StudioNavbar;
