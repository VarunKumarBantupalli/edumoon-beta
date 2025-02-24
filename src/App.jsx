import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './utils/Navbar';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Events from './components/Events';
import Clubs from './components/Clubs';
import Tutition from './components/Tutition';
import Instructor from './components/Instructor';
import Footer from './utils/Footer';
import DemoClass from './components/DemoClass'
import ClubsLeading from './components/ClubsLeading';




function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>     
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/events" element={<Events />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/tution" element={<Tutition />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/democlass" element={<DemoClass />} />
        <Route path="/clubsleading" element={<ClubsLeading />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
