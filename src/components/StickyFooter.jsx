import { useEffect, useState } from 'react';

function StickyFooter() {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev.seconds > 0
          ? { ...prev, seconds: prev.seconds - 1 }
          : prev.minutes > 0
            ? { ...prev, minutes: prev.minutes - 1, seconds: 59 }
            : prev.hours > 0
              ? { hours: prev.hours - 1, minutes: 59, seconds: 59 }
              : { hours: 0, minutes: 0, seconds: 0 };

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-3">
                {/* Mobile Layout - Horizontal */}
        <div className="block sm:hidden">
          <div className="flex items-center justify-between">
            {/* Left Side - Timer and Pricing */}
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <span className="text-red-600 font-semibold text-xs">Offer Ends:</span>
                  <div className="bg-gray-100 rounded-lg px-2 py-0.5 flex items-center space-x-1">
                    <div className="text-center">
                      <div className="text-gray-800 font-bold text-xs">{String(timeLeft.hours).padStart(2, '0')}</div>
                      <div className="text-gray-500 text-xs uppercase">Hr</div>
                    </div>
                    <div className="text-gray-400 text-xs">:</div>
                    <div className="text-center">
                      <div className="text-gray-800 font-bold text-xs">{String(timeLeft.minutes).padStart(2, '0')}</div>
                      <div className="text-gray-500 text-xs uppercase">Min</div>
                    </div>
                    <div className="text-gray-400 text-xs">:</div>
                    <div className="text-center">
                      <div className="text-gray-800 font-bold text-xs">{String(timeLeft.seconds).padStart(2, '0')}</div>
                      <div className="text-gray-500 text-xs uppercase">Sec</div>
                    </div>
                  </div>
                </div>
                
                {/* Pricing */}
                <div className="flex items-center space-x-1">
                  <span className="text-gray-400 line-through text-xs">₹9999</span>
                  <span className="text-red-600 font-bold text-base">₹1499</span>
                </div>
              </div>
              
              {/* Limited Slots Text - Below Price */}
              <div className="text-center">
                <p className="text-red-600 font-semibold text-xs animate-pulse bg-red-50 px-2 py-1 rounded-full border border-red-200">
                  ⚡ Limited slots available. Book now. ⚡
                </p>
              </div>
            </div>

            {/* Right Side - CTA Button */}
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-pink-500 to-red-600 text-white hover:from-pink-600 hover:to-red-700 h-9 font-bold text-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 buy-now-shimmer">
              <span>Buy Now</span>
            </button>
          </div>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden sm:flex items-center justify-between">
          {/* Left Side - Timer */}
          <div className="flex items-center space-x-4">
            <span className="text-red-600 font-semibold text-sm">Offer Ends In:</span>
            <div className="bg-gray-100 rounded-lg px-3 py-1 flex items-center space-x-2">
              <div className="text-center">
                <div className="text-gray-800 font-bold text-base">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-gray-500 text-xs uppercase">Hours</div>
              </div>
              <div className="text-gray-400">:</div>
              <div className="text-center">
                <div className="text-gray-800 font-bold text-base">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-gray-500 text-xs uppercase">Minutes</div>
              </div>
              <div className="text-gray-400">:</div>
              <div className="text-center">
                <div className="text-gray-800 font-bold text-base">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-gray-500 text-xs uppercase">Seconds</div>
              </div>
            </div>
          </div>

          {/* Center - Limited Slots and Pricing in Row */}
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <p className="text-red-600 font-semibold text-sm animate-pulse bg-red-50 px-3 py-1 rounded-full border border-red-200">
                ⚡ Limited slots available. Book now. ⚡
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 line-through text-sm">₹9999</span>
              <span className="text-red-600 font-bold text-lg">₹1499</span>
            </div>
          </div>

          {/* Right Side - CTA Button */}
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-pink-500 to-red-600 text-white hover:from-pink-600 hover:to-red-700 h-11 font-bold text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 buy-now-shimmer">
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default StickyFooter; 