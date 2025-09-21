import React, { useState, useEffect } from 'react';

const CreativeFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const footerElement = document.querySelector('.creative-footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      clearInterval(timer);
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const signatureStats = [
    { label: "Signatures Created", value: "2,500+" },
    { label: "Happy Clients", value: "2,500+" },
    { label: "Countries", value: "45+" },
    { label: "Rating", value: "4.9/5" }
  ];

  return (
    <footer className="creative-footer">
      {/* Floating Signature Preview */}
      <div className="floating-signature">
        <div className="signature-preview">
          <div className="signature-line"></div>
          <div className="signature-line short"></div>
          <div className="signature-line medium"></div>
        </div>
        <div className="signature-label">Live Preview</div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="footer-grid">
          {/* Left Section - Stats */}
          <div className="footer-section">
            <h3 className="footer-title">Trusted Worldwide</h3>
            <div className="stats-grid">
              {signatureStats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Section - CTA */}
          <div className="footer-section center">
            <div className="footer-cta">
              <h3 className="cta-title">Ready to Transform Your Signature?</h3>
              <p className="cta-subtitle">
                Join thousands of professionals who trust our expertise
              </p>
              <button className="footer-cta-button">
                <span>Get Started Now</span>
                <div className="button-shine"></div>
              </button>
            </div>
          </div>

          {/* Right Section - Live Info */}
          <div className="footer-section">
            <div className="live-info">
              <div className="live-indicator">
                <div className="pulse-dot"></div>
                <span>Live Now</span>
              </div>
              <div className="time-display">
                <div className="time-label">Current Time</div>
                <div className="time-value">{formatTime(currentTime)}</div>
              </div>
              <div className="availability">
                <div className="availability-label">Available</div>
                <div className="availability-status">
                  <div className="status-dot online"></div>
                  <span>7 slots remaining</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="logo-section">
              <img src="/logoT.png" alt="Easy Soul" className="footer-logo" />
              <span className="brand-name">Easy Soul</span>
            </div>
            
            <div className="footer-links">
              <a href="#privacy" className="footer-link">Privacy</a>
              <a href="#terms" className="footer-link">Terms</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>

            <div className="copyright">
              © 2024 Easy Soul. Crafting professional identities.
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="footer-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-line line-1"></div>
        <div className="bg-line line-2"></div>
      </div>
    </footer>
  );
};

export default CreativeFooter;
