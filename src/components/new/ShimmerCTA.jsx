import React from 'react';

const ShimmerCTA = ({ text = "Get Your Signature", onClick, className = "" }) => {
  return (
    <button 
      className={`relative bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white border-none py-4 px-8 rounded-lg text-lg font-semibold cursor-pointer overflow-hidden transition-all duration-300 w-full max-w-md flex items-center justify-center gap-2 hover:from-gray-700 hover:to-gray-800 hover:-translate-y-1 hover:shadow-xl transform group ${className}`}
      onClick={onClick}
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
      
      {/* Continuous Shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {text}
        <svg 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className="group-hover:translate-x-1 transition-transform duration-300"
        >
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </span>
    </button>
  );
};

export default ShimmerCTA;
