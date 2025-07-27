import { Link } from 'react-router-dom';
import { useState } from 'react';
import { X, Shield, Sparkles, Check } from 'lucide-react';
import Navbar from '../components/Navbar';

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Astro Consultation",
      description: "1-on-1 personalized consultation with India's top astro-numerology expert",
      price: 1499,
      originalPrice: 9999,
      duration: "60 minutes",
      features: ["Personalized birth chart analysis", "Life path guidance", "Career & relationship insights", "Remedial solutions"],
      image: "/astro.jpg"
    }
  ]);

  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const discount = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * (item.quantity || 1)), 0);
  const total = subtotal;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    setTimeout(() => {
      setIsCheckingOut(false);
      alert('Thank you for your purchase! You will receive a confirmation email shortly.');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black selection:bg-red-500/20 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className={`w-1 h-1 rounded-full ${i % 3 === 0 ? 'bg-amber-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-white'} opacity-60`}></div>
          </div>
        ))}
      </div>

      {/* Cart Content */}
      <section className="relative pt-0 sm:pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Your Cosmic Cart
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Review your selected services and prepare for your transformative journey
            </p>
          </div>

          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="max-w-2xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                  <div className="text-center space-y-6">
                    <div className="text-6xl mb-4 animate-bounce">✨</div>
                    <h3 className="text-2xl font-bold text-white">Your Cart is Empty</h3>
                    <p className="text-white/70">Ready to unlock your cosmic potential? Browse our premium services!</p>
                    <Link to="/home" className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 buy-now-shimmer">
                      <span>Explore Services</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Cart Items */
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items List */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
                      <div className="flex flex-col gap-4 sm:gap-6">
                        {/* Top Stack: Image + Title/Subtitle */}
                        <div className="flex flex-row gap-4 sm:gap-6">
                          {/* Item Image */}
                          <div className="flex-shrink-0">
                            <div className="relative group">
                              <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-2 border border-white/20">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-xl"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Title and Subtitle */}
                          <div className="flex-1 flex flex-col min-w-0">
                            <div className="flex justify-between items-start mb-2 sm:mb-3">
                              <h3 className="text-lg sm:text-xl font-bold text-white pr-2" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.name}</h3>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-white/50 hover:text-red-400 transition-colors p-1 sm:p-2 flex-shrink-0"
                              >
                                <X className="w-4 h-4 sm:w-5 sm:h-5" />
                              </button>
                            </div>
                            <p className="text-white/70 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">{item.description}</p>
                            <div className="flex items-center space-x-2">
                              <span className="text-red-300 text-xs sm:text-sm font-medium">⏱️ {item.duration}</span>
                            </div>
                          </div>
                        </div>

                        {/* Middle Stack: What's Included (starts from left) */}
                        <div className="space-y-2">
                          <h4 className="text-xs sm:text-sm font-semibold text-red-300">What's Included:</h4>
                          <div className="grid grid-cols-1 gap-1 sm:gap-2">
                            {item.features.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                                </div>
                                <span className="text-white/80 text-xs sm:text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Stack: Price */}
                        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/10">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl font-bold text-white">₹{item.price.toLocaleString()}</span>
                            <span className="text-lg text-white/50 line-through">₹{item.originalPrice.toLocaleString()}</span>
                            <span className="text-sm text-green-400 font-medium">Save ₹{(item.originalPrice - item.price).toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
                      <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>
                      
                      {/* Summary Items */}
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-white/70">Subtotal</span>
                          <span className="text-white">₹{subtotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-green-400">Discount</span>
                          <span className="text-green-400">-₹{discount.toLocaleString()}</span>
                        </div>
                        <div className="border-t border-white/10 pt-4">
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold text-white">Total</span>
                            <span className="text-2xl font-bold text-red-300">₹{total.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      {/* Checkout Button */}
                      <button
                        onClick={handleCheckout}
                        disabled={isCheckingOut}
                        className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-4 rounded-full font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-red-500/25 buy-now-shimmer disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isCheckingOut ? (
                          <span className="flex items-center justify-center space-x-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Processing...</span>
                          </span>
                        ) : (
                          <span className="flex items-center justify-center space-x-2">
                            <Sparkles className="w-5 h-5" />
                            <span>Complete Purchase</span>
                            <Sparkles className="w-5 h-5" />
                          </span>
                        )}
                      </button>

                      {/* Security Badge */}
                      <div className="mt-6 text-center">
                        <div className="flex items-center justify-center space-x-2 text-white/50 text-sm">
                          <Shield className="w-4 h-4" />
                          <span>Secure Payment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Cart; 