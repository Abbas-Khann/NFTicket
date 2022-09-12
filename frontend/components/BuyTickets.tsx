import Link from "next/link";

const BuyTickets = () => {
  return (
    <div
      className="relative text-white bg-tickets-img bg-no-repeat bg-cover
    py-33 w-screen md:min-h-[calc(100vh-200px)] min-h-[calc(100vh-400px)] flex justify-center items-center "
    >
      <div className="ml-10 md:ml-60">
        <h1 className="uppercase text-xl sm:text-2xl lg:text-4xl">
          Buy Tickets
        </h1>
        <p className=" text-lg sm:text-1xl lg:text-2xl sm:py-5">
          Here you can buy tickets in a much more secure <br /> and efficient
          manner
        </p>
        <Link href="/Tickets">
          <button className="bg-white py-1 sm:py-3 px-5 rounded-full hover:bg-gray-300 text-black text-lg">
            Purchase
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BuyTickets;
