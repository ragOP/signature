import React from 'react';
import { Zap } from 'lucide-react';
import CtaButton from './CtaButton';

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-yellow-50/95 via-amber-50/95 to-orange-50/95 backdrop-blur-xl shadow-lg border-t border-yellow-200/50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Unified Responsive Layout */}
        <div className="flex items-center justify-between">
          {/* Left Side - Pricing & Urgency */}
          <div className="flex flex-col items-start space-y-1">
            <div className="flex items-center space-x-2 lg:space-x-4">
              <span className="text-gray-500 line-through text-sm lg:text-lg">₹999</span>
              <span className="text-xl lg:text-2xl font-bold text-gray-800">₹589</span>
            </div>
            <div className="flex items-center space-x-1">
              <Zap className="w-3 h-3 lg:w-4 lg:h-4 text-amber-500" />
              <span className="text-xs lg:text-sm text-amber-700 font-semibold">
                Last 2 slots left
              </span>
            </div>
          </div>

          {/* Right Side - CTA Button */}
          <div className="flex-shrink-0">
            <CtaButton 
              size="small" 
              width="fit-content" 
              title="Get Signature"
              className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25 text-sm lg:text-base"
            />
          </div>
        </div>

        {/* Trust Signal - Only on larger screens */}
        <div className="hidden lg:flex justify-center mt-2">
          <div className="flex items-center space-x-4 text-xs text-gray-600">
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>24-48hr delivery</span>
            </span>
            <span className="text-gray-400">•</span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>2,500+ happy clients</span>
            </span>
            <span className="text-gray-400">•</span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>100% satisfaction</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;