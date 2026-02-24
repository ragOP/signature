import React, { useEffect, useRef } from 'react';
import PenBackground from './PenBackground';

const StudioBackground = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!blobRef.current) return;
      const y = window.scrollY;
      const blob1 = blobRef.current.querySelector('.studio-blob-1');
      const blob2 = blobRef.current.querySelector('.studio-blob-2');
      if (blob1) blob1.style.transform = `translate(${y * 0.02}px, ${y * 0.01}px)`;
      if (blob2) blob2.style.transform = `translate(${-y * 0.015}px, ${y * 0.02}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div ref={blobRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="studio-blob studio-blob-1" />
        <div className="studio-blob studio-blob-2" />
        <div className="studio-blob studio-blob-3" />
      </div>
      <PenBackground />
    </>
  );
};

export default StudioBackground;
