import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image';
import empty from '../public/img/empty.png';
import UserTicket from '../components/UserTicket';

const profile = () => {
  const [ticketPurchased, setTicketPurchased] = useState<boolean>(true);
  
  return (
    <div className='bg-black min-h-screen'>
        <Navbar />
        <div className='text-white flex justify-around flex-wrap gap-y-20 gap-x-14'>
        {ticketPurchased ? <div>
          <UserTicket />
        </div> : (
        <div className='pt-32'>
        <Image src={empty} height={300} width={250} />
        <h1 className='py-10 text-center'>You don't own any tickets....</h1>
        </div>)}
        </div>
    </div>
  )
}

export default profile