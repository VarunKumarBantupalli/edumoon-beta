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



import Trustedby from '../utils/Trustedby';
import Clients from './Clients';
import LandingPage from './LandingPage';

import ClubsDisplay from './ClubsDisplay';


import "swiper/css";
import PopularCourses from './PopularCourses';

function Home() {
  return (
    <>
      <LandingPage/>
      <Workshops />
      <Webinar />
      <Outdooractivites />
      

      
      <Trustedby />
      <Clients />
      <ClubsDisplay/>

      <PopularCourses/>



      <SocialMedia />
      <Hiring />
      <Stats />
     
      <Testimonial />
      <Mobileapp />
    </>
  );
}

export default Home;
