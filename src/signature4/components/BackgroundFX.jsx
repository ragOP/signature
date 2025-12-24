import React, { useMemo } from "react";

export default function BackgroundFX() {
  return (
    <>
      <Stars />
      <Aurora />
    </>
  );
}

const Stars = () => {
  const dots = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 65; i++) {
      arr.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
        s: 1 + Math.random() * 2.4,
        o: 0.18 + Math.random() * 0.55,
        d: Math.random() * 6,
      });
    }
    return arr;
  }, []);

  return (
    <div className="stars" aria-hidden="true">
      {dots.map((d, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: `${d.s}px`,
            height: `${d.s}px`,
            opacity: d.o,
            animationDelay: `${d.d}s`,
          }}
        />
      ))}
    </div>
  );
};

const Aurora = () => (
  <div className="aurora" aria-hidden="true">
    <span className="a a1" />
    <span className="a a2" />
    <span className="a a3" />
  </div>
);
