import React from 'react'
import Description from '../components/Description'
import Mission from '../components/Mission'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div className='bg-black'>
        <Navbar />
        <Description />
        <Mission />
    </div>
  )
}

export default About