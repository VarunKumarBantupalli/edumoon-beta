import React from 'react'
import Hiring from './Hiring'
import Bookdemoclass from './Bookdemoclass'
import Mentors from './Mentors'
import Stats from '../utils/Stats'
import Testimonial from '../utils/Testimonial'



function Tutition() {
  return (
    <>
     <Hiring/>
     {/* <Bookdemoclass/> */}
     <Mentors/>
     <Stats/>
     <Testimonial/>

    </>
  )
}

export default Tutition
