import React from 'react';

function OurTeam() {
  const teamMembers = [
    {
      name: 'Brijesh',
      title: 'Chief Development Officer',
      imgSrc: 'src/assets/images/lectures_images/team1.png',
      link: '#',
    },
    {
      name: 'Smruthi',
      title: 'Chief Organisation Officer',
      imgSrc: 'src/assets/images/lectures_images/team2.png',
      link: '#',
    },
    {
      name: 'Shoukath Ali',
      title: 'Chief Technological Officer',
      imgSrc: 'src/assets/images/lectures_images/team3.png',
      link: 'https://www.linkedin.com/in/shoukath-ali-shaik-9b2b43280/',
    },
    {
      name: 'Sowmya',
      title: 'Chief Event Designer',
      imgSrc: 'src/assets/images/lectures_images/team4.png',
      link: '#',
    },
  ];

  return (
    <>
      <section className=" text-[#2C3E50] body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="text-3xl md:text-4xl font-medium title-font mb-4 text-[#2C3E50]">
              OUR TEAM
            </h1>
          </div>
          {/* Responsive grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="p-4 flex flex-col items-center text-center rounded-lg shadow-lg">
                <div className="relative w-full h-56 mb-4">
                  <img
                    alt="team"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    src={member.imgSrc}
                  />
                </div>
                <div className="w-full">
                  <a href={member.link} className="title-font font-medium text-[#2C3E50] text-lg ">
                    {member.name}
                  </a>
                  <h3 className="text-[#2C3E50] mb-3">{member.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default OurTeam;
