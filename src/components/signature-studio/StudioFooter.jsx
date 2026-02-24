import React from 'react';

const StudioFooter = () => {
  return (
    <footer className="border-t border-[rgba(108,99,255,0.1)] py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#64748b]">
          Signature Studio • Support: <a href="mailto:support@signaturepro.com" className="text-[#2EC4B6] hover:underline">support@signaturepro.com</a>
        </p>
        <p className="text-xs text-[#94a3b8]">
          © 2026 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default StudioFooter;
