import React, { useState, useEffect, useRef } from 'react';

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const timeoutRef = useRef(null);

  // Auto-advance every 3 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  // Swipe handling
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) {
      // swipe left
      setCurrent((prev) => (prev + 1) % images.length);
    } else if (distance < -50) {
      // swipe right
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Styling similar to navbar
  const frameStyle = {
    width: '100%',
    maxWidth: 600,
    margin: '48px auto 0 auto',
    borderRadius: '1.5rem',
    background: 'rgba(255,255,255,0.10)',
    boxShadow: 'inset 1px 1px 4px rgba(255,255,255,0.2), inset -1px -1px 6px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.15)',
    overflow: 'hidden',
    position: 'relative',
    backdropFilter: 'blur(12px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: '16/7',
  };
  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.5s',
    borderRadius: '1.5rem',
    userSelect: 'none',
    pointerEvents: 'none',
  };
  const dotsStyle = {
    position: 'absolute',
    bottom: 16,
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: 8,
  };
  const dotStyle = (active) => ({
    width: 10,
    height: 10,
    borderRadius: '50%',
    background: active ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)',
    border: '1.5px solid rgba(255,255,255,0.7)',
    transition: 'background 0.3s',
    cursor: 'pointer',
  });

  return (
    <div
      style={frameStyle}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={images[current]}
        alt={`carousel-${current}`}
        style={imgStyle}
        draggable={false}
      />
      <div style={dotsStyle}>
        {images.map((_, idx) => (
          <div
            key={idx}
            style={dotStyle(idx === current)}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel; 