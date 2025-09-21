import React from 'react';

const HeaderBanner = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 border-b-2 border-yellow-500 text-center py-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      <div className="relative z-10">
        <p className="text-lg text-black font-bold tracking-wider uppercase flex items-center justify-center gap-3">
          <span className="animate-bounce">✨</span>
          Craft Your Professional Identity with a Signature
          <span className="animate-bounce delay-150">✨</span>
        </p>
      </div>
    </div>
  );
};

export default HeaderBanner;
