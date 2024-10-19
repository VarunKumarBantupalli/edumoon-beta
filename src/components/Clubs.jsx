import React from 'react'
import Collegeclub from './Collegeclub'
import SocialMedia from '../utils/SocialMedia'
import ClubsDisplay from './ClubsDisplay'
import OfferedClubs from './OfferedClubs'
import LandingPage from './LandingPage'
import ClubsCaurosel from './ClubsCaurosel'

import TestimonialsforClubs from '../utils/TestimonialsforClubs'

function Clubs() {
  return (
     <>
       <ClubsCaurosel/>
       <OfferedClubs/>
       <Collegeclub/>      
       <ClubsDisplay/>
       <SocialMedia/>
       <TestimonialsforClubs/>
     </>
  )
}

export default Clubs
