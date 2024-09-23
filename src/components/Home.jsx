import React from 'react';
import { Link } from 'react-router-dom';
import Testimonial from '../utils/Testimonial';
import Articles from '../utils/Articles';
import Stats from '../utils/Stats';
import Footer from '../utils/Footer';
import Lectures from './Lectures';
import Webinar from './Webinar';
import Workshops from './Workshops';
import logo from '../assets/images/socialmedialogos/edumoonlogo.png'

import ContactForm from '../utils/ContactForm';


function Home() {
  return (
    <>
      <div
        className="relative h-[100vh] w-[100vw] bg-cover bg-edumoon-gradient3 bg-center bg-no-repeat text-white z-10"
       
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-60 z-0"></div> */}

        {/* Navigation */}
        <div className="relative z-20">
          <nav>
            <div className="icons flex justify-between items-center gap-4 p-6 md:p-10">
              <Link to='/'>
                <div className='hover:text-[#2C3E50] text-xl md:text-5xl'>
                  <strong>Edumoon</strong>
                </div>
              </Link>
              <div className="options flex items-center">
                <a href="https://www.edumoon.in/s/store"
                  className='p-1 md:p-2 font-bold text-sm md:text-xl hover:text-[#4CAF50]'>
                  Courses
                </a>
                <Link to='/aboutus' className='p-2 md:p-5 hover:text-[#4CAF50] font-bold text-sm md:text-xl'>About </Link>
                <Link to='/events' className='p-2 md:p-5 hover:text-[#4CAF50] font-bold text-sm md:text-xl'>Events</Link>
                <Link to='/clubs' className='p-2 md:p-5 hover:text-[#4CAF50] font-bold text-sm md:text-xl'>Clubs</Link>
                <Link to='/tution' className='p-2 md:p-5 hover:text-[#4CAF50] font-bold text-sm md:text-xl'>Tutions</Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col justify-center items-center text-center absolute inset-0 z-10">
        <h1 className='text-lg md:text-4xl m-2 p-5 font-bold'>Edumoon</h1>
          <h1 className='text-2xl md:text-3xl m-2 p-5 font-bold mb-4'>India's Largest Student Community</h1>
          <h1 className='text-xl md:text-2xl m-2 p-5 font-bold mb-2'>Team with Experts and Great Network</h1>
          
        </div>
      </div>

      {/* Content Sections */}
      <ContactForm/>
      <Lectures />
      <Workshops />
      <Webinar />
      <Stats />
      <Articles />
      <Testimonial />
      <Footer />
    </>
  );
}

export default Home;
