import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #4a90e2;
  padding: 1rem;
  text-align: center;
  color: white;
`;

const Header = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  
  return (
    <HeaderContainer className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <h1>CBT Companion</h1>
      <nav>
        <a href="#chat" style={{ color: 'white', margin: '0 10px' }}>Chat</a>
        <a href="#techniques" style={{ color: 'white', margin: '0 10px' }}>Techniques</a>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
