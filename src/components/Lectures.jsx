import React, { useEffect, useState } from 'react';
import edumoonLogo from '../assets/images/socialmedialogos/edumoonlogo.png';
import youtubeLogo from '../assets/images/socialmedialogos/youtubelogo.png';
import { Link } from 'react-router-dom';

const Lectures = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageImports = import.meta.glob('../assets/images/lectures_images/*.{png,jpg,jpeg,svg}');
    const loadImages = async () => {
      const loadedImages = await Promise.all(
        Object.keys(imageImports).map((key) => imageImports[key]().then((module) => module.default))
      );
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  return (
    <div className="w-full max-w-8xl mx-auto p-4 bg-white shadow-lg rounded-lg m-5">
     
      <div className="w-full overflow-hidden">
        <div className="flex animate-scrollReverse whitespace-nowrap">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`lecture-${index}`}
              className="h-36 mx-2 inline-block" 
            />
          ))}
        </div>
      </div>
      
      
      <div className="text-center mt-4 flex justify-center items-center p-4">
        <p className="text-2xl text-[#2C3E50] font-bold mb-2">We are exclusively available only on</p>
        <div className="flex justify-center items-center">
          <a href={'https://www.youtube.com/@EduMoon'}>  <img src={youtubeLogo} alt="YouTube Logo" className="h-10 mx-4" /> </a>
          <p className="text-2xl font-bold mb-2">&</p> 
          <a href={'https://www.youtube.com/@EduMoon'}>  <img src={edumoonLogo} alt="EduMoon Logo" className="h-10 mx-4" /> </a>

        </div>
      </div>
    </div>
  );
};

export default Lectures;
