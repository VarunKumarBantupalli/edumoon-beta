import React from 'react';

import achi1 from '../assets/images/acheivements_images/achi1.jpg';
import achi2 from '../assets/images/acheivements_images/achi2.jpg';
import achi3 from '../assets/images/acheivements_images/achi3.jpg';
import achi4 from '../assets/images/acheivements_images/achi4.jpg';

const Achievements = () => {
  return (
    <section className="bg-gray-300 text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-4xl font-semibold title-font text-gray-600">ACHIEVEMENTS</h1>
        </div>
        <div className="flex flex-wrap justify-center -m-4">
          {/* Achievement 1 */}
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center bg-[#FAFAFA] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="lg:w-2/3 mx-auto text-base font-bold text-[#2C3E50] mb-4">
                "Selected under NIGS by StartupIndia"
              </p>
              <img
                alt="achievement"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover mb-4"
                src={achi1}
              />
              <p className="lg:w-2/3 mx-auto text-sm text-[#2C3E50]">
                Completed and got selected for CHUNAUTI2.0 Challenge conducted by STPI, INDIA under NGIS by STARTUP INDIA among 2300+ registered start-ups.
              </p>
            </div>
          </div>

          {/* Achievement 2 */}
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center bg-[#FAFAFA] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="lg:w-2/3 mx-auto text-base font-bold text-[#2C3E50] mb-4">
                "Top 3 at A-HUB"
              </p>
              <img
                alt="achievement"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover mb-4"
                src={achi2}
              />
              <p className="lg:w-2/3 mx-auto text-sm text-[#2C3E50]">
                Selected as Top 3 Startups at A-HUB and Andhra Pradesh Innovation Society Pitch and Win.
              </p>
            </div>
          </div>

          {/* Achievement 3 */}
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center bg-[#FAFAFA] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="lg:w-2/3 mx-auto text-base font-bold text-[#2C3E50] mb-4">
                "Top 10 at AU"
              </p>
              <img
                alt="achievement"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover mb-4"
                src={achi3}
              />
              <p className="lg:w-2/3 mx-auto text-sm text-[#2C3E50]">
                Selected as Top 10 Startup at Andhra Pradesh State Conclave.
              </p>
            </div>
          </div>

          {/* Achievement 4 */}
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center bg-[#FAFAFA] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="lg:w-2/3 mx-auto text-base font-bold text-[#2C3E50] mb-4">
                "Top 90 Globally"
              </p>
              <img
                alt="achievement"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover mb-4"
                src={achi4}
              />
              <p className="lg:w-2/3 mx-auto text-sm text-[#2C3E50]">
                Selected as Top 3 Startups in Andhra Pradesh and Top 90 Startups Globally in TiE 2022.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
