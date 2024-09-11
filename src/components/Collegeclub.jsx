import React from 'react';

// Import images
import auImage from '../assets/images/other_images/au.png';
import auWomenImage from '../assets/images/other_images/au.png';
import sanketikaImage from '../assets/images/other_images/sankethika.png';
import stJosephImage from '../assets/images/other_images/st.png';
import mahathiImage from '../assets/images/other_images/mahathi.png';
import centurionImage from '../assets/images/other_images/centurion.png';
import bitsImage from '../assets/images/other_images/bits.png';
import anitsImage from '../assets/images/other_images/au.png';
import chaitanyaImage from '../assets/images/other_images/chaitanya.png';
import pydahImage from '../assets/images/other_images/Pydah.png';
import bullayaImage from '../assets/images/other_images/bullaya.png';
import gitamImage from '../assets/images/other_images/gitam.png';

const CollegeClub = () => {
  const colleges = [
    {
      name: 'Andhra University',
      link: 'https://theedumoon.com/sny',
      image: auImage,
    },
    {
      name: 'Andhra University for Women',
      link: 'https://theedumoon.com/au%20women.html',
      image: auWomenImage,
    },
    {
      name: 'Sanketika Vidya Parishad',
      link: 'https://theedumoon.com/skp1%20(1).html',
      image: sanketikaImage,
    },
    {
      name: 'ST. Joseph College for Women',
      link: 'https://theedumoon.com/stjoseph',
      image: stJosephImage,
    },
    {
      name: 'Sri Mahathi Vidyaapeeth',
      link: 'https://theedumoon.com/mahathi1',
      image: mahathiImage,
    },
    {
      name: 'Centurion University',
      link: 'https://theedumoon.com/cu1',
      image: centurionImage,
    },
    {
      name: 'BITS Vizag',
      link: 'https://theedumoon.com/bits',
      image: bitsImage,
    },
    {
      name: 'ANITS',
      link: 'https://theedumoon.com/anits',
      image: anitsImage,
    },
    {
      name: 'Chaitanya Engineering College',
      link: 'https://theedumoon.com/cec%20(1)',
      image: chaitanyaImage,
    },
    {
      name: 'Pydah Educational Academy',
      link: 'https://theedumoon.com/pydah',
      image: pydahImage,
    },
    {
      name: 'Dr. Lankapalli Bullaya College',
      link: 'https://theedumoon.com/bullayya',
      image: bullayaImage,
    },
    {
      name: 'GITAM University',
      link: 'https://theedumoon.com/gitam',
      image: gitamImage,
    },
  ];

  return (
    <section className="bg-white shadow-lg text-blue-950 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-4xl  font-extrabold mb-4 text-blue-950">We are Established at</h1>
        </div>
        
        <div className="flex flex-wrap -m-4">
          {colleges.map((college, index) => (
            <div key={index} className="p-4 lg:w-1/4 md:w-1/2 hover:scale-105 transform transition duration-300">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt={college.name}
                  className="flex-shrink-0 rounded-lg w-1/2 h-40 object-cover object-center mb-4 hover:scale-110 transform transition duration-300 shadow-md"
                  src={college.image}
                />
                <div className="w-full">
                  <a
                    href={college.link}
                    className="title-font font-medium text-lg text-blue-950 hover:text-xl hover:text-blue-800 transition duration-300"
                  >
                    {college.name}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollegeClub;
