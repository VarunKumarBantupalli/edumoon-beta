import React from 'react'
import Lectures from './Lectures'
import Stats from '../utils/Stats'
import SocialMedia from '../utils/SocialMedia'
import Webinar from './Webinar'
import Workshops from './Workshops'
import TestimonialforCourses from '../utils/TestimonialforCourses'
import Outdooractivites from '../components/Outdooractivites'


function Events() {
  return (
      <>
      <Lectures/>
      <Stats/>
      <SocialMedia/>
          
      <Workshops/>
      <Webinar/> 
      <Outdooractivites/>
      
      <TestimonialforCourses/>

      </>
  )
}

export default Events
