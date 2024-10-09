import React from 'react';
import img1 from '../assets/images/other_images/img1.png';
import img2 from '../assets/images/other_images/img2.png';
import img3 from '../assets/images/other_images/img3.png';
import img4 from '../assets/images/other_images/img4.png';
import img5 from '../assets/images/other_images/img5.png';
import img6 from '../assets/images/other_images/img6.png';

const statsData = [
  {
    img: img1,
    title: '15,000+ STUDENTS',
    description:
      'Join our vibrant student community where 15,000+ individuals from all around the globe come together to learn, share, and grow.',
  },
  {
    img: img2,
    title: '600+ INTERNSHIPS',
    description:
      'Discover your dream internships with us and join the many happy students who have already found theirs through our vibrant community.',
  },
  {
    img: img3,
    title: '30+ COURSES',
    description:
      'Get ahead of the curve with our curated courses, designed to help you achieve top marks and gain valuable skills.',
  },
  {
    img: img4,
    title: '50+ COMPANIES COLLABORATED',
    description:
      'Gain real-world insights, opportunities, and expertise to grow with our community, in collaboration with 50+ companies.',
  },
  {
    img: img5,
    title: '7+ CLUBS',
    description:
      'Unleash your potential with our 7 clubs, designed to help you grow in various aspects of life during your studies. Join now!',
  },
  {
    img: img6,
    title: '15+ COLLEGES',
    description:
      'Collaborate with students from 15+ colleges in inter-university events, developing skills and networking with like-minded individuals.',
  },
];

const Stats = () => {
  return (
    <section className="text-gray-600 body-font py-20 bg-white">
      <div className="container px-5 mx-auto">
        <div className="w-full mb-10">
          <h2 className="text-4xl font-bold text-center text-white bg-[#2C3E50] p-4 rounded-lg shadow-lg">
            <strong>Our Achievements</strong>
          </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          {statsData.map((stat, index) => (
            <div key={index} className="p-4 w-1/2 sm:w-1/2 md:w-1/3">
              <div className="h-full bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="flex justify-center items-center p-3">
                  <img
                    className="w-16 h-16 sm:w-16 sm:h-16 md:w-24 md:h-24 object-cover object-center transition-transform duration-500 transform"
                    src={stat.img}
                    alt={stat.title}
                  />
                </div>
                <div className="p-1">
                  <h2 className="title-font text-xl font-bold text-black mb-2">{stat.title}</h2>
                  <p className="leading-relaxed text-black mb-4">{stat.description}</p>
                  <div className="flex items-center justify-start">
                    {/* <a
                      href="https://www.edumoon.in/s/store"
                      className="text-blue-200 inline-flex items-center transition duration-300 hover:text-blue-400"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
