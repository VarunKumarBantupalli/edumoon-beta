import React from 'react'
import vikas from '../assets/images/lectures_images/ceo.png';
import mahidhar from '../assets/images/lectures_images/cmo.png';
const Founders = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col items-center">
      <div className="flex flex-col text-center w-full mb-10">
          <h1 className="text-4xl font-medium title-font mb-4 text-black">OUR FOUNDERS</h1>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {/* Vikas Kapuganti */}
          <div className="p-8 flex flex-col items-center">
            <img
              className="w-60 h-60 object-cover object-center rounded-full mb-4"
              alt="Vikas Kapuganti"
              src={vikas}
            />
            <h1 className="text-2xl font-medium text-gray-900">Vikas Kapuganti</h1>
            <p className="text-sm text-gray-600 font-medium">Co-Founder & CEO, EduMoon</p>
          </div>

          {/* Ponnada Mahidhar */}
          <div className="p-8 flex flex-col items-center">
            <img
              className="w-60 h-60 object-cover object-center rounded-full mb-4"
              alt="Ponnada Mahidhar"
              src={mahidhar}
            />
            <h1 className="text-2xl font-medium text-gray-900">Ponnada Mahidhar</h1>
            <p className="text-sm text-gray-600 font-medium">Co-Founder & CMO, EduMoon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;