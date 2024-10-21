import React, { useEffect, useState } from 'react';

const ClubsGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Correct the path to point to the src/assets/images/ClubsGallery folder
    const imageImports = import.meta.glob('../assets/images/ClubsGallery/*.{png,jpg,jpeg,webp,svg}'); // Path without backslashes
    
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
    <div className="w-full max-w-8xl mx-auto p-10 bg-white shadow-lg rounded-lg m-3">
      <div className="text-center mt-4">
        <p className="text-4xl text-[#2C3E50] font-bold mb-2">CLUBS</p>
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

export default ClubsGallery;
