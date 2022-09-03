import React from 'react'
import Image from 'next/image'
import WorldCup from '../assets/WC.png';

const BuyTickets = () => {
  return (
    <div className='relative text-white'>
        <Image src={WorldCup} width={2000} height={840} />
        <div className='absolute top-1/4 left-1/3'>
        <h1 className='uppercase text-xl sm:text-2xl lg:text-4xl'>Buy Tickets</h1>
        <p className=' text-lg sm:text-1xl lg:text-2xl py-5'>Here you can buy tickets in a much more secure <br /> and efficient manner</p>
        <button className='bg-white py-3 px-5 rounded-full hover:bg-gray-300 text-black text-lg'>Purchase</button>
        </div>
    </div>
  )
}

export default BuyTickets