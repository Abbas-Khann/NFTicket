import React from 'react'
import Image from 'next/image'
import WorldCup from '../assets/WC.png';

const BuyTickets = () => {
  return (
    <div>
        <Image src={WorldCup} width={2000} height={840} />
        {/* <h1>Buy Tickets</h1> */}
    </div>
  )
}

export default BuyTickets