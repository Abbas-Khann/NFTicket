import React from 'react'
import Image from 'next/image'
import WorldCup from '../assets/WC.png';

const BuyTickets = () => {
  return (
    <div className='relative text-white'>
      <div className=''>
        <Image src={WorldCup} width={2000} height={900} />
        <div className='absolute sm:top-1/4 sm:left-1/3 top-4 left-1/4 '>
        <h1 className='uppercase text-xl sm:text-2xl lg:text-4xl'>Buy Tickets</h1>
        <p className=' text-lg sm:text-1xl lg:text-2xl sm:py-5'>Here you can buy tickets in a much more secure <br /> and efficient manner</p>
        <button className='bg-white py-1 sm:py-3 px-5 rounded-full hover:bg-gray-300 text-black text-lg'>Purchase</button>
        </div>
      </div>
    </div>
  )
}

export default BuyTickets