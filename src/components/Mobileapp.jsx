import React from 'react';
import logo from '../assets/images/socialmedialogos/edumoonlogo.png';
import applestorelogo from '../assets/images/socialmedialogos/apple.store.png';
import playstorelogo from '../assets/images/socialmedialogos/playstore_latest.png';
import mobile from '../assets/images/socialmedialogos/app.png';

function Mobileapp() {
    return (
        <div className="flex flex-col md:flex-row w-full h-auto bg-neutral-300 p-5 md:p-10">
            <div className="flex flex-col items-center justify-center md:w-1/2 p-5">
                <img className="h-auto max-w-[40vh] rounded-2xl " src={mobile} alt="Mobile App" />
            </div>
            <div className="flex flex-col items-center justify-center md:w-1/2 p-5">
                <h1 className="text-[#2C3E50] font-bold text-lg md:text-xl text-center">
                    <strong>Download our Mobile Application</strong>
                </h1>
                <h1 className="text-[#2C3E50] font-bold text-lg md:text-xl text-center">
                    <strong>Available in App Store and Play Store</strong>
                </h1>
                <div className="flex flex-col items-center">
                    <a href="https://play.google.com/store/apps/details?id=com.edumoon.learners" className="m-2">
                        <img className="h-12 md:h-16 rounded-xl" src={applestorelogo} alt="App Store" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.edumoon.learners" className="m-2">
                        <img className="h-12 md:h-16 rounded-xl" src={playstorelogo} alt="Play Store" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Mobileapp;
