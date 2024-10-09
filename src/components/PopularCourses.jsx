import React from 'react';


import vidyaLakshmii from '../assets/images/popularcourses_images/vidyaLakshmii.jpeg';
import samuelSusann from '../assets/images/popularcourses_images/samuel.jpeg';
import sohanaa from '../assets/images/popularcourses_images/sohana.jpeg';
import sikhi from '../assets/images/popularcourses_images/sikhi.webp';

const PopularCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Database Management System",
      instructor: "Palisetty VidyaLakshmi",
      description: "Database management systems are essential for businesses they offer an efficient way of handling large amounts and multiple types of data.",
      views: "21,000+",
      image: vidyaLakshmii,
      link: "https://www.youtube.com/playlist?list=PL3uv3qBos9qsclt6A6vyq0TNd26m91gcC"
    },
    {
      id: 2,
      title: "Formal Language & Automata Theory",
      instructor: "Samuel Susan",
      description: "Automata theory helps computer scientists describe and analyze the dynamic behavior of discrete systems, in which signals are sampled periodically.",
      views: "13000+",
      image: samuelSusann,
      link: "https://youtube.com/playlist?list=PL3uv3qBos9qv1imOTqM3HmzV6kFTssD1Q&feature=shared"
    },
    {
      id: 3,
      title: "Digital Logic Design",
      instructor: "Sohana",
      description: "Digital logic is fundamental in creating electronic devices, used for circuits, logic gates, and designing combinational logic and mostly used and helpful in Electronics and Communication",
      views: "8000+",
      image: sohanaa,
      link: "https://www.youtube.com/playlist?list=PL3uv3qBos9qsfC1Kw_ExG-AW2xHfBotzu"
    },
    {
      id: 4,
      title: "M-1",
      instructor: "Sikhi",
      description: "M-1 is one of the most common subject in any engineering college, powering fundamentals, game engines, and useful in graphics and data Structures",
      views: "3000+",
      image: sikhi,
      link: "https://youtube.com/playlist?list=PL3uv3qBos9qutSDWkHGLcVtfIk8R_jgW0&feature=shared"
    }
  ];

  return (
    <div className="px-6 py-10">
      <h1 className="text-center text-3xl font-bold text-gray-500 mb-10">POPULAR ONLINE COURSES</h1>
      <h5 className="text-center font-bold text-xl mb-6">
        Expert team teaches all the popular courses like Web development, App development, and EAMCET.
      </h5>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <a href={course.link} key={course.id}>
            <div className="card-flyer border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
              <div className="text-box">
                <div className="image-box">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-40 object-contain"
                  />
                </div>
                <a href={course.link}>
                <div className="text-container p-4">
                  <h6 className="text-lg font-bold">{course.title}</h6>
                  <p className="text-sm text-gray-500 mb-4">{course.instructor}</p>
                  <p className="text-sm italic font-serif mb-6">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <b className="text-yellow-500">
                      <i className="fas fa-eye"></i> {course.views} views
                    </b>
                    <b className="text-sky-400">Free</b>
                  </div>
                </div>
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://www.edumoon.in/s/store"
          className="bg-sky-500 text-xl text-white px-4 p-3 rounded-xl hover:bg-sky-600 transition"
        >
          View All Courses
        </a>
      </div>
    </div>
  );
};

export default PopularCourses;
