import React from 'react'
import Lectures from './Lectures'
import Stats from '../utils/Stats'
import SocialMedia from '../utils/SocialMedia'
import Webinar from './Webinar'
import Workshops from './Workshops'


function Events() {
  return (
      <>
      <Lectures/>
      <Stats/>
      <SocialMedia/>
      <Webinar/>
      <Workshops/>

      </>
  )
}

export default Events
