import React, { useState, useEffect } from 'react';
import StudioNavbar from '../components/signature-studio/StudioNavbar';
import StudioBackground from '../components/signature-studio/StudioBackground';
import StudioHero from '../components/signature-studio/StudioHero';
import StudioFailReasons from '../components/signature-studio/StudioFailReasons';
import StudioBlueprint from '../components/signature-studio/StudioBlueprint';
import StudioWhatYouGet from '../components/signature-studio/StudioWhatYouGet';
import StudioWhyItMatters from '../components/signature-studio/StudioWhyItMatters';
import StudioHowItWorks from '../components/signature-studio/StudioHowItWorks';
import StudioShowcase from '../components/signature-studio/StudioShowcase';
import StudioFinalCTA from '../components/signature-studio/StudioFinalCTA';
import StudioFooter from '../components/signature-studio/StudioFooter';
import '../components/signature-studio/studio.css';

const SignatureStudio = () => {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    document.body.style.background = 'linear-gradient(165deg, #f0fdfa 0%, #ecfeff 50%, #f0f9ff 100%)';
    document.body.style.color = '#1a1a2e';

    const onScroll = () => {
      setShowStickyCta(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => {
      document.body.style.background = '';
      document.body.style.color = '';
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll('.studio-reveal').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) el.classList.add('visible');
      });
    };
    reveal();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible'));
      },
      { threshold: 0.05, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.studio-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="studio-page">
      <StudioBackground />
      <StudioNavbar />
      <StudioHero />
      <StudioFailReasons />
      <StudioBlueprint />
      <StudioWhatYouGet />
      <StudioWhyItMatters />
      <StudioHowItWorks />
      <StudioShowcase />
      <StudioFinalCTA />
      <StudioFooter />

      <div className={`studio-sticky-cta ${showStickyCta ? 'visible' : ''}`}>
        <a href="/signature-cart" className="studio-cta w-full block text-center py-3">
          Create My Signature →
        </a>
      </div>
    </div>
  );
};

export default SignatureStudio;
