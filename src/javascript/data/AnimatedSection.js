import React from 'react';
import 'src/css/styles.css'; 

const data = [
  {
    imgSrc: 'src/assets/images/images/img1.png',
    title: '15,000+ STUDENTS',
    description: 'Join our vibrant student community where 15,000+ individuals from all around the globe come together to learn, share, and grow.',
  },
  {
    imgSrc: 'src/assets/images/images/img2.png',
    title: '600+ INTERNSHIPS',
    description: 'Discover your dream internships with us and join the many happy students who have already found theirs through our vibrant community.',
  },
  {
    imgSrc: 'src/assets/images/images/img3.png',
    title: '30+ COURSES',
    description: 'Get ahead of the curve with our curated courses, designed to help you achieve top marks, gain valuable skills, and get ready for internships and job opportunities.',
    link: 'https://www.edumoon.in/s/store',
  },
  {
    imgSrc: 'src/assets/images/images/img4.png',
    title: '50+ COMPANIES COLLABORATED',
    description: 'Gain real-world insights, opportunities and expertise to grow with our community as we collaborate with 50+ companies to offer you the best.',
  },
  {
    imgSrc: 'src/assets/images/images/img5.png',
    title: '7+ CLUBS',
    description: 'Unleash your potential and discover new horizons with our 7 clubs, designed to help you grow in various aspects of life during your studies. Join now!',
  },
  {
    imgSrc: 'src/assets/images/images/img6.png',
    title: '15+ COLLEGES',
    description: 'Experience the power of collaboration with our inter-university events, designed for students to learn, develop skills, find like-minded individuals from different universities.',
  },
];

const AnimatedSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.map((item, index) => (
            <div key={index} className="p-4 md:w-1/3 box bg-[#2C3E50] transform transition duration-500 hover:scale-105 hover:shadow-lg">
              <div className="h-40 border-2 border-[#2C3E50] border-opacity-60 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  className="w-24 h-24 object-cover object-center transition-transform duration-500 transform hover:rotate-12"
                  src={item.imgSrc}
                  alt="blog"
                />
              </div>
              <div className="p-4 opacity-0 animate-fadeIn">
                <h1 className="title-font text-2xl font-medium text-white mb-2">{item.title}</h1>
                <p className="leading-relaxed text-white mb-2">{item.description}</p>
                {item.link ? (
                  <div className="flex items-center flex-wrap">
                    <a href={item.link} className="text-blue-200 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedSection;
