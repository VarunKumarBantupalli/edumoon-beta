import React from 'react';

import school from '../assets/images/exploreus_images/school.jpeg';
import highschool from '../assets/images/exploreus_images/highschool.jpeg';
import college from '../assets/images/exploreus_images/college.jpeg';
import hobbies from '../assets/images/exploreus_images/hobbies.jpeg';

function Exploreus() {
    return (
    <>
        <h2 className="text-center text-4xl font-medium title-font text-gray-600 mb-4 py-8">EXPLORE US</h2>
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
      <div className="w-20 h-20 mx-auto flex justify-center items-center bg-blue-500 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="text-white"
          viewBox="0 0 16 16"
        >
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
        </svg>
      </div>
      <h4 className="mt-4 text-lg font-semibold">Fill the Form to Book a Slot</h4>
    </div>

    {/* Second Item */}
    <div className="flex-1 text-center">
      <div className="w-20 h-20 mx-auto flex justify-center items-center bg-blue-500 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="text-white"
          viewBox="0 0 16 16"
        >
          <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
        </svg>
      </div>
      <h4 className="mt-4 text-lg font-semibold">Join LIVE Demo Class</h4>
    </div>

    {/* Third Item */}
    <div className="flex-1 text-center">
      <div className="w-20 h-20 mx-auto flex justify-center items-center bg-blue-500 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="text-white"
          viewBox="0 0 16 16"
        >
          <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
        </svg>
      </div>
      <h4 className="mt-4 text-lg font-semibold">Start the Course</h4>
    </div>
  </div>
</div>

    </>
    );
}

export default Exploreus;
