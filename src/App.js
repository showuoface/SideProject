import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Homepage from './page/homepage';
import SearchPage from './page/search';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
