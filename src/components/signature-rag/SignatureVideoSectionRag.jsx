import React from 'react';

const SignatureVideoSectionRag = () => {
  return (
    <section className="py-8 mb-2 bg-blue-50">
      <div className="max-w-4xl mx-auto relative overflow-hidden">
        <video
          className="w-full object-cover rounded-lg shadow-lg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/signature-video.mp4" type="video/mp4" />
          <source src="/signature-video.webm" type="video/webm" />
        </video>

        {/* Top gradient fade - light theme */}
        <div
          className="absolute top-0 z-50 w-full pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to bottom, #dbeafe, rgba(219,228,238,0.8), rgba(219,228,238,0.3), transparent)',
            height: '4rem'
          }}
        />

        <div
          className="absolute bottom-0 z-50 w-full pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to bottom, transparent, rgba(219,228,238,0.3), rgba(219,228,238,0.8), #dbeafe)',
            height: '4rem',
            marginTop: '-4rem'
          }}
        />
      </div>
    </section>
  );
};

export default SignatureVideoSectionRag;
