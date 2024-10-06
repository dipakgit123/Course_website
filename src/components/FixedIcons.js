import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const FixedIcons = () => {
  const iconContainerStyle = {
    position: 'fixed',
    right: '10px',
    bottom: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    zIndex: 1000,
  };

  const iconStyle = {
    display: 'block',
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '50%',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    fontSize: '25px',
    transition: 'background-color 0.3s, color 0.3s',
    color: '#000',
  };

  const iconHoverStyle = (color) => ({
    color: color,
  });

  return (
    <div style={iconContainerStyle}>
      <a href="https://www.facebook.com/people/Fusion-Software-Institute/100088395132564/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" style={{ ...iconStyle, ...iconHoverStyle('#4267B2') }}>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://api.whatsapp.com/send/?phone=7498992609&text=I+am+intersted+in+course+you+provide" target="_blank" rel="noopener noreferrer" style={{ ...iconStyle, ...iconHoverStyle('#25D366') }}>
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a href="https://www.instagram.com/fusion_institute_pune/" target="_blank" rel="noopener noreferrer" style={{ ...iconStyle, ...iconHoverStyle('#E1306C') }}>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.linkedin.com/company/fusion-software-institute-kharadi/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" style={{ ...iconStyle, ...iconHoverStyle('#0077B5') }}>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
};

export default FixedIcons;
