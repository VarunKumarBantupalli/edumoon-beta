import React, { useEffect, useState } from 'react';

const Workshops = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imageImports = import.meta.glob('../assets/images/workshop_images/*.{png,jpg,jpeg,webp}');
    const loadImages = async () => {
      const loadedImages = await Promise.all(
        Object.keys(imageImports).map((key) => imageImports[key]().then((module) => module.default))
      );
      setImages(loadedImages);
    };

    loadImages();
  }, []);

  return (
    <div className="w-full max-w-8xl mx-auto p-4 bg-white shadow-lg rounded-lg m-3">
      <div className="text-center mt-4 flex justify-center items-center p-4">
        <p className="text-2xl text-[#2C3E50] font-bold mb-2">The WorkShops we conducted !!!</p>
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`workshop-${index}`}
              className="h-36 mx-2 inline-block"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workshops;
