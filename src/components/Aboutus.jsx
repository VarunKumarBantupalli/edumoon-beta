import React from 'react'

import Articles from '../utils/Articles'
import Acheivements from './Acheivements'
import OurTeam from './OurTeam'
import Mentors from './Mentors'
import Founders from './Founders'
import Extendedfamily from '../utils/Extendedfamily'


export default function Aboutus() {
  return (
     <>
     <Founders/>
     <Mentors/>
     <OurTeam/>
     <Extendedfamily/>
     
     {/* <Acheivements/> */}
     <Articles/>
   
     </>
  )
}
