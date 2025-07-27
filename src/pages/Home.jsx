import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import StickyFooter from '../components/StickyFooter';
import LifeDecodedSection from '../components/LifeDecodedSection';
import WhatsIncludedSection from '../components/WhatsIncludedSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';

function Home() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 1024;
    }
    return false;
  });

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  console.log('Current isMobile state:', isMobile);

  return (
    <div className="min-h-screen bg-black selection:bg-amber-500/20 selection:text-white pb-20">
      {/* Navigation */}
      <nav className="relative z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Link to="/home" className="flex items-center space-x-2 sm:space-x-4 hover:opacity-80 transition-opacity">
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-lg sm:text-xl">✨</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl blur opacity-30"></div>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-amber-400 via-orange-400 to-purple-400 bg-clip-text text-transparent">
                  Easy Soul
                </h1>
                <p className="text-xs text-white/50 -mt-1 hidden sm:block">Cosmic Guidance</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/home" className="text-white/70 hover:text-amber-400 transition-all duration-300 font-medium relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/cart" className="text-white/70 hover:text-amber-400 transition-all duration-300 font-medium relative group">
                Cart
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>

            </div>

            {/* Mobile cart button */}
            <Link to="/cart" className="lg:hidden text-white/70 hover:text-amber-400 transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-amber-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">1</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[80vh] flex items-start justify-center overflow-hidden pt-4 sm:pt-12">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

          {/* Floating Elements */}
          {[...Array(20)].map((_, i) => (
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile Layout - Text First, Image Second */}
          <div className="lg:hidden space-y-4">
            {/* Text Content */}
            <div className="text-center space-y-3">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                  <span className="text-white/70 text-xs sm:text-sm font-medium">Premium Astro Consultation</span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                  <span className="block text-white">"Na Pyaar Mil Raha</span>
                  <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-purple-400 bg-clip-text text-transparent pl-4 sm:pl-7">Na Paisa"</span>
                </h1>

                {/* Mobile Image - Show after text */}
                {isMobile && <div className="flex justify-center">
                  <div className="relative group">
                    <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-2 border border-white/20">
                      <img
                        src="/astro-hero.png"
                        alt="Premium Astro Guidance"
                        className="w-full max-w-sm sm:max-w-md rounded-2xl shadow-2xl"
                      />
                    </div>
                  </div>
                </div>}

                <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                  Unlock the secrets of your destiny through ancient wisdom and modern cosmic insights.
                  Transform your life with personalized astrological guidance.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center">
                <button className="group relative bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-amber-500/25 text-sm sm:text-base flex items-center justify-center buy-now-shimmer">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Book Your Call
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-2 sm:pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-400">10K+</div>
                  <div className="text-white/60 text-xs sm:text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400">99%</div>
                  <div className="text-white/60 text-xs sm:text-sm">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-400">24/7</div>
                  <div className="text-white/60 text-xs sm:text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Left-Right Grid */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="text-left space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                  <span className="text-white/70 text-sm font-medium">Premium Astro Consultation</span>
                </div>

                <h1 className="text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="block text-white">"Na Pyaar Mil Raha</span>
                  <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-purple-400 bg-clip-text text-transparent pl-7">Na Paisa"</span>
                </h1>

                <p className="text-xl xl:text-2xl text-white/80 leading-relaxed max-w-2xl">
                  Unlock the secrets of your destiny through ancient wisdom and modern cosmic insights.
                  Transform your life with personalized astrological guidance.
                </p>
              </div>

              <div className="flex gap-6 justify-start">
                <button className="group relative bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-amber-500/25 flex items-center justify-center buy-now-shimmer">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Book Your Call
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">10K+</div>
                  <div className="text-white/60 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">99%</div>
                  <div className="text-white/60 text-sm">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">24/7</div>
                  <div className="text-white/60 text-sm">Support</div>
                </div>
              </div>
            </div>

            {/* Desktop Image - Show on right side */}
            {!isMobile && <div className="flex justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-2 border border-white/20">
                  <img
                    src="/astro-hero.png"
                    alt="Premium Astro Guidance"
                    className="w-full max-w-lg rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-black via-slate-900/50 to-black">
        {/* Animated Background - Matching Hero Section */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

          {/* Floating Elements - Matching Hero Section */}
          {[...Array(20)].map((_, i) => (
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Promo Card */}
          <div className="max-w-5xl mx-auto mb-20 sm:mb-32">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-2xl">
                <div className="text-center space-y-6 sm:space-y-8">
                  <div className="flex justify-center items-center space-x-1 sm:space-x-2 mb-4 sm:mb-6">
                    <div className="text-xl sm:text-2xl animate-bounce">⭐</div>
                    <h2 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-white max-w-lg leading-tight whitespace-nowrap">
                      Dikkat aapme nahi hai, aapke stars mein hai!
                    </h2>
                    <div className="text-xl sm:text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>⭐</div>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-white leading-relaxed">
                      Book a 1-on-1 Consultation with India's Top Astro-Numerology Expert
                    </h3>
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-full px-4 sm:px-6 py-2 sm:py-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                      <span className="text-amber-400 font-semibold tracking-wider uppercase text-xs sm:text-sm">
                        Mr. X - Certified Expert
                      </span>
                    </div>
                    <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                      And finally understand what's been blocking your love, career & destiny through personalized cosmic analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="pt-0 sm:pt-6">
            <div id="services" className="text-center mb-16 sm:mb-20">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-white/70 text-xs sm:text-sm font-medium">Our Premium Services</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-purple-400 bg-clip-text text-transparent">
                    Transform Your Life
                  </span>
                </h2>

                <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                  Choose from our carefully crafted services designed to provide you with the most accurate and personalized cosmic guidance.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Service Card 1 */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-center space-y-4 sm:space-y-6">
                    <div className="text-4xl sm:text-6xl group-hover:scale-110 transition-transform duration-300">📞</div>
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">Live Call</h3>
                      <p className="text-amber-400 font-semibold text-sm sm:text-base">45 mins</p>
                      <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                        Direct consultation with our expert for personalized guidance and immediate answers to your questions.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl p-3 sm:p-4 border border-amber-400/30">
                      <span className="text-white font-semibold text-sm sm:text-base">Personal Consultation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-center space-y-4 sm:space-y-6">
                    <div className="text-4xl sm:text-6xl group-hover:scale-110 transition-transform duration-300">🔮</div>
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">Kundali Reading</h3>
                      <p className="text-purple-400 font-semibold text-sm sm:text-base">Detailed Analysis</p>
                      <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                        Comprehensive birth chart analysis revealing your life's purpose, strengths, and opportunities.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-3 sm:p-4 border border-purple-400/30">
                      <span className="text-white font-semibold text-sm sm:text-base">Birth Chart Study</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Card 3 */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-center space-y-4 sm:space-y-6">
                    <div className="text-4xl sm:text-6xl group-hover:scale-110 transition-transform duration-300">📄</div>
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">Love + Wealth</h3>
                      <p className="text-green-400 font-semibold text-sm sm:text-base">PDF Reports</p>
                      <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                        In-depth reports covering love life, career prospects, and financial opportunities with actionable insights.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-3 sm:p-4 border border-green-400/30">
                      <span className="text-white font-semibold text-sm sm:text-base">Comprehensive Guide</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LifeDecodedSection />

      <TestimonialsSection />

      <WhatsIncludedSection />

      <PricingSection />

      {/* Footer */}
      {/* <footer className="bg-black/60 border-t border-white/10 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-3 sm:space-y-4 col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-xs sm:text-sm">✨</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">
                  Easy Soul
                </h3>
              </div>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Transform your life through ancient wisdom and modern cosmic insights.
              </p>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-white font-semibold text-sm sm:text-base">Services</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-white/60">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Live Consultation</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Kundali Reading</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Love & Wealth Reports</a></li>
              </ul>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-white font-semibold text-sm sm:text-base">Company</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-white/60">
                <li><a href="#" className="hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-white font-semibold text-sm sm:text-base">Connect</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-white/60">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-white/40 text-xs sm:text-sm">
              © 2024 Easy Soul. All rights reserved. | Premium Astro Consultation Services
            </p>
          </div>
        </div>
      </footer> */}

      {/* Sticky Footer - Only on Home */}
      <StickyFooter />
    </div>
  );
}

export default Home; 