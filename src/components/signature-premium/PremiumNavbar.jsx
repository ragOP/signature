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
        ? 'bg-[rgba(254,249,246,0.95)] backdrop-blur-xl shadow-lg border-b border-[rgba(251,206,177,0.2)]' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Crown className={`w-6 h-6 md:w-7 md:h-7 transition-colors ${
              isScrolled ? 'text-[#FBCEB1]' : 'text-[#FBCEB1]'
            }`} />
            <span className="text-xl md:text-2xl font-extrabold text-[#1a1a1a] transition-colors">
              Signature <span className="premium-gradient-text">Studio</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#features" className="font-semibold text-sm text-[#555555] transition-all duration-300 hover:text-[#FBCEB1]">
              Features
            </a>
            <a href="#importance" className="font-semibold text-sm text-[#555555] transition-all duration-300 hover:text-[#FBCEB1]">
              Why It Matters
            </a>
            <a href="#guide" className="font-semibold text-sm text-[#555555] transition-all duration-300 hover:text-[#FBCEB1]">
              Guide
            </a>
            <a href="/signature-cart">
              <button className="px-6 py-2.5 bg-[linear-gradient(135deg,#FBCEB1_0%,#fde4d4_50%,#FBCEB1_100%)] text-white rounded-full font-bold text-sm shadow-lg shadow-[rgba(251,206,177,0.3)] hover:shadow-[rgba(251,206,177,0.45)] transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#555555] hover:bg-[rgba(251,206,177,0.1)] transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 bg-[rgba(255,255,255,0.98)] backdrop-blur-xl rounded-xl mt-2 mb-2 border border-[rgba(251,206,177,0.2)] shadow-xl">
            <a 
              href="#features" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-[#555555] hover:text-[#FBCEB1] hover:bg-[rgba(251,206,177,0.08)] font-semibold rounded-lg transition-all duration-300"
            >
              Features
            </a>
            <a 
              href="#importance" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-[#555555] hover:text-[#FBCEB1] hover:bg-[rgba(251,206,177,0.08)] font-semibold rounded-lg transition-all duration-300"
            >
              Why It Matters
            </a>
            <a 
              href="#guide" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-[#555555] hover:text-[#FBCEB1] hover:bg-[rgba(251,206,177,0.08)] font-semibold rounded-lg transition-all duration-300"
            >
              Guide
            </a>
            <a href="/signature-cart" className="block mx-4 mt-2">
              <button className="w-full px-6 py-3 bg-[linear-gradient(135deg,#FBCEB1_0%,#fde4d4_100%)] text-white rounded-full font-bold shadow-lg shadow-[rgba(251,206,177,0.3)]">
                Get Started
              </button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default PremiumNavbar;
