import React, { useState } from "react";
import {
  useAccount,
  useContract,
  useProvider,
  erc721ABI,
  useSigner,
  useClient,
} from "wagmi";

import {refundTicketLevelOne} from "../contractInteractions/ReceiveRefund"

const Modal = ({modal, setModal}) => {
     const { data: signer } = useSigner();
    
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-yellow-500 grid z-50 place-items-center">
      <div className="w-auto h-auto bg-black">
        <button
          onClick={() => refundTicketLevelOne(true,  "111", signer)}
          className="bg-white px-12 rounded-3xl py-2 text-black "
        >
         Seat Level 1
        </button>
        <button
          onClick={() => setModal(!modal)}
          className="bg-white px-12 rounded-3xl py-2 text-black "
        >
          Close
        </button>
        <button
          onClick={() => setModal(!modal)}
          className="bg-white px-12 rounded-3xl py-2 text-black "
        >
          Seat Level 2
        </button>
        <button
          onClick={() => setModal(!modal)}
          className="bg-white px-12 rounded-3xl py-2 text-black "
        >
          Seat Level 3
        </button>
        <button
          onClick={() => setModal(!modal)}
          className="bg-white px-12 rounded-3xl py-2 text-black "
        >
          Seat Level 4
        </button>
      </div>
    </div>
  );
};

export default Modal;
