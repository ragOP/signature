import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

const SIFooter = () => {
  return (
    <footer className="border-t border-[rgba(212,175,55,0.15)] py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="font-bold text-lg text-[#F5F5F7] mb-1">
              Signature <span className="text-[#D4AF37]">Intelligence™</span>
            </p>
            <p className="text-sm text-[#9CA3AF] max-w-md">
              Psychology-optimized signature design for authority, confidence, and professional impact.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#problem" className="text-sm text-[#9CA3AF] hover:text-[#D4AF37] transition-colors flex items-center gap-1">
              The Problem <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#intelligence" className="text-sm text-[#9CA3AF] hover:text-[#D4AF37] transition-colors flex items-center gap-1">
              Signature Intelligence™ <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#kit" className="text-sm text-[#9CA3AF] hover:text-[#D4AF37] transition-colors flex items-center gap-1">
              Power Kit <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="/signature-cart" className="si-cta text-sm py-2.5 px-5 inline-flex items-center justify-center">
              Get Started
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[rgba(212,175,55,0.1)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-[#6B7280]">
            © {new Date().getFullYear()} Signature Intelligence™. All rights reserved.
          </p>
          <a href="/contact" className="text-xs text-[#9CA3AF] hover:text-[#D4AF37] flex items-center gap-1 transition-colors">
            <Mail className="w-4 h-4" /> Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SIFooter;
