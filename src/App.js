import React from 'react';
import Home from './components/home'
import Header from './components/header';
import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
