import React from 'react';
import icon1 from '../assets/images/client_images/client-1.png';
import icon2 from '../assets/images/client_images/client-2.png'; 
import icon3 from '../assets/images/client_images/client-3.png'; 
import icon4 from '../assets/images/client_images/client-4.png'; 
import icon5 from '../assets/images/client_images/client-5.png'; 
import icon6 from '../assets/images/client_images/client-6.png'; 
import icon7 from '../assets/images/client_images/client-7.png'; 
import icon8 from '../assets/images/client_images/client-8.png'; 
import icon9 from '../assets/images/client_images/client-9.png'; 

function Clients() {
    return (
        <div className="bg-white py-10">
            <h2 className="text-4xl font-bold text-center mb-6 text-white bg-[#2C3E50] p-2 rounded-lg shadow-lg">
                <strong>Our Clients</strong>
            </h2>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-around gap-4">
                    <img src={icon1} alt="Client 1 Logo" className="w-16 h-16 sm:w-16 sm:h-16 md:w-32 md:h-32 object-contain mx-2 transition-transform transform hover:scale-105" />
                    <img src={icon2} alt="Client 2 Logo" className="w-16 h-16 sm:w-16 sm:h-16 md:w-32 md:h-32 object-contain mx-2 transition-transform transform hover:scale-105" />
                    <img src={icon3} alt="Client 3 Logo" className="w-16 h-16 sm:w-16 sm:h-16 md:w-32 md:h-32 object-contain mx-2 transition-transform transform hover:scale-105" />
                    <img src={icon4} alt="Client 4 Logo" className="w-16 h-16 sm:w-16 sm:h-16 md:w-32 md:h-32 object-contain mx-2 transition-transform transform hover:scale-105" />
                    <img src={icon5} alt="Client 5 Logo" className="w-16 h-16 sm:w-16 sm:h-16 md:w-32 md:h-32 object-contain mx-2 transition-transform transform hover:scale-105" />
                    <img src={icon6} alt="Client 6 Logo" className="w-16 h-16 sm:w-16 sm:h-16 md:w-32 md:h-32 object-contain mx-2 transition-transform transform hover:scale-105" />
                    <img src={icon7} alt="Client 7 Logo" className="w-16 h-16 sm:w-16 sm:h-16 md:w-32 md:h-32 object-contain mx-2 transition-transform transform hover:scale-105" />
                    <img src={icon8} alt="Client 8 Logo" className="w-16 h-16 sm:w-16 sm:h-16 md:w-32 md:h-32 object-contain mx-2 transition-transform transform hover:scale-105" />
                    {/* <img src={icon9} alt="Client 9 Logo" className="w-16 h-16 sm:w-16 sm:h-16 md:w-32 md:h-32 object-contain mx-2 transition-transform transform hover:scale-105" /> */}
                </div>
            </div>
        </div>
    );
}

export default Clients;
