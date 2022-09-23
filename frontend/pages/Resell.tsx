import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { toggleRefund } from "../contractInteractions/Refund";
import { toggleReceiveRefund } from '../contractInteractions/ReceiveRefund';
import { toggleResell } from '../contractInteractions/Resell';
import { approve } from '../contractInteractions/Ticket';
import { useSigner } from 'wagmi';

const Resell = () => {
   const options = [{ value: "Home" }, { value: "Away" }];
   const { data: signer } = useSigner();
  const [refundId, setRefundId] = useState("")
  const [refundIdTwo, setRefundIdTwo] = useState("");
  const [approveId, setApproveId] = useState("");
  const [resellId, setResellId] = useState("");
  const [approveAddress, setApproveAdress] = useState("");
  const [resellAddress, setResellAdress] = useState("")
  const [homeorAwayOne, setHomeOrAwayOne] = useState(options[0].value);
  const [homeorAwayTwo, setHomeOrAwayTwo] = useState(options[0].value);
  const [homeorAwayThree, setHomeOrAwayThree] = useState(options[0].value);
  
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="py-10 border-b">
        <div className="text-white flex flex-col justify-center items-center">
          <h1 className="text-2xl border-b-2 border-gray-300 inline text-center pt-10 sm:text-3xl md:text-4xl">
            Refund to Contract
          </h1>
          <input
            className="py-2 px-4 rounded-3xl mb-2 bg-[#282846] border-2 my-10  w-80 sm:w-96"
            placeholder="Token ID"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRefundId(e.target.value)
            }
          />
          <div className="flex w-72 justify-between py-6">
            <p className="text-white text-2xl">Ticket Type ➩</p>
            <select
              className="text-black rounded-lg px-2 cursor-pointer outline-none"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setHomeOrAwayOne(e.target.value)
              }
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() =>
              toggleRefund(
                refundId,
                signer,
                homeorAwayOne === "Home" ? true : false
              )
            }
            className="bg-white px-12 rounded-3xl py-2 text-black "
          >
            Refund
          </button>
        </div>
        <div className="text-white flex flex-col mt-5 justify-center items-center">
          <h1 className="text-2xl border-b-2 border-gray-300 inline text-center pt-10 sm:text-3xl md:text-4xl">
            Receive Refunded Contract
          </h1>
          <input
            className="py-2 px-4 rounded-3xl mb-2 bg-[#282846] border-2 my-10  w-80 sm:w-96"
            placeholder="Token ID"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRefundIdTwo(e.target.value)
            }
          />
          <div className="flex w-72 justify-between py-6">
            <p className="text-white text-2xl">Ticket Type ➩</p>
            <select
              className="text-black rounded-lg px-2 cursor-pointer outline-none"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setHomeOrAwayTwo(e.target.value)
              }
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() =>
              toggleReceiveRefund(
                refundIdTwo,
                signer,
                homeorAwayTwo === "Home" ? true : false
              )
            }
            className="bg-white px-12 rounded-3xl py-2 text-black "
          >
            Receive
          </button>
        </div>
      </div>
      <div className="py-10">
        <div className="text-white flex flex-col justify-center items-center">
          <h1 className="text-2xl border-b-2 border-gray-300 inline text-center pt-10 sm:text-3xl md:text-4xl">
            Approve User For Ticket
          </h1>
          <input
            className="py-2 px-4 rounded-3xl mb-2 bg-[#282846] border-2 my-10  w-80 sm:w-96"
            placeholder="Token ID"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setApproveId(e.target.value)
            }
          />
          <input
            className="py-2 px-4 rounded-3xl bg-[#282846] border-2 mt-3 mb-6 w-80 sm:w-96"
            placeholder="Address"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setApproveAdress(e.target.value)
            }
          />
          <button
            onClick={() => approve(approveAddress, approveId, signer)}
            className="bg-white px-12 rounded-3xl py-2 text-black mb-20"
          >
            Approve
          </button>
        </div>
        <div className="text-white flex flex-col justify-center items-center">
          <h1 className="text-2xl border-b-2 border-gray-300 inline text-center pt-10 sm:text-3xl md:text-4xl">
            Obtain Reselled Ticket
          </h1>
          <input
            className="py-2 px-4 rounded-3xl mb-2 bg-[#282846] border-2 my-10  w-80 sm:w-96"
            placeholder="Token ID"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setResellId(e.target.value)
            }
          />
          <input
            className="py-2 px-4 rounded-3xl bg-[#282846] border-2 mb-6 w-80 sm:w-96"
            placeholder="From"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setResellAdress(e.target.value)
            }
          />
          <div className="flex w-72 justify-between py-6">
            <p className="text-white text-2xl">Ticket Type ➩</p>
            <select
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setHomeOrAwayThree(e.target.value)
              }
              className="text-black rounded-lg px-2 cursor-pointer outline-none"
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() =>
              toggleResell(
                homeorAwayThree === "Home" ? true : false,
                resellId,
                resellAddress,
                signer
              )
            }
            className="bg-white px-12 rounded-3xl py-2 text-black mb-20"
          >
            Resell
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resell