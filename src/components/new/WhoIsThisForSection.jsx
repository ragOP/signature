import React, { useState, useEffect } from 'react';
import { Briefcase, GraduationCap, Stethoscope, Scale, Building2, Users } from 'lucide-react';
import ShimmerCTA from './ShimmerCTA';

const WhoIsThisForSection = () => {
    const [animateElements, setAnimateElements] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateElements(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const targetAudiences = [
        {
            icon: <Briefcase className="w-8 h-8 text-blue-500" />,
            title: "Business Executives",
            description: "CEOs, managers, and business leaders who need a signature that commands respect and builds trust."
        },
        {
            icon: <Scale className="w-8 h-8 text-purple-500" />,
            title: "Legal Professionals",
            description: "Lawyers, attorneys, and legal consultants who require professional signatures for contracts and documents."
        },
        {
            icon: <Stethoscope className="w-8 h-8 text-green-500" />,
            title: "Medical Professionals",
            description: "Doctors, physicians, and healthcare providers who need authoritative signatures for patient care."
        },
        {
            icon: <Building2 className="w-8 h-8 text-orange-500" />,
            title: "Real Estate Agents",
            description: "Agents and brokers who need professional signatures for property transactions and client communications."
        },
        {
            icon: <GraduationCap className="w-8 h-8 text-red-500" />,
            title: "Educators & Consultants",
            description: "Teachers, professors, and consultants who want to establish credibility in their professional communications."
        },
        {
            icon: <Users className="w-8 h-8 text-teal-500" />,
            title: "Entrepreneurs",
            description: "Startup founders and business owners who need a signature that reflects their brand and professionalism."
        }
    ];

    return (
        <section className="py-8" style={{ backgroundColor: '#6bc3af' }}>
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className={`text-center mb-8 transition-all duration-1000 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <h2 className="text-5xl md:text-4xl italic font-bold text-white mb-3">
                        Who Is This <span className="text-yellow-300">For?</span>
                    </h2>
                    <p className="text-lg text-black max-w-2xl mx-auto">
                        Perfect for professionals who want to make a lasting impression
                    </p>
                </div>

                {/* Target Audiences Grid */}
                <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 transition-all duration-1000 delay-300 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    {targetAudiences.map((audience, index) => (
                        <div
                            key={index}
                            className="text-center bg-white rounded-lg p-4 shadow-md border border-gray-200"
                        >
                            <div className="flex justify-center mb-3">
                                {audience.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {audience.title}
                            </h3>
                            {/* <p className="text-gray-600 text-sm leading-relaxed">
                                {audience.description}
                            </p> */}
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className={`text-center transition-all duration-1000 delay-500 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                    <p className="text-lg text-white/90 mb-4">
                        Ready to elevate your professional image?
                    </p>
                    <div className="flex justify-center px-4">
                        <ShimmerCTA text="Get Your Signature" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoIsThisForSection;
