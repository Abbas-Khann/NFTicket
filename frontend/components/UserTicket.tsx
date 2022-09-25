import React from 'react'
import Match from '../public/img/Match.png';
import Image from 'next/image';
const UserTicket = () => {
    return (
        <section className="h-[440px] max-w-[290px] bg-[#F5F5F5] px-3 md:px-6 pb-6 pt-8 my-16 mx-10 rounded-xl">
          <div className="max-w-[220px] mb-6 relative">
            <div className="z-10 w-full h-full absolute flex flex-col justify-center items-center space-y-10">
              <h1 className="text-gray-200 z-10 text-2xl font-medium">
                {/* for country names you can use the dynamic image here */}
              </h1>
              <h1 className="text-gray-200 z-10 text-2xl font-medium">
                {/* same here  */}
              </h1>
            </div>
            <Image src={Match} />
          </div>
          <div className="flex justify-around mb-2">
            <h2 className="text-[#818A96] font-medium">TokenID</h2>
            <h2 className="text-[#818A96]">Floor Price</h2>
          </div>
          <div className="flex items-center justify-around mb-5 ml-5">
            <h2 className="text-black pr-5">0</h2>
            <h2 className="text-black flex items-center ">
                {/* Skale logo here LJ */}
              <Image
                src={Match}
                width={20}
                height={20}
                className="border-b-2 border-black text-2xl"
                />
              <p className="ml-1">5 SFUEL</p>
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-black mb-3">First Row Seat</p>
            <div className="flex w-full justify-center mb-4">
              <p className="text-black text-lg">Home Ticket</p>
            </div>
          </div>
        </section>
      );
    };

export default UserTicket