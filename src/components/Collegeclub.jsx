import React from 'react';

import auImage from '../assets/images/other_images/au.png';
import auWomenImage from '../assets/images/other_images/au.png';
import sanketikaImage from '../assets/images/other_images/sankethika.png';
import stJosephImage from '../assets/images/other_images/st.png';
import mahathiImage from '../assets/images/other_images/mahathi.png';
import centurionImage from '../assets/images/other_images/centurion.png';
import bitsImage from '../assets/images/other_images/bits.png';
import anitsImage from '../assets/images/other_images/anits.jpeg';
import chaitanyaImage from '../assets/images/other_images/chaitanya.png';
import pydahImage from '../assets/images/other_images/Pydah.png';
import bullayaImage from '../assets/images/other_images/bullaya.png';
import gitamImage from '../assets/images/other_images/gitam.png';

import CollegesDisplay from './CollegesDisplay';

import { Link } from 'react-router-dom';

const CollegeClub = () => {
  const colleges = [
    {
      name: 'Andhra University',
      link: '../../public/HTML/college_pages/Anits.html',
      image: auImage,
    },
    {
      name: 'Andhra University for Women',
      link: '../../public/HTML/college_pages/AUwomens.html',
      image: auWomenImage,
    },
    {
      name: 'Sanketika Vidya Parishad',
      link: '../../public/HTML/college_pages/Sankethika.html',
      image: sanketikaImage,
    },
    {
      name: 'ST. Joseph College for Women',
      link: '../../public/HTML/college_pages/StJoseph.html',
      image: stJosephImage,
    },
    {
      name: 'Sri Mahathi Vidyaapeeth',
      link: '../../public/HTML/college_pages/Mahathi.html',
      image: mahathiImage,
    },
    {
      name: 'Centurion University',
      link: '../../public/HTML/college_pages/Centurion.html',
      image: centurionImage,
    },
    {
      name: 'BITS Vizag',
      link: '../../public/HTML/college_pages/Bits.html',
      image: bitsImage,
    },
    {
      name: 'ANITS',
      link: '../../public/HTML/college_pages/Anits.html',
      image: anitsImage,
    },
    {
      name: 'Chaitanya Engineering College',
      link: '../../public/HTML/college_pages/Chaitanya.html',
      image: chaitanyaImage,
    },
    {
      name: 'Pydah Educational Academy',
      link: '../../public/HTML/college_pages/Pydah.html',
      image: pydahImage,
    },
    {
      name: 'Dr. Lankapalli Bullaya College',
      link: '../../public/HTML/college_pages/Bits.html',
      image: bullayaImage,
    },
    {
      name: 'GITAM University',
      link: '../../public/HTML/college_pages/Gitam.html',
      image: gitamImage,
    },
  ];

  return (
    <>

      <CollegesDisplay />
      <div className="flex justify-center mt-8">
        <Link to='/clubsleading'>
          <button className="bg-gradient-to-r from-teal-400 to-green-400 text-white text-md md:text-lg 
                font-semibold py-3 md:py-5 px-6 md:px-10 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-lg  focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50  m-10">
            Know More
          </button>
        </Link>
      </div>

    </>


  );
};

export default CollegeClub;
