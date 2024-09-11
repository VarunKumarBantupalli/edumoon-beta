import React from 'react';
import testimonials from '../javascript/data/testimonial';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-200 group-hover:blur-sm hover:!blur-none">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-32 h-32 rounded-full mx-auto"
      />
      <h3 className="text-xl font-semibold text-center mt-4 text-gray-900">{testimonial.name}</h3>
      <p className="text-gray-600 text-center">{testimonial.role}</p>
      <p className="text-gray-700 mt-4 text-center">{testimonial.quote}</p>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-blue-950">We value our learners and let's see what they said about us</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
