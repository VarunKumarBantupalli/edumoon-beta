import React from 'react';
import Slider from 'react-slick';
import articles from '../javascript/data/articles'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Articles = () => {
  const settings = {
    dots: true,  // Show navigation dots for easy access
    infinite: true,  // Infinite loop sliding
    speed: 600,  // Transition speed
    slidesToShow: 3,  // Number of articles to show in view
    slidesToScroll: 1,  // Scroll one article at a time
    arrows: true,  // Display navigation arrows
    responsive: [
      {
        breakpoint: 1024,  // Tablet view
        settings: {
          slidesToShow: 2,  // Show 2 articles at a time
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,  // Mobile view
        settings: {
          slidesToShow: 1,  // Show 1 article at a time
          slidesToScroll: 1,
          dots: true,
          arrows: false,  // Hide arrows for a cleaner mobile experience
          swipe: true,  // Enable swipe navigation
        },
      },
    ],
  };

  return (
    <div className="relative w-full bg-white">
      <h1 className="text-3xl font-bold text-center text-[#2C3E50] py-6">
        What Top Publishers of India Wrote About Us
      </h1>

      <Slider {...settings} className="py-6">
        {articles.map((article, index) => (
          <a 
            key={index} 
            href={article.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-white shadow-lg rounded-lg mx-4 cursor-pointer transform transition-transform hover:scale-105"
          >
            <div className="relative w-full h-60 object-contain rounded-t-lg">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2 text-[#2C3E50]">
                {article.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3">
                {article.content}
              </p>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default Articles;
