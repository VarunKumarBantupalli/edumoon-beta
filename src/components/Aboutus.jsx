import React from 'react'

import Articles from '../utils/Articles'
import Acheivements from './Acheivements'
import OurTeam from './OurTeam'
import Mentors from './Mentors'
import Founders from './Founders'

export default function Aboutus() {
  return (
     <>
     <Founders/>
     <Mentors/>
     <OurTeam/>
     {/* <Acheivements/> */}
     <Articles/>
   
     </>
  )
}
