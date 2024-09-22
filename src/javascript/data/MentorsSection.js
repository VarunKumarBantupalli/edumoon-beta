import React from 'react';

const mentors = [
  {
    name: 'Prof. P. Srinivasa Rao',
    position: 'Dept. Of CSE',
    image: 'src/assets/images/images/mentor1.png',
    link: 'https://www.linkedin.com/in/srinivasa-rao-peri-2ab17925/?originalSubdomain=in',
  },
  {
    name: 'Prof. Paul Douglas',
    position: 'Dept. Of Chemical Engineering',
    image: 'src/assets/images/images/mentor2.png',
    link: 'https://www.linkedin.com/in/paul-douglas-5b8b8219/?originalSubdomain=in',
  },
  {
    name: 'Prof. D. Lalitha Bhaskari',
    position: 'Chairman - Board Of Studies CSSE IQAC Coordinator AU',
    image: 'src/assets/images/images/mentor3.png',
    link: 'https://www.linkedin.com/in/lalitha-bhaskari-dhavala-4280631/?originalSubdomain=in',
  },
  {
    name: 'Prof. P. Mallikarjun Rao',
    position: 'HOD - Dept. Of Electrical Engineering, AU',
    image: 'src/assets/images/images/mentor4.png',
    link: 'https://www.linkedin.com/in/mallikarjuna-rao-pasumarthi-b4322113/?originalSubdomain=in',
  },
  {
    name: 'Mr. Ravi Eswarapu',
    position: 'CEO A-HUB - AU',
    image: 'src/assets/images/images/mentor5.png',
    link: 'https://www.linkedin.com/in/eswarapu/?originalSubdomain=in',
  },
  {
    name: 'Prof. P.V.G.D. Prasad Reddy',
    position: 'Vice Chancellor - AU',
    image: 'src/assets/images/images/mentor6.png',
    link: 'https://www.linkedin.com/in/prasad-reddy-98109412/?originalSubdomain=in',
  },
];

const MentorsSection = () => {
  return (
    <section className="text-gray-600 bg-[#2C3E50] body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-medium title-font mb-4 text-white">OUR MENTORS</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {mentors.map((mentor, index) => (
            <div key={index} className="p-4 lg:w-1/3 md:w-1/2 w-full hover:scale-105 transform transition duration-300">
              <div className="h-full flex items-center border-gray-200 border p-6 rounded-lg shadow-lg">
                <img
                  alt="team"
                  className="w-32 h-32 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 shadow-md"
                  src={mentor.image}
                />
                <div className="flex-grow p-4">
                  <a href={mentor.link} className="text-white title-font font-medium text-lg" target="_blank" rel="noopener noreferrer">
                    {mentor.name}
                  </a>
                  <p className="text-white">{mentor.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
