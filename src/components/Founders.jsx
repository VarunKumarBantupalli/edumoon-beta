import React from 'react';
import vikas from '../assets/images/lectures_images/ceo.png';
import mahidhar from '../assets/images/lectures_images/cmo.png';

const Founders = () => {
  return (
    <section className="text-gray-600 body-font bg-gray-100">
      <div className="container px-5 py-16 mx-auto flex flex-col items-center">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="text-4xl font-semibold title-font mb-6 text-black">OUR FOUNDERS</h1>
          <p className="lg:w-2/3 mx-auto text-gray-700 text-base">
            Meet the visionaries behind EduMoon, shaping the future of education and technology.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10">
          {/* Vikas Kapuganti */}
          <div className="p-6 flex flex-col items-center text-center shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img
              className="w-56 h-56 object-cover object-center rounded-full mb-4"
              alt="Vikas Kapuganti"
              src={vikas}
            />
            <h2 className="text-2xl font-medium text-gray-900">Vikas Kapuganti</h2>
            <p className="text-sm text-gray-600 font-medium mb-2">Co-Founder & CEO, EduMoon</p>
          </div>

          {/* Ponnada Mahidhar */}
          <div className="p-6 flex flex-col items-center text-center shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img
              className="w-56 h-56 object-cover object-center rounded-full mb-4"
              alt="Ponnada Mahidhar"
              src={mahidhar}
            />
            <h2 className="text-2xl font-medium text-gray-900">Ponnada Mahidhar</h2>
            <p className="text-sm text-gray-600 font-medium mb-2">Co-Founder & CMO, EduMoon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
