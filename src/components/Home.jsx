import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className='text-4xl font-extrabold'>
             <li>this is home page (wanted to do with GSAP)</li>  
              <li> here are routes for other pages</li> 
              
      </div>
      <div className='m-5'>
        <Link to='/Course'  >
        
        <div className="className">this leads to course page</div>
        
        </Link>

        <Link to='/Aboutus'  >
        
        <div className='m-5'>this leads to About us page</div>
        
        </Link>

        <Link to='/Events'  >
        
        <div className='m-5'>this leads to Events page</div>
        
        </Link>

        <Link to='/Clubs'  >
        
        <div className='m-5'>this leads to Clubs page</div>
        
        </Link>

        <Link to='/Tutition'  >
        
        <div className='m-5'>this leads to Tutition page</div>
        
        </Link>
      </div>
    </>
  )
}

export default Home
