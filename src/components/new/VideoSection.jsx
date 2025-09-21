import React, { useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const VideoSection = () => {
  const videoRef = useRef(null);

  const scrollToVideo = () => {
    const videoSection = document.getElementById('video-section');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="video-section" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See Your Signature Come to Life
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Watch how we transform your ideas into a professional signature that builds trust and commands respect.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-auto"
              poster="/signature-video-poster.jpg"
              controls
            >
              <source src="/signature-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Video Overlay (Optional) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>

          {/* Video Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Step-by-Step Process</h3>
              <p className="text-gray-600">See exactly how we create your signature from concept to completion.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Volume2 className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Quality</h3>
              <p className="text-gray-600">Witness the attention to detail that makes our signatures stand out.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Pause className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Get your signature delivered within 24 hours of approval.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
