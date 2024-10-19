import React from 'react';
import Slider from 'react-slick';
import landing1 from '../assets/images/landing_images/landing1.jpg';
import landing2 from '../assets/images/landing_images/landing2.jpg';
import landing3 from '../assets/images/landing_images/landing3.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ClubsCaurosel = () => {
  const settings = {
    dots: true,  // Show navigation dots
    infinite: true,  // Loop through images infinitely
    speed: 500,  // Transition speed
    slidesToShow: 1,  // Show one image at a time
    slidesToScroll: 1,  // Scroll one image at a time
    arrows: true,  // Show navigation arrows
    autoplay: true,  // Automatically scroll images
    autoplaySpeed: 3000,  // Autoplay speed in milliseconds
    pauseOnHover: true,  // Pause on hover
  };

  return (
    <div className="w-full  bg-cover bg-center bg-no-repeat text-white overflow-hidden">
      <Slider {...settings}>

        <div>
          <img
            src={landing2}
            alt="landing2"
            className="w-full  object-contain"
          />
        </div>
        <div>
          <img
            src={landing3}
            alt="landing3"
            className="w-full  object-contain"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ClubsCaurosel;
