import React, { useState } from 'react';
import image1 from './assets/images/other_images/scroll1.png'; // Adjusted paths
import image2 from './assets/images/other_images/scroll2.png';
import image3 from './assets/images/other_images/scroll3.png';

const Top = () => {
  // Array of image imports
  const images = [image1, image2, image3];

  // Current index to keep track of which image is being displayed
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler for moving to the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handler for moving to the previous image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full  flex items-center justify-center overflow-hidden m-0 p-0 bg-transparent"> {/* Set bg-transparent */}
      {/* Carousel Container */}
      <div className="w-full h-full relative overflow-hidden">
        {/* Images */}
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-full object-contain" // Maintain aspect ratio without cropping
        />

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-0 rounded-full focus:outline-none hover:bg-gray-600 transition-colors duration-300"
          aria-label="Previous Image"
        >
          &#10094;
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-0 rounded-full focus:outline-none hover:bg-gray-600 transition-colors duration-300"
          aria-label="Next Image"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Top;
