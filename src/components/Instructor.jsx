import React from 'react';
import mainimage from '../assets/images/exploreus_images/instructor.png';
import { CgProfile } from "react-icons/cg";
import { MdRateReview } from "react-icons/md";
import { BsCurrencyRupee } from "react-icons/bs";
import { stepsData } from '../javascript/data/steps'; // Import steps data

import TestimonialforCourses from '../utils/TestimonialforCourses';

function Instructor() {
    return (
        <>
            <div className="top h-[50vh] w-full md:h-[60vh] my-10">
                <img src={mainimage} alt="Main Image" className="w-full h-full object-contain" />
            </div>

            <div className="stats grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center w-full max-w-screen-lg mx-auto px-4">
                <div className="flex flex-col items-center">
                    <div className="cards bg-gradient-to-r from-green-400 to-cyan-500 text-white 
                        flex items-center justify-center w-28 h-28 md:w-40 md:h-40 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:from-pink-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50">
                        <CgProfile className='text-3xl md:text-4xl' />
                    </div>
                    <h1 className="text-md md:text-lg mt-4 font-bold">10000+ Students</h1>
                </div>

                <div className="flex flex-col items-center">
                    <div className="cards bg-gradient-to-r from-green-400 to-cyan-500 text-white 
                        flex items-center justify-center w-28 h-28 md:w-40 md:h-40 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:from-pink-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50">
                        <MdRateReview className='text-3xl md:text-4xl' />
                    </div>
                    <h1 className="text-md md:text-xl mt-4 font-bold">100+ Reviews</h1>
                </div>

                <div className="flex flex-col items-center">
                    <div className="cards bg-gradient-to-r from-green-400 to-cyan-500 text-white 
                        flex items-center justify-center w-28 h-28 md:w-40 md:h-40 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:from-pink-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50">
                        <CgProfile className='text-3xl md:text-4xl' />
                    </div>
                    <h1 className="text-md md:text-lg mt-4 font-bold">50+ Instructors</h1>
                </div>
            </div>

            <div className="tutor flex flex-col items-center my-[10vh]">
                <h1 className='text-2xl md:text-4xl font-bold text-gray-600'>To become a tutor in our Organization, follow these step-by-step instructions:</h1>
                <div className="c bg-black w-[100vw] h-[5px] my-5"></div>
            </div>

            <div className="steps grid grid-cols-1  gap-6 px-4 max-w-screen-lg mx-auto">
                {stepsData.map(step => (
                    <div key={step.id} className="step bg-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <h2 className="text-2xl font-bold text-white mb-4">{step.heading}</h2>
                        <p className="text-white">{step.content}</p>
                    </div>
                ))}
            </div>

            <div className="benefits flex items-center justify-around my-[10vh]">

                <div className="flex flex-col items-center">
                    <div className="cards bg-gradient-to-r from-green-400 to-cyan-500 text-white 
                        flex items-center justify-center w-28 h-28 md:w-40 md:h-40 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:from-pink-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50">
                        <CgProfile className='text-3xl md:text-4xl' />
                    </div>
                    <h1 className="text-md md:text-lg mt-4 font-bold">Teach Students Online or Offline</h1>
                </div>



                <div className="flex flex-col items-center">
                    <div className="cards bg-gradient-to-r from-green-400 to-cyan-500 text-white 
                        flex items-center justify-center w-28 h-28 md:w-40 md:h-40 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:from-pink-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50">
                        <BsCurrencyRupee className='text-3xl md:text-4xl' />
                    </div>
                    <h1 className="text-md md:text-xl mt-4 font-bold">Start Earning Money</h1>
                </div>

            </div>

            <div className="flex justify-center mt-8">
                <a href="#">
                    <button className="bg-gradient-to-r from-blue-400 to-purple-500 text-white text-md md:text-lg 
                font-semibold py-3 md:py-5 px-6 md:px-10 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg  focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50  m-10">
                        Apply Now
                    </button>
                </a>
            </div>

            <TestimonialforCourses />
        </>
    );
}

export default Instructor;
