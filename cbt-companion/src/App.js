import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chat from './components/Chat';
import Techniques from './components/Techniques';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/techniques" element={<Techniques />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
