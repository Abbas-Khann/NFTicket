import React from 'react'
import Navbar from '../components/Navbar'

const Tickets = () => {
  return (
    <div className='bg-black min-h-screen'>
        <Navbar />
        <div>
            <div className='flex items-center justify-center pt-16'>  
            <h1 className='text-3xl inline text-white md:text-4xl border-b-2 pb-3'>Matches</h1>
            </div>
        </div>
    </div>
  )
}

export default Tickets