import React from 'react';

const SignatureAdditionalProducts = ({ products, selectedProducts, onProductToggle }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-blue-600/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-blue-200 shadow-lg">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-2 mb-4">

              <h3 className="text-xl sm:text-2xl font-bold text-blue-800">
                Enhance Your Signature Experience
              </h3>
            </div>
            <p className="text-blue-600 text-sm sm:text-base">
              Perfect your signature with premium add-ons
            </p>
          </div>

          <div className="space-y-4">
            {products.map((product) => (
              <div key={product.id} className="space-y-3">
                <div className="flex items-start space-x-4 rounded-xl hover:bg-blue-50 transition-all duration-300">
                  <div className="relative mt-2">
                    <input
                      type="checkbox"
                      id={`product-${product.id}`}
                      checked={selectedProducts.includes(product.id)}
                      onChange={() => onProductToggle(product.id)}
                      className="sr-only"
                    />
                    <label
                      htmlFor={`product-${product.id}`}
                      className={`relative flex items-center justify-center w-6 h-6 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-110 ${selectedProducts.includes(product.id)
                          ? 'bg-gradient-to-r from-blue-600 to-blue-800 border-blue-700 shadow-lg'
                          : 'bg-white border-blue-300 hover:border-blue-600'
                        }`}
                    >
                      {selectedProducts.includes(product.id) && (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </label>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <label htmlFor={`product-${product.id}`} className="text-blue-800 font-semibold text-lg cursor-pointer hover:text-blue-900 transition-colors">
                          {product.title}
                        </label>
                        <p className="text-blue-600 text-sm mt-2 mb-3">
                          {product.description}
                        </p>

                        {/* Points directly below subtitle */}
                        <div className="space-y-1">
                          {product.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex-shrink-0"></div>
                              <span className="text-blue-600 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-blue-800 font-bold text-lg">₹{product.price.toLocaleString()}</div>
                        <div className="text-blue-400 text-sm line-through">₹{product.originalPrice.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignatureAdditionalProducts;
