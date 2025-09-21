import React, { useState, useEffect } from 'react';
import { CheckCircle, Star, Clock, Award, Shield, Users } from 'lucide-react';
import ShimmerCTA from './ShimmerCTA';

const WhyChooseUsSection = () => {
    const [animateElements, setAnimateElements] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateElements(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);



    const stats = [
        {
            number: "10,000+",
            label: "Happy Clients"
        },
        {
            number: "50,000+",
            label: "Signatures Created"
        },
        {
            number: "99%",
            label: "Satisfaction Rate"
        },
        {
            number: "24hrs",
            label: "Average Delivery"
        }
    ];

    return (
        <section className="py-8" style={{ backgroundColor: '#4cac98' }}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className={`text-center transition-all mb-6 duration-1000 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <h2 className="text-5xl md:text-5xl italic font-bold text-white mb-4">
                        Why Choose <span className="text-yellow-300">Us</span>
                    </h2>
                    <p className="text-xl text-black px-4 max-w-3xl mx-auto">
                        Experience the difference that professional signature design makes
                    </p>
                </div>

                {/* Stats Section */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-300 transform px-4 ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-gray-600 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className={`text-center mt-12 transition-all duration-1000 delay-700 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <p className="text-lg text-white/90 mb-4">
                        Ready to join thousands of satisfied professionals?
                    </p>
                    <div className="flex justify-center px-4">
                        <ShimmerCTA text="Get Started Today" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
