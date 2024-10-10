import React from 'react';
import icon1 from '../assets/images/trustedby_images/aictelogo.png';
import icon2 from '../assets/images/trustedby_images/aubib.logo.png';
import icon3 from '../assets/images/trustedby_images/auhublogo.png';
import icon4 from '../assets/images/trustedby_images/isologo.png';
import icon5 from '../assets/images/trustedby_images/moelogo.png';
import icon6 from '../assets/images/trustedby_images/msmelogo.png';
import icon7 from '../assets/images/trustedby_images/pontaqlogo.png';
import icon8 from '../assets/images/trustedby_images/startupindialogo.png';

function Trustedby() {
    return (
        <div className="bg-white py-10">
            <h2 className="text-4xl font-bold text-center mb-6 text-[#2C3E50]  p-2">
                <strong>Trusted By</strong>
            </h2>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-around gap-4">
                    <img src={icon1} alt="AICTE Logo" className="w-16 h-16 sm:w-16 sm:h-16 md:w-32 md:h-32 object-contain" />
                    <img src={icon2} alt="AUBIB Logo" className="w-16 h-16 sm:w-16 sm:h-16 md:w-32 md:h-32 object-contain" />
                    <img src={icon3} alt="AU Hub Logo" className="w-16 h-16 sm:w-16 sm:h-16 md:w-32 md:h-32 object-contain" />
                    <img src={icon4} alt="ISO Logo" className="w-16 h-16 sm:w-16 sm:h-16 md:w-32 md:h-32 object-contain" />
                    <img src={icon5} alt="MOE Logo" className="w-16 h-16 sm:w-16 sm:h-16 md:w-32 md:h-32 object-contain" />
                    <img src={icon6} alt="MSME Logo" className="w-16 h-16 sm:w-16 sm:h-16 md:w-32 md:h-32 object-contain" />
                    <img src={icon7} alt="PONTAQ Logo" className="w-16 h-16 sm:w-16 sm:h-16 md:w-32 md:h-32 object-contain" />
                    <img src={icon8} alt="Startup India Logo" className="w-16 h-16 sm:w-16 sm:h-16 md:w-32 md:h-32 object-contain" />
                </div>
            </div>
        </div>
    );
}

export default Trustedby;
