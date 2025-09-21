import React from 'react';
import { X, CheckCircle, Clock } from 'lucide-react';

// --- The Redesigned, Clean Cart Item Component ---
const CartItem = ({ item, onRemove, showRemoveButton = true }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-5">
        
        {/* --- Header: Item Name and Remove Button --- */}
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="text-xl font-bold text-gray-900">
            {item.name}
          </h3>
          {showRemoveButton && (
            <button
              onClick={() => onRemove(item.id)}
              aria-label="Remove item"
              className="flex-shrink-0 text-gray-400 hover:text-red-600 transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        <p className="text-gray-600 text-sm mb-5">
          {item.description}
        </p>

        {/* --- Features List: "What's Included" --- */}
        <div className="space-y-2.5">
          {item.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* --- Footer: Delivery Time and Price --- */}
      <div className="bg-gray-50 border-t border-gray-200 px-5 py-4">
        <div className="flex justify-between items-center">
          
          {/* Delivery Time */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{item.duration}</span>
          </div>

          {/* Price */}
          <div className="text-right">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-gray-900">₹{item.price}</span>
              <span className="text-md text-gray-400 line-through">₹{item.originalPrice}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartItem;