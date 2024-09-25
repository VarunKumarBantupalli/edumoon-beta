import React from 'react';
import icon1 from '../assets/images/trustedby_images/aictelogo.png';
import icon2 from '../assets/images/trustedby_images/aubib.logo.png';
import icon3 from '../assets/images/trustedby_images/auhublogo.png';
import icon4 from '../assets/images/trustedby_images/isologo.png';
import icon5 from '../assets/images/trustedby_images/moelogo.png';
import icon6 from '../assets/images/trustedby_images/msmelogo.png';
import icon7 from '../assets/images/trustedby_images/pontaqlogo.png';
import icon8 from '../assets/images/trustedby_images/startupindialogo.png';
import icon9 from '../assets/images/trustedby_images/stpilogo.png';

function Trustedby() {
    return (
        <div className="bg-white py-10">
            <h2 className="text-4xl font-bold text-center mb-6 bg-[#2C3E50] p-2"><strong>Trusted By</strong></h2>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <img src={icon1} alt="AICTE Logo" className="w-full h-auto object-contain p-4" />
                    <img src={icon2} alt="AUBIB Logo" className="w-full h-auto object-contain p-4" />
                    <img src={icon3} alt="AU Hub Logo" className="w-full h-auto object-contain p-4" />
                    <img src={icon4} alt="ISO Logo" className="w-full h-auto object-contain p-4" />
                    <img src={icon5} alt="MOE Logo" className="w-full h-auto object-contain p-4" />
                    <img src={icon6} alt="MSME Logo" className="w-full h-auto object-contain p-4" />
                    <img src={icon7} alt="PONTAQ Logo" className="w-full h-auto object-contain p-4" />
                    <img src={icon8} alt="Startup India Logo" className="w-full h-auto object-contain p-4" />
                    {/* <img src={icon9} alt="STPI Logo" className="w-full h-auto object-contain p-4" /> */}
                </div>
            </div>
        </div>
    );
}

export default Trustedby;
