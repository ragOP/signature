import React from 'react';
import { X, Heart, Clock, FileText } from 'lucide-react';

const LoveCartItem = ({ item, onRemove, showRemoveButton = true }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-rose-100 overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 love-font-poppins mb-2">
              {item.name}
            </h3>
            <p className="text-gray-600 love-font-inter text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
          {showRemoveButton && (
            <button
              onClick={() => onRemove(item.id)}
              className="ml-4 p-2 text-gray-400 hover:text-rose-500 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Image and Details */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="w-full md:w-32 h-32 md:h-24 rounded-xl overflow-hidden flex-shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            {/* Features */}
            <div className="space-y-2 mb-4">
              {item.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700 love-font-inter">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Duration */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock className="w-4 h-4 text-purple-500" />
              <span className="love-font-inter">Delivery: {item.duration}</span>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-4 border-t border-rose-100">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-rose-600 love-font-poppins">
              ₹{item.price}
            </span>
            <span className="text-lg text-gray-400 line-through love-font-inter">
              ₹{item.originalPrice}
            </span>
            <span className="text-sm text-green-600 font-medium love-font-inter">
              {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveCartItem; 