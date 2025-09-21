import React, { useState, useEffect } from 'react';
import SignatureCTA from '../signature/SignatureCTA';
import { Check, Clock, Mail, Download, Star, Users, Award, Sparkles, Zap, Shield } from 'lucide-react';
import SignatureCTAButton from './SignatureCTAButton';

const SignatureCardRag = ({ animateElements }) => {
  const features = [
    { icon: Check, text: "3 unique designer signature options", color: "text-green-600" },
    { icon: Download, text: "Signature writing tutorial", color: "text-blue-600" },
    { icon: Download, text: "Practice sheet (PDF format)", color: "text-purple-600" },
    { icon: Clock, text: "Delivered within 24–48 hours via email", color: "text-orange-600" },
  ];

  return (
    <div className={`fresh-card fresh-hover-lift transition-all duration-1000 transform ${animateElements ? "fresh-fade-in" : "opacity-0"
      }`}>
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full px-4 py-2 mb-4">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-semibold text-blue-900">Premium Service</span>
        </div>
        <h2 className="text-2xl sm:text-3xl text-display font-bold text-gray-800 mb-3">
          Upgrade Your Signature. Elevate Your Identity.
        </h2>
        <p className="text-primary text-gray-600 leading-relaxed">
          A handcrafted, custom-designed signature that reflects your style, ambition, and profession.
        </p>
      </div>

      <div className='flex justify-center items-center mb-6'>
        <div className="relative">
          <img src="/signature-hero.webp" alt="signature" className='w-full max-w-sm rounded-xl shadow-lg' />
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className={`flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 fresh-hover-lift
                }`}
            >
              <div className={`p-2 rounded-full bg-white shadow-sm border-2 border-gray-200`}>
                <Icon className={`w-4 h-4 ${feature.color}`} />
              </div>
              <span className="text-secondary text-sm font-medium text-gray-700">{feature.text}</span>
            </div>
          );
        })}
      </div>

      {/* Price and CTA Section */}
      <div className="fresh-card-gradient p-6 rounded-xl">
        <div className="text-center space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-3">
              <span className="text-3xl font-bold text-white">₹589</span>
              <span className="text-lg text-blue-200 line-through">₹1,200</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                51% OFF
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-4 h-4 text-yellow-300" />
              <span className="text-sm text-yellow-200 font-semibold">Only 7 slots available per week</span>
            </div>
          </div>
          <div className="text-blue-100 text-sm">
            — secure yours today!
          </div>
        </div>
      </div>
    </div>
  );
};

const SignatureHeroRag = () => {
  const [animateElements, setAnimateElements] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateElements(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: Users, value: "2,500+", label: "Happy Clients", color: "text-blue-600" },
    { icon: Star, value: "4.9/5", label: "Customer Rating", color: "text-yellow-600" },
    { icon: Award, value: "24hrs", label: "Delivery Time", color: "text-green-600" },
  ];

  return (
    <section className="relative flex items-center justify-center overflow-hidden">
      {/* Hero Content - Structured as requested */}
      <div className={`text-center transition-all duration-1000 transform ${animateElements ? "fresh-fade-in" : "opacity-0"}`}>

        <div className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-xl font-medium">Make your name unforgettable with a designer signature crafted just for you.</span>
          </div>
        </div>

        <div className="relative w-full h-[40vh] max-w-lg mx-auto mb-4">
          <img
            src="/signature-hero.webp"
            alt="Professional Signature Design"
            className="w-full h-full object-cover shadow-lg rounded-2xl"
          />
          {/* 5 Star Rating */}
          <div className="absolute bottom-4 right-8 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-blue-200">
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-blue-900 ml-1">4.9</span>
            </div>
          </div>
        </div>

        <h1 className="text-2xl sm:text-6xl lg:text-7xl text-display font-bold mb-4 mt-6">
          <span className="text-blue-900">Your Signature Isn't Just</span>
          <span className="block fresh-text-gradient text-6xl sm:text-7xl lg:text-8xl mt-2">
            Ink — It's Identity.
          </span>
        </h1>




        {/* 3. Title */}




        {/* 4. Subtitle */}
        {/* <p className="text-primary text-lg text-blue-800 max-w-4xl mx-auto mb-4 px-10">
          Make your name unforgettable with a designer signature crafted just for you.
        </p> */}

        {/* Premium Signature Chip */}
        <div className="flex justify-center mb-4">
          <div className="bg-blue-50 border-2 border-blue-300 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Premium Signature</span>
          </div>
        </div>

        {/* Simple CTA Button */}
        <div className="flex justify-center mb-8 px-12">
          <SignatureCTAButton
            text="Get Your Custom Signature"
          />
        </div>

        <div className="flex justify-center items-start gap-8 mb-8 px-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center flex flex-col items-center px-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-blue-600" />
                  <span className="text-lg font-bold text-blue-900">{stat.value}</span>
                </div>
                <p className="text-sm text-blue-700 leading-tight">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className={`transition-all duration-1000 delay-500 transform ${animateElements ? "fresh-fade-in" : "opacity-0"}`}>
          <div className="fresh-card p-8 bg-white/90 backdrop-blur-sm max-w-2xl mx-auto border-2 border-blue-200">
            <h3 className="text-display text-xl font-semibold text-blue-900 mb-6">Trusted by Professionals</h3>
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="flex -space-x-2">
                {[11, 25, 33, 47, 55].map((img, index) => (
                  <img
                    key={index}
                    src={`https://i.pravatar.cc/32?img=${img}`}
                    alt="Professional"
                    className="w-10 h-10 rounded-full border-2 border-blue-300 shadow-sm hover:scale-110 transition-all duration-300"
                  />
                ))}
              </div>
            </div>
            <p className="text-secondary text-blue-700">
              <span className="font-semibold">2,500+ professionals</span> trust our signatures
            </p>
          </div>
        </div>

        {/* Stats Row */}


        {/* Main CTA Card */}
        {/* <div className={`transition-all duration-1000 delay-300 transform ${animateElements ? "fresh-scale-in" : "opacity-0"}`}>
            <div className="max-w-2xl mx-auto">
              <SignatureCardRag animateElements={animateElements} />
            </div>
          </div> */}


      </div>
    </section>
  );
};

export default SignatureHeroRag;
