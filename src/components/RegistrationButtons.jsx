import React from 'react';

function RegistrationButtons() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-8">
      {/* Become an Instructor Button */}
      <a href="#" className="w-2/3 md:w-auto">
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white 
        text-lg md:text-xl mx-auto md:mx-5 font-semibold py-4 md:py-6 px-8 md:px-12 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 w-full md:w-auto">
          Become an Instructor
        </button>
      </a>

      {/* Find a Personal Mentor Button */}
      <a href="#" className="w-2/3 md:w-auto">
        <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white 
        text-lg md:text-xl mx-auto md:mx-5 font-semibold py-4 md:py-6 px-8 md:px-12 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:from-pink-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50 w-full md:w-auto">
          Find a Personal Mentor
        </button>
      </a>
    </div>
  );
}

export default RegistrationButtons;
