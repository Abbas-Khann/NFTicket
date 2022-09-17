import React from 'react'
import Navbar from '../components/Navbar'
import TicketCard from '../components/TicketCard';
import Footer from '../components/Footer';

const profile = () => {
  return (
    <div className='bg-black min-h-screen'>
        <Navbar />
        <div className='text-white flex justify-around flex-wrap gap-y-20 gap-x-14'>
        <TicketCard />
        <TicketCard />
        </div>
    </div>
  )
}

export default profile