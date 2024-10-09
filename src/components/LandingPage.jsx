import landing1 from '../assets/images/landing_images/landing1.jpg';
import landing2 from '../assets/images/landing_images/landing2.jpg';
import landing3 from '../assets/images/landing_images/landing3.jpg';

const LandingPage = () => {
  return (
      <div className="posters w-full bg-cover bg-center bg-no-repeat text-white overflow-hidden">
        <div className="flex animate-slide slide-mobile slide-tablet gap-5 m-2">
          <img
            src={landing1}
            alt="landing1"
            className="w-full h-full object-contain"
          />
          <img
            src={landing2}
            alt="landing2"
            className="w-full h-full object-contain"
          />
          <img
            src={landing3}
            alt="landing3"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
  );
};

export default LandingPage;
