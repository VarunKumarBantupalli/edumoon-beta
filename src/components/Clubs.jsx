import React from 'react'
import Collegeclub from './Collegeclub'
import SocialMedia from '../utils/SocialMedia'
import ClubsDisplay from './ClubsDisplay'
import OfferedClubs from './OfferedClubs'

import TestimonialsforClubs from '../utils/TestimonialsforClubs'

function Clubs() {
  return (
     <>
       <OfferedClubs/>
       <Collegeclub/>      
       <ClubsDisplay/>
       <SocialMedia/>
       <TestimonialsforClubs/>
     </>
  )
}

export default Clubs
