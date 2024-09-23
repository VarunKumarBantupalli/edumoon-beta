import React from 'react'
import Hiring from './Hiring'
import Bookdemoclass from './Bookdemoclass'
import Mentors from './Mentors'
import Stats from '../utils/Stats'
import Testimonial from '../utils/Testimonial'
import Footer from '../utils/Footer'
import ContactForm from '../utils/ContactForm'

function Tutition() {
  return (
    <>
     <Hiring/>
     {/* <Bookdemoclass/> */}
     <Mentors/>
     <Stats/>
     <Testimonial/>
     <ContactForm/>
     <Footer/>
    </>
  )
}

export default Tutition
