import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const footerLinks = [
    { name: 'About us', path: '/about' },
    { name: 'Contact us', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
  ];

  // Inline styles
  const footerStyle = {
    width: '100%',
    background: '#181e29',
    color: '#fff',
    marginTop: 'auto',
    padding: 0,
  };
  const containerStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '20px 40px 0 20px',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '350px',
  };
  const centerTextStyle = {
    textAlign: 'center',
  };
  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 650,
    marginBottom: '0.75rem',
    marginTop: 0,
  };
  const subTextStyle = {
    fontSize: '1.25rem',
    marginBottom: '1rem',
    marginTop: 0,
  };
  const downloadRowStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '32px',
    margin: '40px 0',
  };
  const downloadBtnBase = {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '18px 24px',
    width: '260px',
    background: 'transparent',
    textDecoration: 'none',
    color: '#fff',
    transition: 'border 0.2s, box-shadow 0.2s',
    fontSize: '1rem',
    outline: 'none',
  };
  const downloadBtnGlow = {
    boxShadow: '0 0 8px #fff, 0 0 16px #38bdf8',
    border: '1px solid #38bdf8',
  };
  const downloadImgStyle = {
    width: '32px',
    height: '32px',
    objectFit: 'contain',
  };
  const downloadTextStyle = {
    marginLeft: '12px',
    textAlign: 'left',
  };
  const downloadOnStyle = {
    fontSize: '0.8rem',
    color: '#d1d5db',
    margin: 0,
  };
  const downloadStoreBase = {
    fontSize: '1.1rem',
    fontWeight: 500,
    margin: 0,
    transition: 'text-shadow 0.2s',
  };
  const downloadStoreGlow = {
    textShadow: '0 0 8px #fff, 0 0 16px #38bdf8',
  };
  const bottomRowStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1rem',
    color: '#bcbcbc',
    borderTop: '1px solid #23283a',
    padding: '32px 0 0 0',
  };
  const linksRowStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  };
  const linkStyle = {
    color: '#bcbcbc',
    textDecoration: 'none',
    padding: '0 12px',
    transition: 'color 0.2s',
    fontSize: '1rem',
  };
  const linkActiveStyle = {
    color: '#fff',
  };
  const borderLeftStyle = {
    borderLeft: '1px solid #bcbcbc',
    height: '18px',
    margin: '0 8px',
  };

  // Hover state for both buttons
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={centerTextStyle}>
          <h2 style={headingStyle}>World of Web-Experiments</h2>
          <p style={subTextStyle}>Learn. Lelearn. Teach.</p>
          <div style={downloadRowStyle}>
            <a
              href="#"
              style={{
                ...downloadBtnBase,
                ...(hoveredBtn === 'google' ? downloadBtnGlow : {}),
              }}
              onMouseEnter={() => setHoveredBtn('google')}
              onMouseLeave={() => setHoveredBtn(null)}
              tabIndex={0}
              onFocus={() => setHoveredBtn('google')}
              onBlur={() => setHoveredBtn(null)}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                style={downloadImgStyle}
                alt="Google Play Store"
              />
              <div style={downloadTextStyle}>
                <p style={downloadOnStyle}>Download on</p>
                <p style={{
                  ...downloadStoreBase,
                  ...(hoveredBtn === 'google' ? downloadStoreGlow : {}),
                }}>Google Play Store</p>
              </div>
            </a>
            <a
              href="#"
              style={{
                ...downloadBtnBase,
                ...(hoveredBtn === 'apple' ? downloadBtnGlow : {}),
              }}
              onMouseEnter={() => setHoveredBtn('apple')}
              onMouseLeave={() => setHoveredBtn(null)}
              tabIndex={0}
              onFocus={() => setHoveredBtn('apple')}
              onBlur={() => setHoveredBtn(null)}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                style={downloadImgStyle}
                alt="Apple Store"
              />
              <div style={downloadTextStyle}>
                <p style={downloadOnStyle}>Download on</p>
                <p style={{
                  ...downloadStoreBase,
                  ...(hoveredBtn === 'apple' ? downloadStoreGlow : {}),
                }}>Apple Store</p>
              </div>
            </a>
          </div>
        </div>
        <div style={bottomRowStyle}>
          <p style={{margin: 0}}>&copy; Beautiful Footer, 2021.</p>
          <div style={linksRowStyle}>
            {footerLinks.map((link, idx) => (
              <React.Fragment key={link.name}>
                {idx !== 0 && <span style={borderLeftStyle}></span>}
                <Link
                  to={link.path}
                  style={location.pathname === link.path ? {...linkStyle, ...linkActiveStyle} : linkStyle}
                >
                  {link.name}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
