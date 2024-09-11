import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div>
        <Link to='/Course'  >
        
        <div className="className">this leads to course page</div>
        
        </Link>

        <Link to='/Aboutus'  >
        
        <div className="className">this leads to About us page</div>
        
        </Link>

        <Link to='/Events'  >
        
        <div className="className">this leads to Events page</div>
        
        </Link>

        <Link to='/Clubs'  >
        
        <div className="className">this leads to Clubs page</div>
        
        </Link>

        <Link to='/Tutition'  >
        
        <div className="className">this leads to Tutition page</div>
        
        </Link>
      </div>
    </>
  )
}

export default Home
