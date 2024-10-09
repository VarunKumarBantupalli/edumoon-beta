import React from "react";
import socialMediaPlatforms from "../javascript/data/socialmedia";

const SocialMedia = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  return (
    <div className="gap-10 p-4 flex items-center justify-evenly flex-wrap ">
      {socialMediaPlatforms.map((platform, index) => (
        <div
          key={index}
          className={`transition-all duration-300 transform ${
            activeIndex === null || activeIndex === index
              ? "opacity-100 scale-105"
              : "opacity-50 blur-sm"
          } ${platform.color} text-white shadow-lg w-32 h-32 m-2 flex flex-col items-center justify-center rounded-2xl`}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <img
            src={platform.logo}
            alt={`${platform.name} logo`}
            className="w-16 h-16 mb-4"
          />
          <a
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-white py-2 px-4 rounded-full hover:bg-gray-500"
          >
            {platform.button}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
