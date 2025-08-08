import React from 'react';

const SignatureVideoSection = () => {
  return (
    <section className="py-4 mb-2">
      <div className="max-w-4xl mx-auto relative overflow-hidden">
        <video
          className="w-full  object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/signature-video.mp4" type="video/mp4" />
          <source src="/signature-video.webm" type="video/webm" />
        </video>


        {/* Top gradient fade */}
        <div
          className="absolute top-0 z-50 w-full pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #fff, rgba(255,255,255,0.8), rgba(255,255,255,0.3), transparent)',
            height: '4rem'
          }}
        />

        <div
          className="absolute bottom-0 z-50 w-full pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), rgba(255,255,255,0.8), #fff)',
            height: '4rem',
            marginTop: '-4rem'
          }}
        />
      </div>
    </section>
  );
};

export default SignatureVideoSection; 