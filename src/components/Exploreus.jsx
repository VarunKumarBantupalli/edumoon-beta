import React from 'react';

import school from '../assets/images/exploreus_images/school.jpeg';
import highschool from '../assets/images/exploreus_images/highschool.jpeg';
import college from '../assets/images/exploreus_images/college.jpeg';
import hobbies from '../assets/images/exploreus_images/hobbies.jpeg';


import { PiNumberSquareOneBold } from "react-icons/pi";
import { PiNumberSquareTwo } from "react-icons/pi";
import { PiNumberSquareThreeBold } from "react-icons/pi";

import smthg from '../assets/images/other_images/hiring.jpg';


function Exploreus() {
  return (
    <>
      <div className=" mx-auto" id="hero">
        {/* Image */}
        <img
          className="w-full h-auto object-cover rounded-lg shadow-lg mb-8"
          src={smthg}
          alt="Example"
        />
        </div>


      <h2 className="text-center text-4xl font-medium title-font text-gray-600 mb-4 py-8">
        Explore our Mentorships in</h2>
      <div className=" border-gray-300 my-4"></div>

      <div className="container mx-auto py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a href="#" className="image-link">
            <img
              src={school}
              alt="Image 1"
              className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-md"
            />
            <div className="text-center mt-2 text-lg font-medium">SCHOOLING</div>
          </a>
          <a href="#" className="image-link">
            <img
              src={highschool}
              alt="Image 2"
              className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-md"
            />
            <div className="text-center mt-2 text-lg font-medium">INTERMEDIATE</div>
          </a>
          <a href="#" className="image-link">
            <img
              src={college}
              alt="Image 3"
              className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-md"
            />
            <div className="text-center mt-2 text-lg font-medium">ENGINEERING</div>
          </a>
          <a href="#" className="image-link">
            <img
              src={hobbies}
              alt="Image 4"
              className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover rounded-md"
            />
            <div className="text-center mt-2 text-lg font-medium">HOBBIES</div>
          </a>
        </div>
      </div>

      <div className="py-12">
        <h2 className="text-center text-4xl font-medium title-font text-gray-600  mb-10">
          Steps to Connect With Your Personal Mentor
        </h2>
        <div className="my-4"></div>


        <div className="flex flex-col md:flex-row justify-center gap-6">
      {/* First Item */}
      <div className="flex-1 text-center">
        <div className="w-28 h-28 mx-auto flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-md transition-transform transform hover:scale-105">
          <PiNumberSquareOneBold className="text-white text-6xl" />
        </div>
        <h4 className="mt-4 text-xl font-semibold">Fill the Form to Book a Slot</h4>
      </div>

      {/* Second Item */}
      <div className="flex-1 text-center">
        <div className="w-28 h-28 mx-auto flex justify-center items-center bg-gradient-to-r from-pink-500 to-orange-500 rounded-full shadow-md transition-transform transform hover:scale-105">
          <PiNumberSquareTwo className="text-white text-6xl font-bold" />
        </div>
        <h4 className="mt-4 text-xl font-semibold">Join LIVE Demo Class</h4>
      </div>

      {/* Third Item */}
      <div className="flex-1 text-center">
        <div className="w-28 h-28 mx-auto flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-md transition-transform transform hover:scale-105">
          <PiNumberSquareThreeBold className="text-white text-6xl" />
        </div>
        <h4 className="mt-4 text-xl font-semibold">Start the Course</h4>
      </div>
    </div>



      </div>

    </>
  );
}

export default Exploreus;
