import React, { useState, useEffect } from 'react';
import { Menu, X, Crown } from 'lucide-react';

const PremiumNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-amber-500/10 border-b border-amber-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Premium Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Crown className={`w-6 h-6 md:w-7 md:h-7 transition-colors ${
              isScrolled ? 'text-amber-500' : 'text-amber-400'
            }`} />
            <span className={`text-xl md:text-2xl font-extrabold transition-colors ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>
              Signature<span className="premium-gradient-text">Pro</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#features" className={`font-semibold text-sm transition-all duration-300 hover:text-amber-400 ${
              isScrolled ? 'text-slate-300' : 'text-slate-200'
            }`}>
              Features
            </a>
            <a href="#importance" className={`font-semibold text-sm transition-all duration-300 hover:text-amber-400 ${
              isScrolled ? 'text-slate-300' : 'text-slate-200'
            }`}>
              Why It Matters
            </a>
            <a href="#guide" className={`font-semibold text-sm transition-all duration-300 hover:text-amber-400 ${
              isScrolled ? 'text-slate-300' : 'text-slate-200'
            }`}>
              Guide
            </a>
            <button className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full font-bold text-sm shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-slate-300' : 'text-white'
            } hover:bg-slate-800/50`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 bg-slate-950/98 backdrop-blur-xl rounded-xl mt-2 mb-2 border border-slate-800 shadow-2xl">
            <a 
              href="#features" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-slate-200 hover:text-amber-400 hover:bg-slate-900/50 font-semibold rounded-lg transition-all duration-300"
            >
              Features
            </a>
            <a 
              href="#importance" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-slate-200 hover:text-amber-400 hover:bg-slate-900/50 font-semibold rounded-lg transition-all duration-300"
            >
              Why It Matters
            </a>
            <a 
              href="#guide" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-slate-200 hover:text-amber-400 hover:bg-slate-900/50 font-semibold rounded-lg transition-all duration-300"
            >
              Guide
            </a>
            <button className="w-full mx-4 mt-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full font-bold shadow-lg shadow-amber-500/30">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default PremiumNavbar;
