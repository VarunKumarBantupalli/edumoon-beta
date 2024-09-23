import React from 'react'
import Footer from '../utils/Footer'
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
     <Acheivements/>
     <Articles/>
     <Footer/>
     </>
  )
}
