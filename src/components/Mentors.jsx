import React from 'react';
import mentor1 from '../assets/images/other_images/mentor1.png';
import mentor2 from '../assets/images/other_images/mentor2.png';
import mentor3 from '../assets/images/other_images/mentor3.png';
import mentor4 from '../assets/images/other_images/mentor4.png';
import mentor5 from '../assets/images/other_images/mentor5.png';
import mentor6 from '../assets/images/other_images/mentor6.png';

const mentors = [
  {
    name: 'Prof. P. Srinivasa Rao',
    img: mentor1,
    position: 'Dept. Of CSE',
    linkedin: 'https://www.linkedin.com/in/srinivasa-rao-peri-2ab17925/?originalSubdomain=in',
  },
  {
    name: 'Prof. Paul Douglas',
    img: mentor2,
    position: 'Dept. Of Chemical Engineering',
    linkedin: 'https://www.linkedin.com/in/paul-douglas-5b8b8219/?originalSubdomain=in',
  },
  {
    name: 'Prof. D. Lalitha Bhaskari',
    img: mentor3,
    position: 'Chairman - Board Of Studies CSSE IQAC Coordinator AU',
    linkedin: 'https://www.linkedin.com/in/lalitha-bhaskari-dhavala-4280631/?originalSubdomain=in',
  },
  {
    name: 'Prof. P. Mallikarjun Rao',
    img: mentor4,
    position: 'HOD - Dept. Of Electrical Engineering, AU',
    linkedin: 'https://www.linkedin.com/in/mallikarjuna-rao-pasumarthi-b4322113/?originalSubdomain=in',
  },
  {
    name: 'Mr. Ravi Eswarapu',
    img: mentor5,
    position: 'CEO A-HUB - AU',
    linkedin: 'https://www.linkedin.com/in/eswarapu/?originalSubdomain=in',
  },
  {
    name: 'Prof. P.V.G.D. Prasad Reddy',
    img: mentor6,
    position: 'Vice Chancellor - AU',
    linkedin: 'https://www.linkedin.com/in/prasad-reddy-98109412/?originalSubdomain=in',
  },
];

const Mentors = () => {
  return (
    <section className="text-gray-600 bg-gray-100 body-font py-24">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-medium title-font text-gray-600 mb-4">OUR MENTORS</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {mentors.map((mentor, index) => (
            <div key={index} className="p-4 lg:w-1/3 md:w-1/2 w-full hover:scale-105">
              <div className="h-full flex flex-col md:flex-row items-center border-gray-200 border p-6 rounded-lg shadow-lg hover:shadow-2xl">
                <img
                  alt="mentor"
                  className="w-32 h-32 bg-gray-500 object-cover object-center flex-shrink-0 rounded-full mb-4 md:mb-0 md:mr-4 shadow-md hover: transition-transform duration-500"
                  src={mentor.img}
                />
                <div className="flex-grow text-center md:text-left">
                  <a
                    href={mentor.linkedin}
                    className="text-blue-950 title-font font-medium text-lg hover:text-blue-400 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {mentor.name}
                  </a>
                  <p className="text-blue-950 mt-2">{mentor.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
