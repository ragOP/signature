import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SignatureCTAButton = ({ 
  text = "Get Your Custom Signature", 
  icon = <ArrowRight className="w-6 h-6" />,
  onClick,
  className = "",
  variant = "primary"
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate('/signature-cart-rag');
    }
  };
  const baseClasses = "w-full inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-blue-600 py-4 text-base text-white hover:bg-blue-700 focus:ring-blue-500 shadow-md hover:shadow-lg relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:animate-[shimmer_2s_infinite] before:transition-transform",
    secondary: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500 shadow-sm hover:shadow-md",
    outline: "bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50 focus:ring-blue-500"
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {text}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default SignatureCTAButton;
