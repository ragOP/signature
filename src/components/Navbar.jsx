import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="relative z-50 bg-gradient-to-br from-white/10 via-pink-50/5 to-white/10 backdrop-blur-xl border-b border-pink-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 sm:h-20">
          <Link to="/home" className="flex items-center space-x-2 sm:space-x-4 hover:opacity-80 transition-opacity">
            <img
              src="/brand-logo.png"
              alt="Easy Soul Logo"
              className="w-60 h-18 object-cover"
            />

          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 