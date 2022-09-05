import React from 'react'
import Description from '../components/Description'
import Mission from '../components/Mission'
import Navbar from '../components/Navbar'
import Team from '../components/Team'

const About = () => {
  return (
    <div className='bg-black'>
        <Navbar />
        <Description />
        <Mission />
        <Team />
    </div>
  )
}

export default About