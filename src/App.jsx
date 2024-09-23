import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Events from './components/Events';
import Clubs from './components/Clubs';
import Tutition from './components/Tutition';



function App() {
  return (
    <Router>
      <Routes>     
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/events" element={<Events />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/tution" element={<Tutition />} />
      </Routes>
    </Router>
  );
}

export default App;
