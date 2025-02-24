import React, { useEffect, useState } from 'react';
import edumoonLogo from '../assets/images/socialmedialogos/edumoonlogo.png';
import { Link } from 'react-router-dom';

const ClubsDisplay = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageImports = import.meta.glob('../assets/images/clubs_images/*.{png,jpg,jpeg,svg}');
    const loadImages = async () => {
      const loadedImages = await Promise.all(
        Object.keys(imageImports).map((key) => imageImports[key]().then((module) => module.default))
      );
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-evenly w-full max-w-7xl mx-auto p-4 lg:p-8 shadow-lg rounded-lg m-5">
        {/* Left section with scrolling images */}
        <div className="w-full lg:w-[70%] bg-white shadow-lg rounded-lg p-4">
          <div className="w-full overflow-hidden">
            <div className="flex animate-scrollReverse whitespace-nowrap">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`lecture-${index}`}
                  className="h-24 md:h-36 lg:h-48 mx-2 inline-block" // Responsive height for images
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-4 flex flex-col items-center p-4">
            <p className="text-lg md:text-2xl text-[#2C3E50] font-bold mb-2">
              All these clubs exclusively offered only offered by 
            </p>
            <div className="flex justify-center items-center">


              <a href="https://www.edumoon.in/s/store">
                <img src={edumoonLogo} alt="EduMoon Logo" className="h-12 md:h-24 mx-2 md:mx-4" /> {/* Responsive logo size */}
              </a>
            </div>
          </div>
        </div>

        {/* Right section with buttons */}
        <div className="w-full lg:w-[30%] mt-6 lg:mt-0 flex flex-col items-center justify-center shadow-black rounded-lg p-4">
          <h1 className="text-xl md:text-2xl text-center text-[#2C3E50] font-semibold mb-4">
          "Unlock your potential with our exclusive clubs, designed to inspire learning and creativity. Join us and connect with a thriving community of learners!"
          </h1>

          <Link to='/clubsleading'>
            <button className="w-full max-w-xs p-3 rounded-xl text-white font-bold text-lg md:text-xl bg-gradient-to-r from-teal-400 to-green-400  hover:bg-slate-500">
              Enroll Now!!
            </button>
            </Link>
        </div>
      </div>
    </>
  );
};

export default ClubsDisplay;



// bg-[#4CAF50]
