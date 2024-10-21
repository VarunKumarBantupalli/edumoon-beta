import React from 'react'
import Lectures from './Lectures'
import Stats from '../utils/Stats'
import SocialMedia from '../utils/SocialMedia'
import Webinar from './Webinar'
import Workshops from './Workshops'
import TestimonialforCourses from '../utils/TestimonialforCourses'
import Outdooractivites from '../components/Outdooractivites'
import Eventcarousel from './Eventscarousel'
import YoutubeVideos from './YoutubeVideos'
import Boxes from './Boxes'


function Events() {
  return (
      <>
       <Eventcarousel/>
       <Boxes/>
       <YoutubeVideos/>
      
      
      <SocialMedia/>
      <TestimonialforCourses/>
      </>
  )
}

export default Events
