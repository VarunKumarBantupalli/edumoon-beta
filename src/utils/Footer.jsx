import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/socialmedialogos/edumoonlogo.png'; // Update with the correct path if needed

import applestorelogo from '../assets/images/socialmedialogos/apple.store.png';
import playstorelogo from '../assets/images/socialmedialogos/playstore_latest.png';

function Footer() {
  return (
    <footer className="text-white body-font bg-black">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        {/* Logo and Description */}
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src={logo} alt="Logo" />
          </a>
          <p className="mt-2 text-sm text-white">
            EduMoon is building the largest student community for engineers to develop new skills, network, find internships, grow, and earn.
          </p>

        </div>

        {/* Navigation Links */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {/* Section 1 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10">
              <Link to='/'>  <li>
                <p className="text-white  mb-2 inline-block">HOME</p>
              </li></Link>
              <Link to='/aboutus'>  <li>
                <p className="text-white  mb-2 inline-block">ABOUT US</p>
              </li></Link>
              <li>
                <p href="https://www.edumoon.in/s/store" className="text-white  mb-2 inline-block">COURSES</p>
              </li>
              <Link to='/events' > <li>
                <p className="text-white  mb-2 inline-block">EVENTS</p>
              </li></Link>
            </nav>
          </div>

          {/* Section 2 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10">
              <Link to='/clubs'> <li>
                <p className="text-white  mb-2 inline-block">CLUBS</p>
              </li> </Link>
              <Link to='/tution'> <li>
                <p className="text-white  mb-2 inline-block">TUTIONS</p>
              </li> </Link>
              <li>
                <a className="text-white  mb-2 inline-block">PRIVACY POLICY</a>
              </li>
              <li>
                <a className="text-white  mb-2 inline-block">TERMS AND CONDITIONS</a>
              </li>
            </nav>
          </div>


          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CONTACT US</h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <a className="text-white ">A-Hub, Maddilapalem, Visakhapatnam-530003</a>
              </li>
              <li className="mb-2">
                <a className="text-white ">Email: theedumoon@gmail.com</a>
              </li>
              <li className="mb-2">
                <a className="text-white ">Phone: +91 79891 32224</a>
              </li>


              <span className="inline-flex sm:ml-auto sm:mt-3 mt-4 justify-center sm:justify-start">
              <a className="text-white " href="#">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white " href="#">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-white " href="#">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-white " href="#">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>





            </nav>
          </div>
        </div>
           
        <div className="flex flex-col items-center">
            <a href="https://play.google.com/store/apps/details?id=com.edumoon.learners" className="m-2">
              <img className="h-12 md:h-16 rounded-xl" src={applestorelogo} alt="App Store" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.edumoon.learners" className="m-2">
              <img className="h-12 md:h-16 rounded-xl" src={playstorelogo} alt="Play Store" />
            </a>
          </div>


      </div>


      <div className="border-t border-gray-200">
        <div className="bg-black">
          <div className="container mx-auto py-4 px-5 flex justify-center items-center">
            <p className="text-white text-sm text-center sm:text-left">© 2024 Moon Light Global Solutions Pvt Ltd</p>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
