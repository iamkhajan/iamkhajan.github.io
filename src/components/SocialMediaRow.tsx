import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaYoutube } from 'react-icons/fa';

const iconStyle: React.CSSProperties = {
  color: '#9A9FB0',
  display: 'flex',
  alignItems: 'center',
};

const SocialMediaRow: React.FC = () => (
  <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', fontSize: '1.6rem', marginBottom: '1.5rem' }}>
    <a href="https://www.linkedin.com/in/khajan-pandey-3b515035/" target="_blank" rel="noreferrer" style={iconStyle} aria-label="LinkedIn">
      <FaLinkedin />
    </a>
    <a href="https://github.com/iamkhajan" target="_blank" rel="noreferrer" style={iconStyle} aria-label="GitHub">
      <FaGithub />
    </a>
    <a href="https://www.youtube.com/@Khajan.Pandey" target="_blank" rel="noreferrer" style={iconStyle} aria-label="YouTube">
      <FaYoutube />
    </a>
    <a href="mailto:hola@khajanpandey.com" style={iconStyle} aria-label="Email">
      <FaEnvelope />
    </a>
  </div>
);

export default SocialMediaRow;
