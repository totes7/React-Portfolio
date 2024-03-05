import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <NavTabs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App;
