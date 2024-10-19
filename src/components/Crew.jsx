import jhansi from '../assets/images/ourteam_images/jhansi.jpg';
import aparna from '../assets/images/ourteam_images/aparna.jpg';
import kusuma from '../assets/images/ourteam_images/kusuma.jpg';

const Crew = () => {
  return (
    <section className="bg-gray-300 text-gray-800 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-5xl font-semibold title-font mb-4 text-gray-900">Our TEAM</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
            Meet the dedicated team behind our success!
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full bg-white flex flex-col items-center text-center shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                alt="team"
                className="w-48 h-48 object-cover object-center rounded-full mb-4"
                src={kusuma}
              />
              <h2 className="text-xl font-medium text-gray-900">Anu</h2>
              
            </div>
          </div>
          <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full bg-white flex flex-col items-center text-center shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                alt="team"
                className="w-48 h-48 object-cover object-center rounded-full mb-4"
                src={aparna}
              />
              <h2 className="text-xl font-medium text-gray-900">Aparna</h2>
              
            </div>
          </div>
          <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full bg-white flex flex-col items-center text-center shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                alt="team"
                className="w-48 h-48 object-cover object-center rounded-full mb-4"
                src={jhansi}
              />
              <h2 className="text-xl font-medium text-gray-900">Jhansi</h2>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crew;
