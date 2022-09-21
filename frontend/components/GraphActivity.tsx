import React, {useState,useEffect} from 'react'
import {ethers, BigNumber} from "ethers"
import { FETCH_TICKET, ticketQuery, FETCH_RESELL, resellQuery, refundQuery, FETCH_REFUND, FETCH_RECEIVE_REFUND, receiveRefundQuery } from "../fetchSubgraph/subgraphs";
import {TICKET_ADDRESS} from "../contractInfo/Ticket"

type subgraphArrays = {
  tickets: {
    From: string;
    HomeOrAway: boolean;
    SeatLevel: string;
    id: string;
    Amount: BigNumber;
  }[];
  resell: {
    From: string;
    To: string;
    HomeOrAway: boolean;
    SeatLevel: string;
    id: string;
    Amount: BigNumber;
  }[];
  refund: {
    HomeOrAway: boolean;
    SeatLevel: string;
    id: string;
    Amount: BigNumber;
  }[];
};

const GraphActivity = () => {
    const [ticketArray, setTicketArray] = useState<subgraphArrays["tickets"]>([]);
    const [resellArray, setResellArray] = useState<subgraphArrays["resell"]>([]);
    const [refundArray, setRefundArray] = useState<subgraphArrays["refund"]>([]);

     async function fetchFromTicket() {
       const ticketArray = await ticketQuery(FETCH_TICKET());
       setTicketArray(ticketArray.tickets)
     }

     async function fetchFromResell() {
       const resellArray = await resellQuery(FETCH_RESELL());
       setResellArray(resellArray.resells)
     }

      async function fetchFromRefund() {
        const refundArray = await refundQuery(FETCH_REFUND());
         const receiveRefundArray = await receiveRefundQuery(FETCH_RECEIVE_REFUND());
         const thisArray: subgraphArrays["refund"] = []
         for(let i = 0; i<receiveRefundArray.receiveRefunds.length; i++) {
           if(refundArray.refunds[i].id !== receiveRefundArray.receiveRefunds[i].id) {
             thisArray.push(refundArray.refunds[i]);
           }
         }
        setRefundArray(thisArray);
      }

      useEffect(() => {
        fetchFromTicket();
        fetchFromResell();
        fetchFromRefund();
      },[]);

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-10">
        <thead className="text-xs uppercase bg-gray-700 text-gray-400 border-b border-gray-300">
          <tr>
            <th scope="col" className="py-3 px-6">
              ID
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              From
            </th>
            <th scope="col" className="py-3 px-6 text-center">
              To
            </th>
            <th scope="col" className="py-3 px-6">
              Home
            </th>
            <th scope="col" className="py-3 px-6">
              Seat Level
            </th>
            <th scope="col" className="py-3 px-6">
              Method
            </th>
            <th scope="col" className="py-3 px-6">
              Cost
            </th>
          </tr>
        </thead>
        <tbody>
          {ticketArray?.map((t, idx) => {
            return (
              <tr
                key={idx}
                className="border-b bg-gray-900 border-gray-300 text-gray-400"
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap "
                >
                  {t?.id}
                </th>
                <td className="py-4 px-6">{TICKET_ADDRESS}</td>
                <td className="py-4 px-6">{t?.From}</td>
                <td className="py-4 px-6">{t?.HomeOrAway.toString()}</td>
                <td className="py-4 px-8">{t?.SeatLevel}</td>
                <td className="py-4 px-6">Buy</td>
                <td className="py-4 px-6">
                  {ethers.utils.formatEther(t?.Amount)} SFUEL
                </td>
              </tr>
            );
          })}
          {resellArray?.map((s, idx) => {
            return (
              <tr
                key={idx}
                className="border-b bg-gray-900 border-gray-300 text-gray-400"
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap "
                >
                  {s?.id}
                </th>
                <td className="py-4 px-6">{s?.From}</td>
                <td className="py-4 px-6">{s?.To}</td>
                <td className="py-4 px-6">{s?.HomeOrAway.toString()}</td>
                <td className="py-4 px-8">{s?.SeatLevel}</td>
                <td className="py-4 px-6">Resell</td>
                <td className="py-4 px-6">
                  {ethers.utils.formatEther(s?.Amount)} SFUEL
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex flex-col items-center py-10 text-white">
        <h1 className="text-4xl border-b-2 inline">Tickets On Sale</h1>
        <p className="text-center pb-3 pt-5 text-xl">
          In this section, you can see all the tickets <br />
          that you can buy from the contract <br />
        </p>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs uppercase bg-gray-700 text-gray-400 border-b border-gray-300">
          <tr>
            <th scope="col" className="py-3 px-6">
              ID
            </th>
            <th scope="col" className="py-3 px-6">
              Home
            </th>
            <th scope="col" className="py-3 px-6">
              Seat Level
            </th>
            <th scope="col" className="py-3 px-6">
              Cost
            </th>
          </tr>
        </thead>
        <tbody>
          {refundArray?.map((t, idx) => {
            return (
              <tr
                key={idx}
                className="border-b bg-gray-900 border-gray-300 text-gray-400"
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium whitespace-nowrap "
                >
                  {t?.id}
                </th>
                {/* <td className="py-4 px-6">{TICKET_ADDRESS}</td> */}
                {/* <td className="py-4 px-6">{t?.From}</td> */}
                <td className="py-4 px-6">{t?.HomeOrAway.toString()}</td>
                <td className="py-4 px-8">{t?.SeatLevel}</td>
                {/* <td className="py-4 px-6">Refund</td> */}
                <td className="py-4 px-6">
                  {ethers.utils.formatEther(t?.Amount)} SFUEL
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default GraphActivity