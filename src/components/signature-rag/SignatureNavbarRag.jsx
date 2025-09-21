import React from 'react';
import { Link } from 'react-router-dom';
import '../signature/signature-rag-fresh.css';

const SignatureNavbarRag = () => {
  return (
    <nav className="bg-blue-600/20 backdrop-blur-sm border-b border-blue-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 sm:h-20">
          <img
            src="/logoT.png"
            alt="Easy Soul Logo"
            className="w-32 h-13 object-cover"
          />
        </div>
      </div>
    </nav>
  );
};

export default SignatureNavbarRag;
