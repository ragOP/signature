import React from 'react';
import { X, Star, Clock, Palette } from 'lucide-react';

const SignatureCartItem = ({ item, onRemove, showRemoveButton = true }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-blue-600/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-xl rounded-2xl p-6 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="space-y-4">
          {/* Product Details */}
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-blue-600 text-sm sm:text-base mb-4">
                  {item.description}
                </p>
              </div>
              {showRemoveButton && (
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-blue-400 hover:text-red-500 transition-colors duration-200 p-2"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Features */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-blue-700 mb-3">What's Included:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {item.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"></div>
                    <span className="text-sm text-blue-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price and Duration */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-blue-600 font-medium">{item.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-blue-200 my-4"></div>

            {/* Price Section */}
            <div className="flex justify-start">
              <div className="text-left">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-blue-800">₹{item.price}</span>
                  <span className="text-xl text-blue-400 line-through">₹{item.originalPrice}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignatureCartItem;
