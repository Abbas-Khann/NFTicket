import Image from "next/image";
import Match from "../../public/img/blanknft.png";
import SkaleLogo from "../../public/img/skale-logo.png";
import { useEffect, useState } from "react";
import { buySeatLevelTen } from "../../contractInteractions/Ticket";
import { useSigner, useProvider } from "wagmi";
import { Contract } from "ethers";
import { TICKET_ABI, TICKET_ADDRESS } from "../../contractInfo/Ticket";

const TicketCard = ({
  country1,
  country2,
}: {
  country1: string;
  country2: string;
}) => {
  const options = [{ value: "Home" }, { value: "Away" }];
  const [homeorAway, setHomeOrAway] = useState(options[0].value);
  const [ticketsMinted, setTicketsMinted] = useState(0);
  const { data: signer } = useSigner();
  const provider = useProvider();
  const ticketMinted = async (): Promise<void> => {
    const TicketContract = new Contract(TICKET_ADDRESS, TICKET_ABI, provider);
    try {
      const count = await TicketContract.homeSeatLevelCount(10);
      const countTwo = await TicketContract.awaySeatLevelCount(10);
      setTicketsMinted(count.toNumber() + countTwo.toNumber());
    } catch (error: any) {
      console.log(error);
    }
  };
  useEffect(() => {
    ticketMinted();
  });
  return (
    <section className="h-[480px] max-w-[290px] bg-[#F5F5F5] px-3 md:px-6 pb-6 pt-8 my-16 mx-10 rounded-xl">
      <div className="max-w-[220px] mb-6 relative">
        <div className="z-10 w-full h-full absolute flex flex-col justify-center items-center space-y-10">
          <h1 className="text-gray-200 z-10 text-2xl font-medium">
            {country1}
          </h1>
          <h1 className="text-gray-200 z-10 text-2xl font-medium">
            {country2}
          </h1>
        </div>
        <Image src={Match} />
      </div>
      <div className="flex justify-around mb-2">
        <h2 className="text-[#818A96] font-medium">Minted</h2>
        <h2 className="text-[#818A96]">Floor Price</h2>
      </div>
      <div className="flex justify-around mb-5">
        <h2 className="text-black">{ticketsMinted}/200</h2>
        <h2 className="text-black flex items-center ">
          <Image
            src={SkaleLogo}
            width={20}
            height={20}
            className="border-b-2 border-black text-2xl pb-1"
          />
          <p className="ml-1">0.05 SFUEL</p>
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-black mb-3">Tenth Row Seat</p>
        <div className="flex w-full justify-between mb-4">
          <p className="text-black text-lg">Ticket Type ➩</p>
          <select
            className="text-black rounded-lg px-2 cursor-pointer outline-none"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setHomeOrAway(e.target.value)
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
            buySeatLevelTen(homeorAway === "Home" ? true : false, signer)
          }
          className="bg-black py-2 px-8 rounded-full"
        >
          Purchase
        </button>
      </div>
    </section>
  );
};

export default TicketCard;
