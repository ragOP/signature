import React from 'react';

/** Lightweight animated SVG ink stroke – no GIF needed */
const InkStrokeSVG = ({ className = '', width = 280, height = 80 }) => (
  <svg
    className={`si-ink-stroke ${className}`}
    viewBox="0 0 280 80"
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M20 45 Q60 20 100 42 T180 38 T240 50"
      stroke="#D4AF37"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.9"
    />
    <path
      d="M30 55 Q80 35 120 52 T200 48"
      stroke="#D4AF37"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.6"
    />
  </svg>
);

export default InkStrokeSVG;
