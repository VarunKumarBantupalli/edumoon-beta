import React from 'react'
import Hiring from './Hiring'
import Bookdemoclass from './Bookdemoclass'
import Mentors from './Mentors'
import Stats from '../utils/Stats'
import Testimonial from '../utils/Testimonial'
import Exploreus from './Exploreus'
import PopularCourses from './PopularCourses'



function Tutition() {
  return (
    <>
     <Hiring/>
     {/* <Bookdemoclass/> */}
     <Exploreus/>
     <Mentors/>
     <PopularCourses/>
     <Testimonial/>

    </>
  )
}

export default Tutition
