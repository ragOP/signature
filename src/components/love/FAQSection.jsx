import React, { useState } from 'react';
import { ChevronDown, Clock, Star, Target, Flame, MessageCircle, CheckCircle } from 'lucide-react';
import CTAButton from './CTAButton';

const FAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        {
            question: "Will I get back with my ex or move on?",
            answer: "Our comprehensive love analysis will reveal the exact probability and timeline of reconciliation or moving forward. We analyze your birth chart compatibility, current planetary positions, and relationship dynamics to give you a clear answer with specific guidance."
        },
        {
            question: "Can this report tell me about my soulmate?",
            answer: "Yes! Our Vedic analysis reveals detailed information about your soulmate's characteristics, when you'll meet them, and the nature of your relationship. We identify the perfect timing and qualities of your destined partner."
        },
        {
            question: "Why do I always face love problems?",
            answer: "We identify the root causes of your love problems through planetary analysis. Whether it's Venus placement, 7th house issues, or karmic patterns, we provide specific remedies and solutions to overcome these obstacles."
        },
        {
            question: "Is it Vedic astrology or numerology?",
            answer: "Our analysis combines both Vedic astrology and numerology for the most accurate results. We use your birth chart, planetary positions, and numerological calculations to provide comprehensive love insights."
        },
        {
            question: "Will I get remedies too?",
            answer: "Absolutely! Every report includes personalized remedies based on your specific planetary positions. These include gemstone recommendations, mantras, rituals, and lifestyle changes to improve your love life."
        }
    ];

    const reminderItems = [
        {
            icon: <Clock className="w-5 h-5 text-blue-500" />,
            text: "Delivered in 48–72 hrs"
        },
        {
            icon: <Star className="w-5 h-5 text-purple-500" />,
            text: "Vedic + Numerology based analysis"
        },
        {
            icon: <Target className="w-5 h-5 text-green-500" />,
            text: "100% personalized (no copy-paste)"
        },
        {
            icon: <Flame className="w-5 h-5 text-red-500" />,
            text: "Only ₹499 (was ₹999)"
        },
        {
            icon: <MessageCircle className="w-5 h-5 text-pink-500" />,
            text: "Get it on WhatsApp + Email"
        }
    ];

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="py-6">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">

                    {/* FAQ Section */}
                    <div className="">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-merriweather">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-lg text-gray-600 font-poppins">
                                Everything you need to know about your love report
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <span className="text-lg font-semibold text-gray-800 font-poppins">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                    {openFAQ === index && (
                                        <div className="px-6 pb-4">
                                            <p className="text-gray-600 font-poppins leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* FAQ CTA */}
                        <div className="text-center mt-8">
                            <CTAButton
                                text="I Want My Love Report"
                                variant="primary"
                                fullWidth={true}
                                showArrow={true}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FAQSection; 