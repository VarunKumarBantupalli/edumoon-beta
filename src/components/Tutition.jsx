import React from 'react'
import Hiring from './Hiring'
import Bookdemoclass from './Bookdemoclass'
import Mentors from './Mentors'
import Stats from '../utils/Stats'
import Testimonial from '../utils/Testimonial'
import Exploreus from './Exploreus'
import PopularCourses from './PopularCourses'
import RegistrationButtons from './RegistrationButtons'



function Tutition() {
  return (
    <>
     {/* <Hiring/> */}
     {/* <Bookdemoclass/> */}
     
     <Exploreus/>
     <RegistrationButtons/>
     <Mentors/>
     <PopularCourses/>
     <Testimonial/>

    </>
  )
}

export default Tutition
