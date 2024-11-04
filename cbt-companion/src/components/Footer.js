import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
`;

const Footer = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  
  return (
    <FooterContainer className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <p>&copy; 2024 CBT Companion. All rights reserved.</p>
      <p>
        <a href="https://www.mentalhealth.gov" style={{ color: 'lightblue' }}>Mental Health Resources</a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
