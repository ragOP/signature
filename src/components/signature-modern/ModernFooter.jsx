import React from 'react';
import { Mail, Phone, PenTool, Instagram, Twitter, Facebook } from 'lucide-react';

const ModernFooter = () => {
  return (
    <footer className="relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)'
    }}>
      {/* Unique Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(99, 102, 241, 0.1) 2px, rgba(99, 102, 241, 0.1) 4px)'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand Column - Unique Design */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-600 rounded-xl blur-lg opacity-50"></div>
                <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 p-3 rounded-xl">
                  <PenTool className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-1">
                  Signature<span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Studio</span>
                </h3>
                <p className="text-indigo-300 text-xs font-semibold">Professional Signature Design</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md mb-6">
              Creating signatures that reflect your personality and elevate your professional presence.
            </p>
            {/* Social Links - Unique Style */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, color: '#E4405F' },
                { icon: Twitter, color: '#1DA1F2' },
                { icon: Facebook, color: '#1877F2' }
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                    style={{borderColor: `${social.color}40`}}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links - Unique Card Style */}
          <div>
            <h4 className="text-white font-black text-lg mb-4 md:mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Features', 'Our Work', 'Guide', 'Pricing'].map((link, idx) => (
                <li key={idx}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '')}`} 
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm md:text-base font-semibold flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-indigo-400 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Unique Design */}
          <div>
            <h4 className="text-white font-black text-lg mb-4 md:mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-pink-400 to-rose-400 rounded-full"></span>
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Email</p>
                  <a href="mailto:support@signaturestudio.com" className="text-white text-sm md:text-base font-semibold hover:text-indigo-400 transition-colors">
                    support@signaturestudio.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-600/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Phone</p>
                  <a href="tel:+15551234567" className="text-white text-sm md:text-base font-semibold hover:text-purple-400 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Unique Design */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} SignatureStudio. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-indigo-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-indigo-400 transition-colors">Terms</a>
              <a href="#" className="text-gray-500 hover:text-indigo-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
