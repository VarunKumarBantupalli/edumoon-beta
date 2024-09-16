import React from 'react';

const teamMembers = [
  {
    name: 'Brijesh',
    role: 'Chief Development Officer',
    image: 'src/assets/images/images/team1.png',
    link: '',
  },
  {
    name: 'Smruthi',
    role: 'Chief Organisation Officer',
    image: 'src/assets/images/images/team2.png',
    link: '',
  },
  {
    name: 'Shoukath Ali',
    role: 'Chief Technological Officer',
    image: 'src/assets/images/images/team3.png',
    link: 'https://www.linkedin.com/in/shoukath-ali-shaik-9b2b43280/',
  },
  {
    name: 'Sowmya',
    role: 'Chief Event Designer',
    image: 'src/assets/images/images/team4.png',
    link: '',
  },
];

const TeamSection = () => {
  return (
    <section className="text-white bg-[#2C3E50] body-font">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-medium title-font mb-4 text-white">OUR TEAM</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src={member.image}
                />
                <div className="w-full">
                  <a href={member.link} className="title-font font-medium text-lg text-white" target="_blank" rel="noopener noreferrer">
                    {member.name}
                  </a>
                  <h3 className="text-white mb-3">{member.role}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;