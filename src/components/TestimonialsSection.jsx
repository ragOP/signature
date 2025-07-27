import React from 'react';
import PrimaryButton from './PrimaryButton';
import { PhoneCall } from 'lucide-react';

// Data configuration for testimonials
const TESTIMONIALS_DATA = [
  {
    name: 'Riya, Mumbai',
    quote: 'Mujhe laga yeh ek aur generic call hogi, but Mr. X literally explained my past relationship patterns so clearly, I cried. I now know why things happened the way they did.',
    rating: 5
  },
  {
    name: 'Ankur, Delhi',
    quote: 'I had 3 major questions. Career, marriage and peace. I got timelines, clarity, and even a name suggestion. Best ₹1499 I ever spent.',
    rating: 5
  }
];

// Social proof data
const SOCIAL_PROOF_DATA = [
  '500+ satisfied clients across India',
  '98% accuracy rate in predictions',
  'Average rating of 4.9/5 stars'
];

// Reusable UI components
const TestimonialCard = ({ name, quote, rating }) => (
  <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300 hover:bg-white/10">
    <div className="space-y-6">
      {/* Quote */}
      <blockquote className="text-white/90 text-base sm:text-lg leading-relaxed italic font-medium">
        "{quote}"
      </blockquote>

      {/* Name and Rating */}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-white font-bold text-lg">{name}</h4>
          <div className="flex space-x-1 mt-1">
            {[...Array(rating)].map((_, i) => (
              <span key={i} className="text-amber-400 text-lg">⭐</span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="flex items-center space-x-2">
        <div className="flex-1 h-0.5 bg-gradient-to-r from-amber-400 via-purple-400 to-orange-400 rounded-full" />
        <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-pulse" />
      </div>
    </div>
  </div>
);

const SocialProofItem = ({ text }) => (
  <div className="flex items-center justify-center space-x-3">
    <span className="text-amber-400 text-lg sm:text-xl">⭐</span>
    <p className="text-white/90 text-base sm:text-lg font-medium">{text}</p>
  </div>
);

function TestimonialsSection() {
  return (
    <section className="py-6 sm:py-16 bg-gradient-to-b from-black via-slate-900/50 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-white/70 text-sm sm:text-base font-medium">Client Success Stories</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="block text-white">Why People Love This</span>
            </h2>

            <p className="text-lg sm:text-xl text-white/80 font-medium max-w-3xl mx-auto">
              Real stories from real people who transformed their lives
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10 mb-8 sm:mb-12">
            {TESTIMONIALS_DATA.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          <PrimaryButton
            text="Book Your Call"
            icon={
              <PhoneCall className='h-5 w-5' />
            }
            className='mb-6'
          />

          {/* Social Proof */}
          <div className="space-y-3 sm:space-y-6 max-w-4xl mx-auto">
            {SOCIAL_PROOF_DATA.map((item, index) => (
              <SocialProofItem key={index} text={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection; 