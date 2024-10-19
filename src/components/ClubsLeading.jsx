import React from 'react'
import bgimage from '../assets/images/exploreus_images/studentclub.jpg'
import CollegesDisplay from './CollegesDisplay'

import {benefits} from '../javascript/data/benefits.js'
import {instructions} from '../javascript/data/instructions.js'

function ClubsLeading() {
    return (
        <>
            <div className="relative w-full h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${bgimage})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
                    <h1 className="text-4xl font-bold mb-4">EDUMOON STUDENT CLUBS</h1>
                    <h2 className="text-lg max-w-3xl mb-8">
                        The main aim is to often provide opportunities for students to socialize, develop leadership skills, and pursue their passions outside of the classroom. Conducting Inter-University Student Clubs across the Nation, where all the students can participate at a time.
                    </h2>
                    <a href="#">
                        <button className="bg-gradient-to-r from-teal-400 to-indigo-500 text-white py-2 px-6 rounded">
                            Lead a Club
                        </button>
                    </a>
                </div>
            </div>
            <CollegesDisplay/>

            <div className="tutor flex flex-col items-center my-[10vh]">
                <h1 className='text-2xl md:text-4xl font-bold text-gray-600'>Benefits of Becoming Lead</h1>
                
            </div>

            <div className="steps grid grid-cols-3  gap-6 px-4 max-w-screen-lg mx-auto">
                {benefits.map(benefit => (
                    <div key={benefit.id} className="step bg-gradient-to-r from-teal-400 to-indigo-500 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <h2 className="text-2xl font-bold text-white mb-4">{benefit.heading}</h2>
                        <p className="text-white">{benefit.content}</p>
                    </div>
                ))}
            </div>



            <div className="tutor flex flex-col items-center my-[10vh]">
                <h1 className='text-2xl md:text-4xl font-bold text-gray-600'>What a Lead should have?</h1>
                
            </div>

            <div className="steps grid grid-cols-3  gap-6 px-4 max-w-screen-lg mx-auto">
                {instructions.map(benefit => (
                    <div key={benefit.id} className="step bg-gradient-to-r from-teal-400 to-indigo-500 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                        <h2 className="text-2xl font-bold text-white mb-4">{benefit.heading}</h2>
                        <p className="text-white">{benefit.content}</p>
                    </div>
                ))}
            </div>




        </>
    )
}

export default ClubsLeading
