import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const SINavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#problem', label: 'The Problem' },
    { href: '#intelligence', label: 'Signature Intelligence™' },
    { href: '#kit', label: 'What You Get' },
    { href: '#cta', label: 'Get Started' },
  ];

  return (
    <nav className={`si-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-[#F5F5F7] font-bold text-lg tracking-tight">
          <span className="text-[#D4AF37]">Signature</span> Intelligence™
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-[#9CA3AF] hover:text-[#D4AF37] transition-colors"
            >
              {label}
            </a>
          ))}
          <a href="/signature-cart" className="si-cta text-sm py-2.5 px-5">
            Get My Power Signature →
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#9CA3AF] hover:text-[#D4AF37] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-4 py-4 px-4 si-glass-card space-y-3">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-[#9CA3AF] hover:text-[#D4AF37] font-medium"
            >
              {label}
            </a>
          ))}
          <a href="/signature-cart" className="block pt-2" onClick={() => setMobileOpen(false)}>
            <span className="si-cta inline-block w-full text-center">Get My Power Signature →</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default SINavbar;
