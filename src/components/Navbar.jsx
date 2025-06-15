import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { MdAudiotrack, MdVideocam } from 'react-icons/md';
import { IoInformationCircle } from 'react-icons/io5';
import { useNavigate, useLocation } from 'react-router-dom';
import useWindowWidth from '../hooks/useWindowWidth';

// You can customize your navigation items here
const navItems = [
  { id: 'nav-home', label: 'Home', value: 'home', icon: FaHome, path: '/' },
  { id: 'nav-audio', label: 'Audio', value: 'audio', icon: MdAudiotrack, path: '/audio' },
  { id: 'nav-video', label: 'Video', value: 'video', icon: MdVideocam, path: '/video' },
  { id: 'nav-about', label: 'About', value: 'about', icon: IoInformationCircle, path: '/about' },
];

// Styles for each item's glider
const itemStyles = {
  home: {
    background: 'linear-gradient(to bottom right, rgba(192, 192, 192, 0.33), #e0e0e0)',
    boxShadow: '0 0 18px rgba(192, 192, 192, 0.5), inset 0 0 10px rgba(255, 255, 255, 0.4)',
  },
  audio: {
    background: 'linear-gradient(to bottom right, rgba(255, 215, 0, 0.33), #ffcc00)',
    boxShadow: '0 0 18px rgba(255, 215, 0, 0.5), inset 0 0 10px rgba(255, 235, 150, 0.4)',
  },
  video: {
    background: 'linear-gradient(to bottom right, rgba(208, 231, 255, 0.33), #a0d8ff)',
    boxShadow: '0 0 18px rgba(160, 216, 255, 0.5), inset 0 0 10px rgba(200, 240, 255, 0.4)',
  },
  about: {
    background: 'linear-gradient(to bottom right, rgba(255, 182, 193, 0.33), #ffb6c1)',
    boxShadow: '0 0 18px rgba(255, 182, 193, 0.5), inset 0 0 10px rgba(255, 192, 203, 0.4)',
  },
};


const GlassNavSelector = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const width = useWindowWidth();
  const isMobile = width < 640;
  const [selectedItem, setSelectedItem] = useState(() => {
    const currentPath = location.pathname;
    const item = navItems.find(item => item.path === currentPath);
    return item ? item.value : navItems[0].value;
  });
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleNavigation = (item) => {
    setSelectedItem(item.value);
    navigate(item.path);
  };

  const selectedIndex = navItems.findIndex((p) => p.value === selectedItem);
  const baseGliderStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 10,
    width: `calc(100% / ${navItems.length})`,
    borderRadius: isMobile ? '0.75rem' : '1rem',
    transition: 'all 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56)',
    transform: `translateX(${selectedIndex * 100}%)`,
  };
  const finalGliderStyle = {
    ...baseGliderStyle,
    ...itemStyles[selectedItem],
  };

  // Responsive fixed navbar style
  const horizontalMargin = isMobile ? 12 : 32;
  const containerStyle = {
    display: 'flex',
    position: 'fixed',
    top: isMobile ? 20 : 20,
    left: '50%',
    transform: 'translateX(-50%)',
    width: isMobile ? `calc(80vw - ${horizontalMargin * 3}px)` : 'fit-content',
    maxWidth: isMobile ? `calc(80vw - ${horizontalMargin * 3}px)` : 'fit-content',
    overflow: 'hidden',
    borderRadius: isMobile ? '1.5rem' : '1.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(12px)',
    boxShadow: 'inset 1px 1px 4px rgba(255, 255, 255, 0.2), inset -1px -1px 6px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.15)',
    zIndex: 1000,
    padding: isMobile ? '0.25rem 0.5rem' : '0',
  };
  const baseLabelStyle = {
    position: 'relative',
    zIndex: 20,
    display: 'flex',
    minWidth: isMobile ? '20%' : '30px',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    padding: isMobile ? '0.5rem 0.5rem' : '0.75rem 1rem',
    fontSize: isMobile ? '16px' : '20px',
    fontWeight: 600,
    letterSpacing: '0.025em',
    color: 'rgb(209, 213, 219)',
    transition: 'color 0.3s ease-in-out',
    userSelect: 'none',
  };

  return (
    <div style={containerStyle}>
      {navItems.map((item) => {
        const isSelected = selectedItem === item.value;
        const isHovered = hoveredItem === item.value;
        const finalLabelStyle = {
          ...baseLabelStyle,
          color: isSelected || isHovered ? '#ffffff' : baseLabelStyle.color,
        };
        return (
          <React.Fragment key={item.id}>
            <input
              type="radio"
              name="nav-item"
              id={item.id}
              value={item.value}
              checked={isSelected}
              onChange={(e) => setSelectedItem(e.target.value)}
              style={{ display: 'none' }}
            />
            <label
              htmlFor={item.id}
              style={finalLabelStyle}
              onMouseEnter={() => setHoveredItem(item.value)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleNavigation(item)}
            >
              <item.icon />
            </label>
          </React.Fragment>
        );
      })}
      <div style={finalGliderStyle}></div>
    </div>
  );
};

export default GlassNavSelector;