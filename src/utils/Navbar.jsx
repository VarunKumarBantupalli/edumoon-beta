import React from 'react'
import { Link } from 'react-router-dom'
import edumoonlogo from '../assets/images/socialmedialogos/edumoonlogo.png'

function Navbar() {
    return (
        <div className="relative z-20 text-[#2C3E50] shadow-xl">
            <nav>
                <div className="icons flex justify-between items-center gap-4 p-6 md:p-10 h-[10vh]">
                    <Link to='/'>
                        <div className='hover:text-[#4CAF50] text-xl md:text-5xl'>
                            {/* Logo adjusted for responsiveness */}
                            <img
                                className='h-auto max-h-[9vh] min-w-[11vw] w-auto max-w-full rounded-xl object-contain'
                                src={edumoonlogo}
                                alt="EduMoon Logo"
                            />
                        </div>
                    </Link>
                    <div className="options flex items-center">
                        <Link to='/' className='p-2 md:p-5 hover:text-[#4CAF50] font-bold text-sm md:text-xl'>Home</Link>
                        <a href="https://www.edumoon.in/s/store"
                            className='p-1 md:p-2 font-bold text-sm md:text-xl hover:text-[#4CAF50]'>
                            Courses
                        </a>
                        <Link to='/aboutus' className='p-2 md:p-5 hover:text-[#4CAF50] font-bold text-sm md:text-xl'>About</Link>
                        <Link to='/events' className='p-2 md:p-5 hover:text-[#4CAF50] font-bold text-sm md:text-xl'>Events</Link>
                        <Link to='/clubs' className='p-2 md:p-5 hover:text-[#4CAF50] font-bold text-sm md:text-xl'>Clubs</Link>
                        <Link to='/tution' className='p-2 md:p-5 hover:text-[#4CAF50] font-bold text-sm md:text-xl'>Tutions</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
