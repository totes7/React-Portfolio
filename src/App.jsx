import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavTabs from './components/NavTabs';

function App() {
  return (
    <Router>
      <NavTabs />
    </Router>
  )
}

export default App
