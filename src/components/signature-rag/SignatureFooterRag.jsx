import React from 'react';
import SignatureCTAButton from './SignatureCTAButton';
import { Sparkles } from 'lucide-react';

const SignatureFooterRag = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-blue-200 backdrop-blur-xl shadow-lg border-t border-blue-300">
      <div className="max-w-7xl mx-auto px-4 py-2">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-2">
                <span className="text-gray-500 line-through text-sm">₹999</span>
                <span className="text-xl font-bold text-blue-900">₹589</span>
              </div>
              <span className="text-xs text-red-600 font-medium">Last 2 slots left</span>
            </div>
            <div className="">
              <SignatureCTAButton 
                text="Buy Now"
                className="text-xs rounded-sm !py-2 px-4 bg-blue-600 text-white hover:bg-blue-700 whitespace-nowrap"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex flex-col items-start space-y-1">
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 line-through text-lg">₹999</span>
              <span className="text-2xl font-bold text-blue-900">₹589</span>
            </div>
            <span className="text-sm text-red-600 font-medium">Last 2 slots left</span>
          </div>
          <div className="w-fit">
            <SignatureCTAButton 
              text="Buy Now"
              className="!py-1 bg-blue-600 text-white hover:bg-blue-700 whitespace-nowrap"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignatureFooterRag;
