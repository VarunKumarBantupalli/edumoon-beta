import React from 'react';
import club1 from '../assets/images/clubs_images/1.jpg';
import club2 from '../assets/images/clubs_images/2.jpg';
import club3 from '../assets/images/clubs_images/3.jpg';
import club4 from '../assets/images/clubs_images/4.jpg';
import club5 from '../assets/images/clubs_images/5.jpg';
import club6 from '../assets/images/clubs_images/6.jpg';

function OfferedClubs() {
  const clubs = [club1, club2, club3, club4, club5, club6];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Clubs</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.map((club, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={club}
              alt={`Club ${index + 1}`}
              className="w-full h-64 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferedClubs;
