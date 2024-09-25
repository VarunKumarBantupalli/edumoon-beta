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
    <>
      <div className="flex justify-evenly w-full max-w-8xl mx-auto p-8 shadow-lg rounded-lg m-5">
      <div className="w-[70%]  bg-white shadow-lg rounded-lg m-5 p-4">

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

          <a href="https://www.edumoon.in/s/store"><img src={edumoonLogo} alt="EduMoon Logo" className="h-10 mx-4" /> </a>

          </div>
        </div>
      </div>

      <div className="buttons  w-[30%]  p-4 flex flex-col items-center justify-center shadow-black rounded-lg">
        <h1 className='p-5 text-2xl text-[#2C3E50] '><strong>"Transform your Skills"</strong></h1> 
        <h1 className='p-5 text-2xl text-[#2C3E50] '><strong>"Transform your life"</strong></h1> 
 
        <a href="https://www.edumoon.in/s/store">
          <button className='p-3 rounded-xl text-white text-xl  hover:bg-slate-500 bg-[#4CAF50]'>Click Now!</button>
          </a>
        </div>

      </div>
    </>
  );
};

export default Lectures;
