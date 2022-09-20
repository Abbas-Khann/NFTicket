import Image from "next/image";
import Match from "../public/img/blanknft.png";
import { FaEthereum } from "react-icons/fa";

const TicketCard = ({
  country1,
  country2,
}: {
  country1: string;
  country2: string;
}) => {
  return (
    <section className="h-[450px] max-w-[290px] bg-[#F5F5F5] px-3 md:px-6 pb-6 pt-8 my-16 mx-10 rounded-xl">
      <div className="max-w-[220px] mb-6 relative">
        <div className="z-10 w-full h-full absolute flex flex-col justify-center items-center space-y-10">
          <h1 className="text-gray-200 z-10 text-2xl font-medium">
            {country1}
          </h1>
          {/* <h1 className="text-gray-200 z-10 text-xl">VS</h1> */}
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
      <div className="flex justify-around mb-8">
        <h2 className="text-black">120/8900</h2>
        <h2 className="text-black flex items-center ">
          <FaEthereum className="border-b-2 border-black text-2xl pb-1" />
          12.98ETH
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <p className="text-black mb-4">First row seat 12b</p>
        <button className="bg-black py-2 px-8 rounded-full">Purchase</button>
      </div>
    </section>
  );
};

export default TicketCard;
