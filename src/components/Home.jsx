import React from 'react';
import logo from '../assets/images/socialmedialogos/edumoonlogo.png';
import Testimonial from '../utils/Testimonial';
import Stats from '../utils/Stats';
import SocialMedia from '../utils/SocialMedia';
import Lectures from './Lectures';
import Webinar from './Webinar';
import Workshops from './Workshops';
import Hiring from './Hiring';
import Outdooractivites from './Outdooractivites';
import Mobileapp from './Mobileapp';
import Articles from '../utils/Articles'


import Trustedby from '../utils/Trustedby';
import Clients from './Clients';
import LandingPage from './LandingPage';

import ClubsDisplay from './ClubsDisplay';

import smthg from '../assets/images/other_images/hiring.jpg';

import "swiper/css";
import PopularCourses from './PopularCourses';

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
      <Mobileapp />
    </>
  );
}

export default Home;
