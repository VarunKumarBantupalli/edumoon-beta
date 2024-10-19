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
      name: 'Shoukath Ali',
      title: 'Chief Technological Officer',
      imgSrc: 'src/assets/images/lectures_images/team3.png',
      link: 'https://www.linkedin.com/in/shoukath-ali-shaik-9b2b43280/',
    },
  ];

  return (
    <section className="text-[#2C3E50] body-font bg-gray-200">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-12 items-center">
          <h1 className="text-4xl font-semibold title-font mb-4 text-[#2C3E50]">
            CORE TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
            Meet the talented individuals behind our success!
          </p>
        </div>

        {/* Grid layout for team members */}
        <div className="flex flex-wrap justify-center items-center  gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="w-full  sm:w-1/2 lg:w-1/3 p-6 flex flex-col items-center text-center rounded-lg "
            >
              <div className="relative w-48 h-48 mb-4 ">
                <img
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover rounded-full"
                  src={member.imgSrc}
                />
              </div>
              <div className="w-full">
                <a
                  href='#'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="title-font font-medium text-lg text-[#2C3E50] hover:text-green-600 transition-colors duration-200 ease-in-out"
                >
                  {member.name}
                </a>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
