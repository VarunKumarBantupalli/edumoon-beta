import React from 'react';

const boxesData = [
  {
    title: 'Webinars',
    icon: 'fas fa-video', // Font Awesome icon class
    link: 'src/Webinar.jsx', // Replace with your link
  },
  {
    title: 'Workshops',
    icon: 'fas fa-tools',
    link: 'src/WorkshopGallery.jsx',
  },
  {
    title: 'Live Sessions',
    icon: 'fas fa-chalkboard-teacher',
    link: 'src/ClubsGallery.jsx',
  },
  {
    title: 'Clubs',
    icon: 'fas fa-users',
    link: 'src/OtherImages.jsx',
  },
];

const Boxes = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {boxesData.map((box, index) => (
        <a
          key={index}
          href={box.link}
          target="_blank"
          rel="noopener noreferrer"
          className="m-4 w-60 h-40 flex flex-col justify-center items-center border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          <i className={`${box.icon} text-4xl mb-2`} aria-hidden="true"></i>
          <h2 className="text-xl font-semibold">{box.title}</h2>
        </a>
      ))}
    </div>
  );
};

export default Boxes;
