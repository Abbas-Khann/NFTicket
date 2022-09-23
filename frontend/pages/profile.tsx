import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import TicketCard from '../components/TicketCards/TicketCard';
import Image from 'next/image';
import empty from '../public/img/empty.png';
import { useAccount } from 'wagmi';
import UserTicket from '../components/UserTicket';

const profile = () => {
  const [ticketPurchased, setTicketPurchased] = useState<boolean>(false);
  const [thisAddress, setAddress] = useState<string | undefined>("")
  const {address} = useAccount()
  useEffect(() => {
    setAddress(address)
  },[address])
  return (
    <>
      <Navbar />
      {thisAddress === undefined && (
        <div className="bg-black min-h-screen">
          <div className="text-white flex justify-around flex-wrap gap-y-20 gap-x-14">
            <div className="pt-32">
              <Image src={empty} height={300} width={250} />
              <h1 className="py-10 text-center">
                You don't own any tickets....
              </h1>
            </div>
          </div>
        </div>
      )}
      {thisAddress !== undefined && (
          <div className="bg-black min-h-screen">
          <div className="text-white flex justify-around flex-wrap gap-y-20 gap-x-14">
            <UserTicket />
          </div>
        </div>
      )}
    </>
  );
}

export default profile