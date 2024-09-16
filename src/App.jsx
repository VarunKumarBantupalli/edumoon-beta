
import Articles from "./utils/Articles"
import SocialMedia from "./utils/SocialMedia"
import Testimonial from "./utils/Testimonial"
import EventImages from "./utils/EventImages"
import ContactForm from "./utils/ContactForm"

function App() {
  

  return (
    <>
     <EventImages/>
     <SocialMedia/>
     <Articles/>
     <Testimonial/>
     <div className=" flex justify-center items-center w-[100%] h-[100vh]">
      <ContactForm/>
     </div>


    </>
  )
}

export default App

const ExtendedFamilySection = () => {
  console.log("ExtendedFamilySection rendered");
  return (
    <section>...</section>
  );
};
