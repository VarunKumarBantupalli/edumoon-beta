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
import poster1 from '../assets/images/poster_images/poster1.gif';
import poster3 from '../assets/images/poster_images/poster3.jpg';
import poster4 from '../assets/images/poster_images/poster4.jpg';
import poster5 from '../assets/images/poster_images/poster5.jpg';
import poster6 from '../assets/images/poster_images/poster6.jpg';
import poster7 from '../assets/images/poster_images/poster7.jpg';
import Trustedby from '../utils/Trustedby';
import Clients from './Clients';

function Home() {
  return (
    <>
      <div className="posters h-[30vh] md:h-[40vh] lg:h-[70vh] w-full bg-cover bg-center bg-no-repeat text-white overflow-hidden">
        <div className="flex animate-slide slide-mobile slide-tablet gap-5 m-10 ">
          <img src={poster1} alt="Poster 1" className="w-[80vw] md:w-[60vw] lg:w-[80vw] h-full object-contain" />
          <img src={poster3} alt="Poster 3" className="w-[80vw] md:w-[60vw] lg:w-[80vw] h-full object-contain" />
          <img src={poster4} alt="Poster 4" className="w-[80vw] md:w-[60vw] lg:w-[80vw] h-full object-contain" />
          <img src={poster5} alt="Poster 5" className="w-[80vw] md:w-[60vw] lg:w-[80vw] h-full object-contain" />
          <img src={poster6} alt="Poster 6" className="w-[80vw] md:w-[60vw] lg:w-[80vw] h-full object-contain" />
          <img src={poster7} alt="Poster 7" className="w-[80vw] md:w-[60vw] lg:w-[80vw] h-full object-contain" />
        </div>
      </div>
      <Trustedby />
      <Clients/>
      <Lectures />
      <Workshops />
      <Webinar />
      {/* <Outdooractivites /> */}
      <SocialMedia />
      <Stats />
      <Hiring />
      <Testimonial />
      <Mobileapp />
    </>
  );
}

export default Home;
