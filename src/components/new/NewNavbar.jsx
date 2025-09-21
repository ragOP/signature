import React from 'react';

const NewNavbar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-yellow-400/30 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center h-16">
        <img
          src="/logoT.png"
          alt="Easy Soul Logo"
          className="h-8 w-auto brightness-0 invert"
        />
      </div>
    </nav>
  );
};

export default NewNavbar;
