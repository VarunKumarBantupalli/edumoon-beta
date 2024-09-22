import React from 'react';

const EstablishedSection = () => {
  const universities = [
    { name: 'Andhra University', imgSrc: 'src/assets/images/images/au.png', link: 'https://theedumoon.com/sny' },
    { name: 'Andhra University for Women', imgSrc: 'src/assets/images/images/au.png', link: 'https://theedumoon.com/au%20women.html' },
    { name: 'Sanketika Vidya Parishad', imgSrc: 'src/assets/images/images/sankethika.png', link: 'https://theedumoon.com/skp1%20(1).html' },
    { name: 'ST. Joseph College for Women', imgSrc: 'src/assets/images/images/st.png', link: 'https://theedumoon.com/stjoseph' },
    { name: 'Sri Mahathi Vidyaapeeth', imgSrc: 'src/assets/images/images/mahathi.png', link: 'https://theedumoon.com/mahathi1' },
    { name: 'Centurion University', imgSrc: 'src/assets/images/images/centurion.png', link: 'https://theedumoon.com/cu1' },
    { name: 'BITS Vizag', imgSrc: 'src/assets/images/images/bits.png', link: 'https://theedumoon.com/bits' },
    { name: 'ANITS', imgSrc: 'src/assets/images/images/anits.png', link: 'https://theedumoon.com/anits' },
    { name: 'Chaitanya Engineering College', imgSrc: 'src/assets/images/images/chaitanya.png', link: 'https://theedumoon.com/cec%20(1)' },
    { name: 'Pydah Educational Academy', imgSrc: 'src/assets/images/images/Pydah.png', link: 'https://theedumoon.com/pydah' },
    { name: 'Dr.Lankapalli Bullaya College', imgSrc: 'src/assets/images/images/bullaya.png', link: 'https://theedumoon.com/bullayya' },
    { name: 'GITAM University', imgSrc: 'src/assets/images/images/gitam.png', link: 'https://theedumoon.com/gitam' }
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-medium title-font mb-4 text-black">We are Established at</h1>
        </div>

        <div className="flex flex-wrap -m-4">
          {universities.map((university, index) => (
            <div key={index} className="p-4 lg:w-1/4 md:w-1/2 hover:scale-105 transform transition duration-300">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-1/2 h-40 object-cover object-center mb-4 hover:scale-110 transform transition duration-300"
                  src={university.imgSrc}
                />
                <div className="w-full">
                  <a href={university.link} className="title-font font-medium text-lg text-black hover:text-xl hover:text-[#2C3E50] transition duration-300">
                    {university.name}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EstablishedSection;