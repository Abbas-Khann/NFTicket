import React from 'react'
import Navbar from '../components/Navbar'

const Activity = () => {
  return (
    <div className='font-plus bg-black min-h-screen'>
        <Navbar />
        <div className='flex flex-col items-center py-20 text-white'>
        <h1 className='text-4xl border-b-2 inline'>Activity</h1>
        <p className='py-8 text-center'>In this section, you can see all the activity <br />going on in our dApp of tickets being purchased, <br />reselling, with their ID's, Types, Addresses and <br />Seat levels</p>
        </div>
    </div>
  )
}

export default Activity