import React from 'react';
import { Mail, Phone, MapPin, Crown } from 'lucide-react';

const PremiumFooter = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 md:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Crown className="w-6 h-6 text-amber-400" />
              <h3 className="text-xl md:text-2xl font-extrabold text-white">
                Signature<span className="premium-gradient-text">Pro</span>
              </h3>
            </div>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
              Transforming signatures into powerful symbols of identity and professionalism.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="#features" className="text-sm md:text-base text-slate-400 hover:text-amber-400 transition-colors duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#importance" className="text-sm md:text-base text-slate-400 hover:text-amber-400 transition-colors duration-300">
                  Why It Matters
                </a>
              </li>
              <li>
                <a href="#guide" className="text-sm md:text-base text-slate-400 hover:text-amber-400 transition-colors duration-300">
                  Guide
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Contact</h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-slate-400">
              <li className="flex items-center gap-2 md:gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-amber-400 flex-shrink-0" />
                <span>support@signaturepro.com</span>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-amber-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-xs md:text-sm text-slate-500">
            &copy; {new Date().getFullYear()} SignaturePro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
