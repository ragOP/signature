import React, { useState, useEffect } from 'react';

const StickyPricingFooter = () => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 10,
    seconds: 50
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 10, seconds: 50 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-yellow-400/30 shadow-2xl z-50 h-16 md:h-20 lg:h-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-full">
        {/* Mobile Layout */}
        <div className="flex items-center justify-between h-full md:hidden">
          {/* Left - Pricing */}
          <div className="flex flex-col items-center">
            <div className="text-2xl font-black text-white">₹589</div>
            <div className="text-base text-gray-400 line-through">₹1,200</div>

          </div>

          {/* Center - Timer */}
          <div className="flex items-center gap-1">
            <div className="bg-gradient-to-b from-yellow-400 to-yellow-500 text-black px-2 py-1 rounded-sm min-w-[35px] text-center">
              <span className="text-sm font-black font-mono">{String(timeLeft.minutes).padStart(2, '0')}</span>
            </div>
            <div className="text-sm font-black text-yellow-400 animate-blink">:</div>
            <div className="bg-gradient-to-b from-yellow-400 to-yellow-500 text-black px-2 py-1 rounded-sm min-w-[35px] text-center">
              <span className="text-sm font-black font-mono">{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>

          {/* Right - CTA */}
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-3 px-4 rounded-lg text-sm font-black hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 min-w-[100px]">
            Get It
          </button>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:flex lg:hidden items-center justify-between gap-6 h-full">
          {/* Left - Pricing */}
          <div className="flex items-baseline gap-3">
            <div className="text-3xl font-black text-white">₹589</div>
            <div className="text-lg text-gray-400 line-through">₹1,200</div>
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
              51% OFF
            </div>
          </div>

          {/* Center - Timer */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-b from-yellow-400 to-yellow-500 text-black px-3 py-2 rounded-sm min-w-[45px] text-center">
              <span className="text-lg font-black font-mono">{String(timeLeft.minutes).padStart(2, '0')}</span>
            </div>
            <div className="text-lg font-black text-yellow-400 animate-blink">:</div>
            <div className="bg-gradient-to-b from-yellow-400 to-yellow-500 text-black px-3 py-2 rounded-sm min-w-[45px] text-center">
              <span className="text-lg font-black font-mono">{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>

          {/* Right - CTA */}
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-3 px-6 rounded-lg text-base font-black hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 min-w-[160px]">
            Get Signature
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between gap-8 h-full">
          {/* Left - Pricing */}
          <div className="flex items-baseline gap-4">
            <div className="text-4xl font-black text-white">₹589</div>
            <div className="text-xl text-gray-400 line-through">₹1,200</div>
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
              51% OFF
            </div>
          </div>

          {/* Center - Timer */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-b from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-sm min-w-[55px] text-center">
              <span className="text-2xl font-black font-mono">{String(timeLeft.minutes).padStart(2, '0')}</span>
            </div>
            <div className="text-2xl font-black text-yellow-400 animate-blink">:</div>
            <div className="bg-gradient-to-b from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-sm min-w-[55px] text-center">
              <span className="text-2xl font-black font-mono">{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>

          {/* Right - CTA */}
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-4 px-10 rounded-lg text-lg font-black hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 min-w-[200px]">
            Get Your Signature
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyPricingFooter;
