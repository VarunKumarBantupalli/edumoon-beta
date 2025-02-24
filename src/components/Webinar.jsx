import React, { useEffect, useState } from 'react';

const Webinar = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Adjust the path to point to the src/webinars_images directory
    const imageImports = import.meta.glob('../assets/images/webinars_images/*.{png,jpg,jpeg,webp}');

    const loadImages = async () => {
      const loadedImages = await Promise.all(
        Object.keys(imageImports).map((key) =>
          imageImports[key]().then((module) => module.default)
        )
      );
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  return (
    <div className="w-full max-w-8xl mx-auto p-20 bg-white shadow-lg rounded-lg m-3">
      <div className="text-center mt-4">
        <p className="text-4xl text-[#2C3E50] font-bold mb-2">WEBINARS</p>
        <p className="text-xl text-gray-700 mb-4 mx-4">
          Learn from individuals who have landed their dream jobs. Discover how they acquired the necessary skills, went through the application and selection process, faced interview questions, and gain insights into their job life.
        </p>
      </div>

      {/* Grid layout for images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4"> {/* Added horizontal padding to the grid */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`webinar-${index}`}
            className="h-64 w-full object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default Webinar;
