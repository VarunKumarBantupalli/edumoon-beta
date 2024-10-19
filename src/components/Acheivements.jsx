import React from "react";

import achi1 from '../assets/images/acheivements_images/achi1.jpg'
import achi2 from '../assets/images/acheivements_images/achi2.jpg'
import achi3 from '../assets/images/acheivements_images/achi3.jpg'
import achi4 from '../assets/images/acheivements_images/achi4.jpg'

const Achievements = () => {
  return (
    <section className="text-white bg-[#2C3E50] body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-medium title-font mb-4 text-white">ACHIVEMENTS</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-bold whitespace-nowrap">"Selected under NIGS by Startupindia"</p>
            <br></br>
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4"
                src={achi1}
              />
              <p className="lg:w-2/3 mx-auto leading-relaxed text-sm">Completed and gotselected for CHUNAUTI2.0 Challenge conducted by STPI ,INDIA under NGIS by STARTUP INDIA among 2300+ Registered start-ups</p>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-bold">"Top 3 at A-HUB"</p>
            <br></br>
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4"
                src={achi2}
              />
              <p className="lg:w-2/3 mx-auto leading-relaxed text-sm">Selected as Top 3 Startups at A-HUB and Andhra Pradesh InnovationSociety Pitch and Win</p>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-bold">"Top 10 at AU"</p>
            <br></br>
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4"
                src={achi3}
              />
              <p className="lg:w-2/3 mx-auto leading-relaxed text-sm">Selected as Top 10 Startup at Andhra Pradesh State Conclave</p>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-bold">"Top 90 Globally"</p>
            <br></br>
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full h-72 object-cover object-center mb-4"
                src={achi4}
              />
              <p className="lg:w-2/3 mx-auto leading-relaxed text-sm">Selected as Top 3 Startups in Andhra Pradesh and Top 90 Startups Globally in TiE 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;