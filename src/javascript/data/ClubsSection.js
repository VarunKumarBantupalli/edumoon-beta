import React from 'react';

const ClubsSection = () => {
  const clubs = [
    {
      title: 'English Club',
      description: 'Committed to helping students learn and speak English fluently through engaging activities, discussions, and language practice.',
      image: 'src/assets/images/images/english.png',
      link: 'https://discord.com/invite/y8t6j477eE',
    },
    {
      title: 'Cultural Club',
      description: 'Dedicated to promoting diverse cultural experiences and providing students with opportunities to learn music, dance, photography, and arts.',
      image: 'src/assets/images/images/cultural.png',
      link: 'https://discord.com/invite/y8t6j477eE',
    },
    {
      title: 'Sports Club',
      description: 'Dedicated to promoting physical fitness and helping students learn proper form and play sports to make it a vital part of their lives.',
      image: 'src/assets/images/images/sports.png',
      link: 'https://discord.com/invite/y8t6j477eE',
    },
    {
      title: 'Entreprenership Club',
      description: 'Dedicated to empowering students to build their own startups with fully functional setups.',
      image: 'src/assets/images/images/Entreprenership.png',
      link: 'https://discord.com/invite/y8t6j477eE',
    },
    {
      title: 'Coding Club',
      description: 'Dedicated to empowering students to become coding experts and achieve their dream job in the tech industry.',
      image: 'src/assets/images/images/coding.png',
      link: 'https://discord.com/invite/y8t6j477eE',
    },
    {
      title: 'Career & Skills Club',
      description: 'Committed to providing students with resources to clear exams and secure internships to help them grow professionally.',
      image: 'src/assets/images/images/careerskill.png',
      link: 'https://discord.com/invite/y8t6j477eE',
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl font-medium title-font mb-4 text-black">Join Our Clubs</h1>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {clubs.map((club, index) => (
            <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6 hover:scale-105 transform transition duration-300">
              <div className="rounded-lg h-64 overflow-hidden">
                <img alt={club.title} className="object-cover object-center h-full w-full" src={club.image} />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{club.title}</h2>
              <p className="text-base leading-relaxed mt-2">{club.description}</p>
              <a href={club.link} className="text-indigo-500 inline-flex items-center mt-3">
                Join Now
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;