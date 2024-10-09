import React from 'react';
import smthg from '../assets/images/other_images/hiring.jpg';

function Hiring() {
  return (
    <section className="relative pt-16 bg-gray-50">
      <div className="container mx-auto" id="hero">
        {/* Image */}
        <img
          className="w-full h-auto object-cover rounded-lg shadow-lg mb-8"
          src={smthg}
          alt="Example"
        />

        {/* Buttons below the image */}
        <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
          <a href="https://theedumoon.com/become%20a%20tutor%20(2).html">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 md:px-6 rounded-lg shadow-md transition-all duration-300 text-sm md:text-base">
              Become an Instructor
            </button>
          </a>
          <a href="https://theedumoon.com/become%20a%20tutor%20(2).html">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 md:px-6 rounded-lg shadow-md transition-all duration-300 text-sm md:text-base">
              Find a Personal Mentor
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hiring;
