import TicketCard from "./TicketCard";
import { GameInfoProps } from "../interfaces/Countries";

const GameInfo = ({
  countries,
}: {
  countries: GameInfoProps[];
}): JSX.Element => {
  return (
    <div className="bg-[#282846] text-white ">
      <div className="">
        {countries.map((country, index) => {
          return (
            <div
              key={index}
              className="text-black bg-[#f5f5f5] rounded-b-xl sm:w-10/12 w-11/12 mx-auto "
            >
              <div className="flex mx-auto justify-around py-8 relative  border-b-2">
                <div className="absolute top-1/2 transform -translate-y-1/2  sm:text-3xl text-lg font-medium ">
                  {country.gameDate}
                </div>
                <h1 className="sm:text-3xl text-lg">{country.name1}</h1>
                <h1 className="sm:text-3xl text-lg">{country.name2}</h1>
              </div>
              <div className="flex mx-auto justify-around py-16 relative ">
                <div className="absolute top-1/2 transform -translate-y-1/2   font-medium">
                  <h1 className="text-[#707B89] sm:text-xl text-xs mb-6">
                    City
                  </h1>
                  <p className="sm:text-xl text-xs">Al Khor</p>
                </div>
                <div>
                  <h1 className="text-center text-[#707B89] sm:text-xl text-xs mb-6">
                    Venue
                  </h1>
                  <p className="font-medium sm:text-xl text-xs">
                    Al Bayt Stadium
                  </p>
                </div>
                <div>
                  <h1 className="text-[#707B89] sm:text-xl text-xs mb-6">
                    Competition
                  </h1>
                  <p className="font-medium sm:text-xl text-xs">
                    FIFA World Cup™
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-20 flex justify-around  flex-wrap sm:px-16 px-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default GameInfo;
