import React from 'react';

/** Animated pen/ink stroke paths – lots of motion in the background */
const strokes = [
  { d: 'M 20 80 Q 80 20 140 70 T 260 60', delay: '0s', duration: '4s' },
  { d: 'M 40 120 Q 120 40 200 100 T 280 90', delay: '0.5s', duration: '5s' },
  { d: 'M 60 40 Q 160 80 220 30', delay: '1s', duration: '3.5s' },
  { d: 'M 280 140 Q 180 100 100 140 T 20 120', delay: '1.2s', duration: '4.5s' },
  { d: 'M 0 200 Q 100 160 200 200 T 320 180', delay: '0.3s', duration: '5.5s' },
  { d: 'M 320 60 Q 240 100 160 50', delay: '0.8s', duration: '4s' },
  { d: 'M 100 260 Q 180 220 260 260', delay: '1.5s', duration: '3s' },
  { d: 'M 50 180 Q 150 220 250 160', delay: '0.2s', duration: '6s' },
  { d: 'M 300 240 Q 200 200 80 240', delay: '2s', duration: '4s' },
  { d: 'M 180 20 Q 220 80 180 140', delay: '0.6s', duration: '3.8s' },
];

const PenStroke = ({ d, delay, duration }) => (
  <path
    className="studio-pen-stroke"
    d={d}
    fill="none"
    stroke="#2EC4B6"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeDasharray="400"
    strokeDashoffset="400"
    style={{
      animation: `studio-draw ${duration} ease-out ${delay} infinite`,
    }}
  />
);

const PenBackground = () => {
  return (
    <div className="studio-pen-bg" aria-hidden>
      <svg className="studio-pen-svg studio-pen-svg-1" viewBox="0 0 320 280" preserveAspectRatio="xMidYMid slice">
        {strokes.slice(0, 4).map((s, i) => (
          <PenStroke key={i} {...s} />
        ))}
      </svg>
      <svg className="studio-pen-svg studio-pen-svg-2" viewBox="0 0 320 280" preserveAspectRatio="xMidYMid slice">
        {strokes.slice(4, 8).map((s, i) => (
          <PenStroke key={i} {...s} />
        ))}
      </svg>
      <svg className="studio-pen-svg studio-pen-svg-3" viewBox="0 0 320 280" preserveAspectRatio="xMidYMid slice">
        {strokes.slice(8, 10).map((s, i) => (
          <PenStroke key={i} {...s} />
        ))}
      </svg>
      <div className="studio-pen-float">
        <svg viewBox="0 0 24 24" className="studio-pen-icon" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        </svg>
      </div>
      <div className="studio-pen-float studio-pen-float-2">
        <svg viewBox="0 0 24 24" className="studio-pen-icon" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        </svg>
      </div>
      <div className="studio-pen-float studio-pen-float-3">
        <svg viewBox="0 0 24 24" className="studio-pen-icon" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
        </svg>
      </div>
    </div>
  );
};

export default PenBackground;
