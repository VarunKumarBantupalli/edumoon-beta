import React from 'react';

import Testimonial from '../utils/Testimonial';
import Stats from '../utils/Stats';
import Webinar from './Webinar';
import Workshops from './Workshops';
import Articles from '../utils/Articles'
import Trustedby from '../utils/Trustedby';
import LandingPage from './LandingPage';
import smthg from '../assets/images/other_images/hiring.jpg';
import PopularCourses from './PopularCourses';

import "swiper/css";

function Home() {
  return (
    <>
      <LandingPage/>
      <Trustedby />
      <Stats/>
      <Articles/>
      <PopularCourses/>
      <div className=" mx-auto" id="hero">
        
        <img
          className="w-full h-auto object-cover rounded-lg shadow-lg mb-8"
          src={smthg}
          alt="Example"
        />
        </div>
        <Workshops />
      <Webinar />   
      <Testimonial />

    </>
  );
}

export default Home;
