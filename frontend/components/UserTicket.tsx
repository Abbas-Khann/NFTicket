import React, { useState, useEffect } from "react";
import Polygon from "../public/img/polygon-logo.png"
import Image from "next/image";
import { useAccount } from "wagmi";
import {
  FETCH_TICKET,
  ticketQuery,
  FETCH_RESELL,
  resellQuery,
  FETCH_RECEIVE_REFUND,
  receiveRefundQuery,
} from "../fetchSubgraph/subgraphs";
import { subgraphArrays } from "./GraphActivity";
import { ethers } from "ethers";
const UserTicket = () => {

const [userInfo, setUserInfo] = useState<subgraphArrays["tickets"]>([])

const {address} = useAccount()


 async function fetchPurchases() {
   const resellArray = await resellQuery(FETCH_RESELL());
    const ticketArray = await ticketQuery(FETCH_TICKET());
    const receiveRefundArray = await receiveRefundQuery(FETCH_RECEIVE_REFUND());
   const myArray: subgraphArrays["tickets"] = [];
   for (
     let i = 0;
     i < Math.max(ticketArray.tickets.length, resellArray.resells.length);
     i++
   ) {
     if(ticketArray.tickets[i] !== undefined && resellArray.resells[i] !== undefined) {
        if(ticketArray.tickets[i].id === resellArray.resells[i].id && ticketArray.tickets[i].From.toString().toLowerCase() !== resellArray.resells[i].From.toString().toLowerCase() && ticketArray.tickets[i].From.toString().toLowerCase() === address?.toString().toLowerCase()) {
            myArray.push(ticketArray.tickets[i])
        } else {
            if (
              resellArray.resells[i].To.toString().toLowerCase() ===
              address?.toString().toLowerCase()
            ) {
              myArray.push(resellArray.resells[i])
            }
        }
     }
     if(ticketArray.tickets[i] !== undefined && resellArray.resells[i] === undefined) {
        if(ticketArray.tickets[i].From.toString().toLowerCase() === address?.toString().toLowerCase()) {
            myArray.push(ticketArray.tickets[i])
        }
     }

     if (
       ticketArray.tickets[i] === undefined &&
       resellArray.resells[i] !== undefined
     ) {
       if (
         resellArray.resells[i].To.toString().toLowerCase() ===
         address?.toString().toLowerCase()
       ) {
         myArray.push(resellArray.resells[i]);
       }
     }
   }

    for (let i = 0; i < receiveRefundArray.receiveRefunds.length; i++) {
      if (
        ticketArray.tickets[i].id === receiveRefundArray.receiveRefunds[i].id ||
        receiveRefundArray.receiveRefunds[i].id === resellArray.resells[i].id
      ) {
        if (
          ticketArray.tickets[i].From.toString().toLowerCase() !==
            receiveRefundArray.receiveRefunds[i].To.toString().toLowerCase() &&
          resellArray.resells[i].To.toString().toLowerCase() !==
            receiveRefundArray.receiveRefunds[i].To.toString().toLowerCase() &&
          receiveRefundArray.receiveRefunds[i].To.toString().toLowerCase() ===
            address?.toString().toLowerCase()
        ) {
          myArray.push(receiveRefundArray.receiveRefunds[i]);
        } else if (
          receiveRefundArray.receiveRefunds[i].To.toString().toLowerCase() ===
          address?.toString().toLowerCase()
        ) {
          myArray.push(receiveRefundArray.receiveRefunds[i]);
        }
      } else if (
        receiveRefundArray.receiveRefunds[i].To.toString().toLowerCase() ===
        address?.toString().toLowerCase()
      ) {
        myArray.push(receiveRefundArray.receiveRefunds[i]);
      }
      
    }
      setUserInfo(myArray);
 }

 function seatLevel(tokenId:string) {
  if (parseInt(tokenId) > 0 && parseInt(tokenId) < 201) {
    return "First Row Seat";
  } else if (parseInt(tokenId) >= 201 && parseInt(tokenId) < 401) {
    return "Second Row Seat";
  } else if (parseInt(tokenId) >= 401 && parseInt(tokenId) < 601) {
    return "Third Row Seat";
  } else if (parseInt(tokenId) >= 601 && parseInt(tokenId) < 801) {
    return "Fourth Row Seat";
  } else if (parseInt(tokenId) >= 801 && parseInt(tokenId) < 1001) {
    return "Fifth Row Seat";
  } else if (parseInt(tokenId) >= 1001 && parseInt(tokenId) < 1201) {
    return "Sixth Row Seat";
  } else if (parseInt(tokenId) >= 1201 && parseInt(tokenId) < 1401) {
    return "Seventh Row Seat";
  } else if (parseInt(tokenId) >= 1401 && parseInt(tokenId) < 1601) {
    return "Eighth Row Seat";
  } else if (parseInt(tokenId) >= 1601 && parseInt(tokenId) < 1801) {
    return "Ninth Row Seat";
  } else if (parseInt(tokenId) >= 1801 && parseInt(tokenId) < 2001) {
    return "Tenth Row Seat";
  }
 }


useEffect(() => {
 fetchPurchases()
},[address])


  return (
    <>
    {userInfo.map((u, idx) => {
        return (
          <section key={idx} className="h-[440px] max-w-[290px] bg-[#F5F5F5] px-3 md:px-6 pb-6 pt-8 my-16 mx-10 rounded-xl">
            <div className="max-w-[220px] mb-6 relative">
              <div className="z-10 w-full h-full absolute flex flex-col justify-center items-center space-y-10">
                <h1 className="text-gray-200 z-10 text-2xl font-medium">
                </h1>
                <h1 className="text-gray-200 z-10 text-2xl font-medium">
                </h1>
              </div>
              <img src={`https://eth-online.skalenodes.com/fs/hackathon-content-live-vega/bb7b095d779621cc4db92cdebd08f0a87fba1d40/1`} />
            </div>
            <div className="flex justify-around mb-2">
              <h2 className="text-[#818A96] font-medium">TokenID</h2>
              <h2 className="text-[#818A96]">Floor Price</h2>
            </div>
            <div className="flex items-center justify-around mb-5 ml-5">
              <h2 className="text-black pr-5">{u.id}</h2>
              <h2 className="text-black flex items-center ">
                <Image
                  src={Polygon}
                  width={20}
                  height={20}
                  className="border-b-2 border-black text-2xl"
                />
                <p className="ml-1">{ethers.utils.formatEther(u.Amount)} MATIC</p>
              </h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-black mb-3">{seatLevel(u.id)}</p>
              <div className="flex w-full justify-center mb-4">
                <p className="text-black text-lg">{u.HomeOrAway.toString() === "true" ? "Home" : "Away"} Ticket</p>
              </div>
            </div>
          </section>
        );
    })}
    </>
  );
};

export default UserTicket;

