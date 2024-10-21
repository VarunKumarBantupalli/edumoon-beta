



import React from 'react';
import Slider from 'react-slick';
import image1 from '../assets/images/eventcarousel_images/scroll1.jpg';
import image2 from '../assets/images/eventcarousel_images/scroll2.jpg';
import image3 from '../assets/images/eventcarousel_images/scroll3.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Eventcarousel = () => {
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
    <div className="w-full h-[60vh]  bg-cover bg-center bg-no-repeat text-white overflow-hidden">
      <Slider {...settings}>

        <div>
          <img
            src={image1}
            alt="landing2"
            className="w-full  object-cover"
          />
        </div>
        <div>
          <img
            src={image2}
            alt="landing3"
            className="w-full  object-cover"
          />
        </div>
        <div>
          <img
            src={image3}
            alt="landing3"
            className="w-full  object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Eventcarousel;
