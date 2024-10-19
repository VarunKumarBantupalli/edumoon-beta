import React from 'react';
import { CgProfile } from "react-icons/cg";
import { MdRateReview } from "react-icons/md";
import mainimage from '../assets/images/exploreus_images/democlass.png';
import { FaWpforms } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { GoBook } from "react-icons/go";
import TestimonialforCourses from '../utils/TestimonialforCourses';
import Footer from '../utils/Footer';

function DemoClass() {
    return (
        <>
            <div className="top h-[50vh] w-full md:h-[60vh] my-10">
                
                <img src={mainimage} alt="Main Image" className="w-full h-full object-contain" />
            </div>


            <div className="stats grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center w-full max-w-screen-lg mx-auto px-4">
                <div className="flex flex-col items-center">
                    <div className="cards bg-gradient-to-r from-pink-500 to-orange-500 text-white 
                flex items-center justify-center w-28 h-28 md:w-40 md:h-40 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:from-pink-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50">
                        <CgProfile className='text-3xl md:text-4xl' />
                    </div>
                    <h1 className="text-md md:text-lg mt-4 font-bold">10000+ Students</h1>
                </div>

                <div className="flex flex-col items-center">
                    <div className="cards bg-gradient-to-r from-pink-500 to-orange-500 text-white 
                flex items-center justify-center w-28 h-28 md:w-40 md:h-40 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:from-pink-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50">
                        <MdRateReview className='text-3xl md:text-4xl' />
                    </div>
                    <h1 className="text-md md:text-lg mt-4 font-bold">100+ Reviews</h1>
                </div>

                <div className="flex flex-col items-center">
                    <div className="cards bg-gradient-to-r from-pink-500 to-orange-500 text-white 
                flex items-center justify-center w-28 h-28 md:w-40 md:h-40 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:from-pink-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50">
                        <CgProfile className='text-3xl md:text-4xl' />
                    </div>
                    <h1 className="text-md md:text-lg mt-4 font-bold">50+ Instructors</h1>
                </div>
            </div>

            <div className="flex justify-center mt-8">
                <a href="#">
                    <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-md md:text-lg 
                font-semibold py-3 md:py-5 px-6 md:px-10 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:from-pink-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50  m-10">
                        Book Now
                    </button>
                </a>
            </div>

            <div className="steps grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center w-full max-w-screen-lg mx-auto px-4">
                <div className="flex flex-col items-center">
                    <div className="cards bg-gradient-to-r from-purple-500 to-blue-500 text-white 
                flex items-center justify-center w-28 h-28 md:w-40 md:h-40 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                        <FaWpforms className='text-3xl md:text-4xl' />
                    </div>
                    <h1 className="text-md md:text-lg mt-4 font-bold">Fill the Form</h1>
                </div>

                <div className="flex flex-col items-center">
                    <div className="cards bg-gradient-to-r from-purple-500 to-blue-500 text-white 
                flex items-center justify-center w-28 h-28 md:w-40 md:h-40 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                        <IoCallOutline className='text-3xl md:text-4xl' />
                    </div>
                    <h1 className="text-md md:text-lg mt-4 font-bold">Wait for Our Call</h1>
                </div>

                <div className="flex flex-col items-center">
                    <div className="cards bg-gradient-to-r from-purple-500 to-blue-500 text-white 
                flex items-center justify-center w-28 h-28 md:w-40 md:h-40 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:from-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                        <GoBook className='text-3xl md:text-4xl' />
                    </div>
                    <h1 className="text-md md:text-lg mt-4 font-bold">Start the Course</h1>
                </div>
            </div>

            <TestimonialforCourses />
        
        </>
    );
}

export default DemoClass;
