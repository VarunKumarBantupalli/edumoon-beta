import React, { useState } from 'react';
// Import your local components
import Webinar from './Webinar';
import WorkshopGallery from './WorkshopGallery';
import ClubsGallery from './ClubsGallery';
import OtherImages from './OtherImages';

const boxesData = [
  {
    title: 'Webinars',
    icon: 'fas fa-video',
    component: <Webinar />,
  },
  {
    title: 'Workshops',
    icon: 'fas fa-tools',
    component: <WorkshopGallery />,
  },
  {
    title: 'Live Sessions',
    icon: 'fas fa-chalkboard-teacher',
    component:<OtherImages />,
  },
  {
    title: 'Clubs',
    icon: 'fas fa-users',
    component: <ClubsGallery />
  }
];

const Boxes = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  // Function to handle box click and set the component
  const handleBoxClick = (component) => {
    setSelectedComponent(component);
  };

  // Function to go back to the boxes view
  const handleBackClick = () => {
    setSelectedComponent(null);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {/* Render the boxes when no component is selected */}
      {!selectedComponent && (
        <div className="flex flex-wrap justify-center w-full">
          {boxesData.map((box, index) => (
            <div
              key={index}
              onClick={() => handleBoxClick(box.component)}
              className="m-4 w-60 h-40 flex flex-col justify-center items-center border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
            >
              <i className={`${box.icon} text-4xl mb-2`} aria-hidden="true"></i>
              <h2 className="text-xl font-semibold">{box.title}</h2>
            </div>
          ))}
        </div>
      )}

      {/* Render the selected component and a back button */}
      {selectedComponent && (
        <div className="w-full mt-8">
          {selectedComponent}

          {/* Back button at the bottom */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handleBackClick}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
              Back &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Boxes;
