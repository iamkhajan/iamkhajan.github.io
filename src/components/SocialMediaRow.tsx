import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const SocialMediaRow: React.FC = () => (
  <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '2rem', marginBottom: '1.5rem' }}>
    <a href="https://www.linkedin.com/in/khajan-pandey-3b515035/" target="_blank" style={{ color: 'white' }}>
      <FaLinkedin />
    </a>
    <a href="https://github.com/iamkhajan" target="_blank" style={{ color: 'white' }}>
      <FaGithub />
    </a>
    <a href="mailto:khajanpandey@outlook.com" style={{ color: 'white' }}>
      <FaEnvelope />
    </a>
  </div>
);

export default SocialMediaRow;
