import jhansi from '../assets/images/ourteam_images/jhansi.jpg'
import aparna from '../assets/images/ourteam_images/aparna.jpg'
import kusuma from '../assets/images/ourteam_images/kusuma.jpg'

const Crew = () => {
    return (
      <section className="text-white bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl font-medium title-font mb-4 text-black">OUR CREW</h1>
          </div>
          <div className="flex flex-wrap -m-0">
            <div className="p-2 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-1/2 h-80 object-cover object-center mb-4"
                  src={kusuma}
                />
                <h2 className="text-2xl font-medium text-black">Anu</h2>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-1/2 h-80 object-cover object-center mb-4"
                  src={aparna}
                />
                <h2 className="text-2xl font-medium text-black">Aparna</h2>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-1/2 h-80 object-cover object-center mb-4"
                  src={jhansi}
                />
                <h2 className="text-2xl font-medium text-black">Jhansi</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Crew;