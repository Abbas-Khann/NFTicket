import TicketCard from "./TicketCards/TicketCard";
import TicketCardTwo from "./TicketCards/TicketCardTwo";
import TicketCardThree from "./TicketCards/TicketCardThree";
import TicketCardFour from "./TicketCards/TicketCardFour";
import TicketCardFive from "./TicketCards/TicketCardFive";
import TicketCardSix from "./TicketCards/TicketCardSix";
import TicketCardSeven from "./TicketCards/TicketCardSeven";
import TicketCardEight from "./TicketCards/TicketCardEight";
import TicketCardNine from "./TicketCards/TicketCardNine";
import TicketCardTen from "./TicketCards/TicketCardTen";
import { GameInfoProps } from "../interfaces/Countries";

const GameInfo = ({ country }: { country: GameInfoProps }): JSX.Element => {
  return (
    <div className="bg-black text-white ">
      <div className="">
        <div className="text-black bg-[#f5f5f5] rounded-b-xl sm:w-10/12 w-11/12 mx-auto ">
          <div className="flex mx-auto justify-around py-8 relative  border-b-2">
            <div className="absolute top-1/2 transform -translate-y-1/2  sm:text-3xl text-lg font-medium ">
              {country.gameDate}
            </div>
            <h1 className="sm:text-3xl text-lg">{country.name1}</h1>
            <h1 className="sm:text-3xl text-lg">{country.name2}</h1>
          </div>
          <div className="flex mx-auto justify-around py-16 relative ">
            <div className="absolute top-1/2 transform -translate-y-1/2   font-medium">
              <h1 className="text-[#707B89] sm:text-xl text-xs mb-6">City</h1>
              <p className="sm:text-xl text-xs">Al Khor</p>
            </div>
            <div>
              <h1 className="text-center text-[#707B89] sm:text-xl text-xs mb-6">
                Venue
              </h1>
              <p className="font-medium sm:text-xl text-xs">Al Bayt Stadium</p>
            </div>
            <div>
              <h1 className="text-[#707B89] sm:text-xl text-xs mb-6">
                Competition
              </h1>
              <p className="font-medium sm:text-xl text-xs">FIFA World Cup™</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-around  flex-wrap sm:px-16 px-4">
        <TicketCard country1={country.name1} country2={country.name2} />
        <TicketCardTwo country1={country.name1} country2={country.name2} />
        <TicketCardThree country1={country.name1} country2={country.name2} />
        <TicketCardFour country1={country.name1} country2={country.name2} />  
        <TicketCardFive country1={country.name1} country2={country.name2} />
        <TicketCardSix country1={country.name1} country2={country.name2} />
        <TicketCardSeven country1={country.name1} country2={country.name2} />
        <TicketCardEight country1={country.name1} country2={country.name2} />
        <TicketCardNine country1={country.name1} country2={country.name2} />
        <TicketCardTen country1={country.name1} country2={country.name2} />
      </div>
    </div>
  );
};

export default GameInfo;
