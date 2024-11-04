import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styled from 'styled-components';

const ToggleButton = styled.button`
  margin: 1rem;
  padding: 0.5rem 1rem;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #357ab8;
  }
`;

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <ToggleButton onClick={toggleTheme}>
      Switch to {isDarkTheme ? 'Light' : 'Dark'} Theme
    </ToggleButton>
  );
};

export default ThemeToggle;
