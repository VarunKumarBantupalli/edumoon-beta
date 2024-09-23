import React from "react";
import socialMediaPlatforms from "../javascript/data/socialmedia";

const SocialMedia = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
    >
      {socialMediaPlatforms.map((platform, index) => (
        <div
          key={index}
          className={`transition-all duration-300 transform ${
            activeIndex === null || activeIndex === index
              ? "opacity-100 scale-105"
              : "opacity-50 blur-sm"
          } ${platform.color} text-white rounded-lg shadow-lg h-64`}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <div className="flex flex-col items-center text-center p-4 h-full justify-between">
            <img
              src={platform.logo}
              alt={`${platform.name} logo`}
              className="w-12 h-12 mb-4"
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
