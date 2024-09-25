import React from "react";
import socialMediaPlatforms from "../javascript/data/socialmedia";

const SocialMedia = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  return (
    <div className="gap-4 p-4 flex items-center justify-center flex-wrap">
      {socialMediaPlatforms.map((platform, index) => (
        <div
          key={index}
          className={`transition-all duration-300 transform ${
            activeIndex === null || activeIndex === index
              ? "opacity-100 scale-105"
              : "opacity-50 blur-sm"
          } ${platform.color} text-white rounded-lg shadow-lg w-64 h-64 m-2`}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <div className="flex flex-col items-center text-center p-4 h-full justify-between">
            <img
              src={platform.logo}
              alt={`${platform.name} logo`}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{platform.name}</h3>
            <p className="text-sm mb-4">{platform.description}</p>
            <a
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-300"
            >
              Join Now
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
