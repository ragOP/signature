import React, { useState } from 'react';

const AdditionalProducts = ({ products, selectedProducts, onProductToggle }) => {
  const [expandedProduct, setExpandedProduct] = useState(null);

  const toggleExpanded = (productId) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/20">
        <div className="space-y-3">
          <div className="space-y-2">
            {products.map((product) => (
              <div key={product.id} className="space-y-2">
                <div className="flex items-start space-x-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-300">
                  <input
                    type="checkbox"
                    id={`product-${product.id}`}
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => onProductToggle(product.id)}
                    className="w-4 h-4 text-red-500 bg-white/10 border-white/20 rounded focus:ring-red-500 focus:ring-2 mt-2"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <label htmlFor={`product-${product.id}`} className="text-white font-medium text-base cursor-pointer">
                          {product.title}
                        </label>
                        <div className="mt-1">
                          {expandedProduct === product.id ? (
                            <p className="text-white/60 text-sm">{product.description}</p>
                          ) : (
                            <>
                              <p className="text-white/60 text-sm line-clamp-2">{product.description}</p>
                              <button
                                onClick={() => toggleExpanded(product.id)}
                                className="text-red-300 text-xs hover:text-red-200 transition-colors underline mt-1"
                              >
                                Show More
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="text-right ml-2">
                        <div className="text-white font-bold text-base">₹{product.price.toLocaleString()}</div>
                        <div className="text-white/40 text-sm line-through">₹{product.originalPrice.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Expanded Content - Only Key Points */}
                {expandedProduct === product.id && (
                  <>
                    <div className="pl-7 mt-2 p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="space-y-1">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            </div>
                            <span className="text-white/80 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="pl-7">
                      <button
                        onClick={() => toggleExpanded(product.id)}
                        className="text-red-300 text-xs hover:text-red-200 transition-colors underline"
                      >
                        Show Less
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalProducts; 