
// mysection.jsx

import React from 'react';
import { images } from '../javascript/data/mysection.js';

const Stats = () => {
return (
<section className="text-gray-100 body-font bg-white to-white">
<div className="container px-5 pt-24 pb-44 mx-auto">
<h1 className="text-4xl font-bold text-center text-black mb-12">OUR ACHIEVEMENTS</h1>
<div className="flex flex-wrap -m-4 justify-center">

{/* Card 1 */}
<div className="p-4 md:w-1/2 lg:w-1/3">
<div className="h-full  rounded-xl shadow-md transform transition-all hover:shadow-2xl hover:scale-105">
<div className="h-40 flex items-center justify-center bg-white rounded-t-xl">
<img className="w-24 h-24 object-cover object-center transition-transform duration-500 transform hover:rotate-12" src={images.img1} alt="15,000+ STUDENTS" />
</div>
<div className="p-6">
<h2 className="text-xl font-bold text-black mb-3">15,000+ STUDENTS</h2>
<p className="leading-relaxed text-black mb-3">
Join our vibrant student community where 15,000+ individuals from all around the globe come together to learn, share, and grow.
</p>
</div>
</div>
</div>

{/* Card 2 */}
<div className="p-4 md:w-1/2 lg:w-1/3">
<div className="h-full  rounded-xl shadow-md transform transition-all hover:shadow-2xl hover:scale-105">
<div className="h-40 flex items-center justify-center bg-white rounded-t-xl">
<img className="w-24 h-24 object-cover object-center transition-transform duration-500 transform hover:rotate-12" src={images.img2} alt="600+ INTERNSHIPS" />
</div>
<div className="p-6">
<h2 className="text-xl font-bold text-black mb-3">600+ INTERNSHIPS</h2>
<p className="leading-relaxed text-black mb-3">
Discover your dream internships with us and join the many happy students who have already found theirs through our vibrant community.
</p>
</div>
</div>
</div>

{/* Card 3 */}
<div className="p-4 md:w-1/2 lg:w-1/3">
<div className="h-full  rounded-xl shadow-md transform transition-all hover:shadow-2xl hover:scale-105">
<div className="h-40 flex items-center justify-center bg-white rounded-t-xl">
<img className="w-24 h-24 object-cover object-center transition-transform duration-500 transform hover:rotate-12" src={images.img3} alt="30+ COURSES" />
</div>
<div className="p-6">
<h2 className="text-xl font-bold text-black mb-3">30+ COURSES</h2>
<p className="leading-relaxed text-black mb-3">
Get ahead of the curve with our curated courses, designed to help you achieve top marks, gain valuable skills, and get ready for internships and job opportunities.
</p>
</div>
</div>
</div>


{/* Card 4 */}
<div className="p-4 md:w-1/2 lg:w-1/3">
<div className="h-full  rounded-xl shadow-md transform transition-all hover:shadow-2xl hover:scale-105 relative group">
<div className="h-40 flex items-center justify-center bg-white rounded-t-xl">
<img className="w-24 h-24 object-cover object-center transition-transform duration-500 transform hover:rotate-12" src={images.img4} alt="50+ iconANIES COLLABORATED" />
</div>
<div className="p-6">
<h2 className="text-xl font-bold text-black mb-3">50+ COMPANIES COLLABORATED</h2>
<p className="leading-relaxed text-black mb-3">
Gain real-world insights, opportunities, and expertise to grow with our community as we collaborate with 50+ iconanies to offer you the best.
</p>
</div>

{/* Dropdown with images */}
<div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<div className="p-4 flex space-x-4 overflow-x-auto">
{/* Dropdown Images */}
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.icon1} alt="icon Image 1" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.icon2} alt="icon Image 2" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.icon3} alt="icon Image 3" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.icon4} alt="icon Image 4" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.icon5} alt="icon Image 5" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.icon6} alt="icon Image 6" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.icon7} alt="icon Image 7" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.icon8} alt="icon Image 8" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.icon9} alt="icon Image 9" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.icon10} alt="icon Image 10" />
</div>
</div>
</div>
</div>



{/* Card 5 with dropdown images */}
<div className="p-4 md:w-1/2 lg:w-1/3">
<div className="h-full  rounded-xl shadow-md transform transition-all hover:shadow-2xl hover:scale-105 relative group">
<div className="h-40 flex items-center justify-center bg-white rounded-t-xl">
<img className="w-24 h-24 object-cover object-center transition-transform duration-500 transform hover:rotate-12" src={images.img5} alt="7+ CLUBS" />
</div>
<div className="p-6">
<h2 className="text-xl font-bold text-black mb-3">7+ CLUBS</h2>
<p className="leading-relaxed text-black mb-3">
Unleash your potential and discover new horizons with our 7 clubs, designed to help you grow in various aspects of life during your studies. Join now!
</p>
</div>

{/* Dropdown with images */}
<div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<div className="p-4 flex space-x-4 overflow-x-auto">
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.club1} alt="Club Image 1" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.club2} alt="Club Image 2" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.club3} alt="Club Image 3" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.club4} alt="Club Image 4" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.club5} alt="Club Image 5" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.club6} alt="Club Image 6" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.club7} alt="Club Image 7" />
</div>
</div>
</div>
</div>


{/* Card 6 */}
<div className="p-4 md:w-1/2 lg:w-1/3">
<div className="h-full  rounded-xl shadow-md transform transition-all hover:shadow-2xl hover:scale-105 relative group">
<div className="h-40 flex items-center justify-center bg-white rounded-t-xl">
<img className="w-24 h-24 object-cover object-center transition-transform duration-500 transform hover:rotate-12" src={images.img6} alt="15+ COLLEGES" />
</div>
<div className="p-6">
<h2 className="text-xl font-bold text-black mb-3">15+ COLLEGES</h2>
<p className="leading-relaxed text-black mb-3">
Experience the power of collaboration with our inter-university events, designed for students to learn, develop skills, find like-minded individuals from different universities.
</p>
</div>

{/* Dropdown with images */}
<div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<div className="p-4 flex space-x-4 overflow-x-auto">
{/* Dropdown Images */}
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.clg1} alt="Clg Image 1" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.clg2} alt="Clg Image 2" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.clg3} alt="Clg Image 3" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.clg4} alt="Clg Image 4" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.clg5} alt="Clg Image 5" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.clg6} alt="Clg Image 6" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.clg7} alt="Clg Image 7" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.clg8} alt="Clg Image 8" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.clg9} alt="Clg Image 9" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.clg10} alt="Clg Image 10" />
<img className="w-20 h-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110" src={images.clg11} alt="Clg Image 11" />
</div>
</div>
</div>
</div>

{/* Add other cards in similar fashion */}
</div>
</div>
</section>
);
};

export default Stats;