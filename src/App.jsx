import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Course from './components/Course';
import Aboutus from './components/Aboutus';
import Events from './components/Events';
import Clubs from './components/Clubs';
import Profile from './components/Profile';
import Tutition from './components/Tutition';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Clubs" element={<Clubs />} />
        <Route path="/Tutition" element={<Tutition />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
