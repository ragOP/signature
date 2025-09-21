import React, { useState, useEffect } from 'react';
import { MessageCircle, Star } from 'lucide-react';
import SignatureImageSlider from '../signature/SignatureImageSlider';
import SignatureTestimonialsSlider from '../signature/SignatureTestimonialsSlider';

const SignatureTestimonialsSectionRag = () => {
    const [animateElements, setAnimateElements] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateElements(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const testimonials = [
        {
            text: "From messy to magnetic. My new signature gets compliments every time!",
            author: "Priya",
            role: "CA",
            rating: 5,
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
        },
        {
            text: "Didn't realize how weak my signature looked until now. Total upgrade!",
            author: "Rahul",
            role: "Founder",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        {
            text: "Best ₹500 I've spent on myself in 2024.",
            author: "Aisha",
            role: "MBA Grad",
            rating: 5,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
        },
        {
            text: "Professional signature that matches my brand perfectly!",
            author: "Sarah",
            role: "Marketing Director",
            rating: 5,
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
        },
        {
            text: "Worth every penny. My confidence has skyrocketed!",
            author: "Michael",
            role: "Software Engineer",
            rating: 5,
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        }
    ];

    const proofImages = [
        {
            src: "/src/components/signature/assets/signature-proof-1.webp",
            alt: "Signature Proof 1",
            beforeLabel: "BEFORE",
            afterLabel: "AFTER"
        },
        {
            src: "/src/components/signature/assets/signature-proof-1.webp",
            alt: "Signature Proof 2",
            beforeLabel: "BEFORE",
            afterLabel: "AFTER"
        },
        {
            src: "/src/components/signature/assets/signature-proof-1.webp",
            alt: "Signature Proof 3",
            beforeLabel: "BEFORE",
            afterLabel: "AFTER"
        },
        {
            src: "/src/components/signature/assets/signature-proof-1.webp",
            alt: "Signature Proof 4",
            beforeLabel: "BEFORE",
            afterLabel: "AFTER"
        },
        {
            src: "/src/components/signature/assets/signature-proof-1.webp",
            alt: "Signature Proof 5",
            beforeLabel: "BEFORE",
            afterLabel: "AFTER"
        }
    ];

    const transformationImages = [
        {
            src: "/signature-1.png",
            alt: "Signature Transformation 1",
            beforeLabel: "BEFORE",
            afterLabel: "AFTER"
        },
        {
            src: "/signature-2.png",
            alt: "Signature Transformation 2",
            beforeLabel: "BEFORE",
            afterLabel: "AFTER"
        },
        {
            src: "/signature-3.png",
            alt: "Signature Transformation 3",
            beforeLabel: "BEFORE",
            afterLabel: "AFTER"
        },
        {
            src: "/signature-4.png",
            alt: "Signature Transformation 4",
            beforeLabel: "BEFORE",
            afterLabel: "AFTER"
        },
        {
            src: "/signature-5.png",
            alt: "Signature Transformation 5",
            beforeLabel: "BEFORE",
            afterLabel: "AFTER"
        },

    ];

    return (
        <section className="py-12 px-4 bg-blue-50">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className={`text-center mb-6 transition-all duration-1000 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-blue-900 mb-4">
                        What Our Customers Say
                    </h2>
                </div>

                {/* Testimonials Slider */}
                <div className="mb-6">
                    <SignatureTestimonialsSlider testimonials={testimonials} showArrows={false} />
                </div>

                {/* Image Slider */}
                <div className={`transition-all duration-1000 delay-500 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}>
                    <SignatureImageSlider images={transformationImages} showArrows={false}  />

                    {/* <SignatureImageSlider images={proofImages} showArrows={false} showDots={true} /> */}
                </div>
            </div>
        </section>
    );
};

export default SignatureTestimonialsSectionRag;
