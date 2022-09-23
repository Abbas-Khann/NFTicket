import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image';
import empty from '../public/img/empty.png';
import { useAccount, useProvider } from 'wagmi';
import UserTicket from '../components/UserTicket';
import { Contract } from "ethers";
import { TICKET_ABI, TICKET_ADDRESS } from "../contractInfo/Ticket";
const profile = () => {
  const [aBalance, setABalance] = useState<number>(0)
  const {address} = useAccount()
  const provider = useProvider()
  const balance = async (): Promise<void> => {
    const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, provider);
    const count = await TicketContract.balanceOf(address);
    setABalance(count.toNumber())
  };
  useEffect(() => {
    balance()
  },[address])
  return (
    <>
      <Navbar />
      {aBalance === 0 ? 
      <div className="bg-black min-h-screen">
          <div className="text-white flex justify-around flex-wrap gap-y-20 gap-x-14">
            <div className="pt-32">
              <Image src={empty} height={300} width={250} />
              <h1 className="py-10 text-center">
                You don't own any tickets....
              </h1>
            </div>
          </div>
        </div> :   
        <div className="bg-black min-h-screen">
          <div className="text-white flex justify-around flex-wrap gap-y-20 gap-x-14">
            <UserTicket />
          </div>
        </div>
        }
    </>
  );
}

export default profile