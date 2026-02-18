import React, { useState, useEffect } from 'react';
import { Menu, X, PenTool } from 'lucide-react';

const ModernNavbar = () => {
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
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b-2 border-indigo-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Unique Logo Design */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className={`relative transition-all duration-300 ${isScrolled ? 'scale-100' : 'scale-110'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl blur-sm opacity-50"></div>
              <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-xl">
                <PenTool className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
            <span className={`text-xl md:text-2xl font-black transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Signature<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Studio</span>
            </span>
          </div>

          {/* Desktop Menu - Unique Style */}
          <div className="hidden md:flex items-center space-x-1">
            {['Features', 'Work', 'Guide'].map((item, idx) => (
              <a 
                key={idx}
                href={`#${item.toLowerCase()}`} 
                className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600' 
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
            <button className={`ml-4 px-6 py-2.5 rounded-full font-black text-sm shadow-lg transition-all duration-300 transform hover:scale-105 ${
              isScrolled
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                : 'bg-white text-indigo-600 hover:bg-indigo-50'
            }`}>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            } hover:bg-white/10`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu - Unique Design */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 bg-white rounded-2xl mt-2 mb-2 shadow-2xl border-2 border-indigo-100">
            {['Features', 'Work', 'Guide'].map((item, idx) => (
              <a 
                key={idx}
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 font-bold rounded-lg transition-all duration-300 mx-2"
              >
                {item}
              </a>
            ))}
            <button className="w-full mx-2 mt-4 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-black shadow-lg">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ModernNavbar;
