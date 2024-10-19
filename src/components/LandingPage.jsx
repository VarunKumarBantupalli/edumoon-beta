import React, { useState } from 'react';
import home1 from '../assets/images/homepage_images/hero1.svg';
import socialMediaPlatforms from '../javascript/data/socialmedia';

function LandingPage() {
  const [showSocialMedia, setShowSocialMedia] = useState(false);

  const toggleSocialMedia = () => {
    setShowSocialMedia(prevState => !prevState);
  };

  return (
    <>
      <div className="home flex flex-col md:flex-row justify-center items-center mt-10 h-auto md:h-[60vh]">

        <div className="right mx-5 mt-10 md:mt-0">
          <img src={home1} alt="Hero" className="w-full md:w-auto border border-b-5" />
        </div>

        <div className="left mx-5 flex justify-center items-center flex-col text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold my-3">
            Largest Interactive Student Community
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold my-3">
            To UpSkill your Career with Experts and a Great Network
          </h2>
          <button
            className="p-3 rounded-xl my-3 text-xl md:text-3xl text-white bg-gradient-to-r from-pink-500 to-orange-500 hover:scale-105 transition-transform duration-300"
            onClick={toggleSocialMedia}
          >
            Join Now
          </button>

          {/* Toggle social media div */}
          {showSocialMedia && (
            <div className=" h-auto w-full md:w-[40vw] p-5 rounded-xl mt-3">
              
              <div className="flex flex-wrap justify-center gap-4 shadow-xl">
                {socialMediaPlatforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.link}
                    className="text-white text-center hover:text-gray-600 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2"
                    />
                    <span className="block text-sm md:text-base">{platform.name}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </>
  );
}

export default LandingPage;
