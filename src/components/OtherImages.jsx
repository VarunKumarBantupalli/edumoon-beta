import React, { useEffect, useState } from 'react';

const OtherImages = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Adjust the path to point to the src/Clubs_images directory
    const imageImports = import.meta.glob('../assets/images/others/*.{png,jpg,jpeg,webp}'); // Added /* to the path

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
    <div className="w-full max-w-8xl mx-auto p-20 bg-white shadow-lg rounded-lg m-3"> {/* Adjusted padding to p-10 */}
      <div className="text-center mt-4">
        <p className="text-4xl text-[#2C3E50] font-bold mb-2">GET YOUR DREAM JOB</p>
        <p className="text-xl text-gray-700 mb-4 mx-4">
        Learn from experts in diverse fields and gain knowledge and inspire from their perspectives on success and world-changing ideas.
        </p>
      </div>

      {/* Grid layout for images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Club Image ${index + 1}`}  // Updated alt text for better accessibility
            className="h-64 w-full object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default OtherImages;
