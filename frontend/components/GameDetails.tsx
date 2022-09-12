import Image from "next/image";
import { CountriesProps } from "../interfaces/Countries";

const GameDetails = ({
  countries,
}: {
  countries: CountriesProps[];
}): JSX.Element => {
  return (
    <div className="bg-[#282846] max-w-full pt-8">
      <div className="flex bg-[#f5f5f5] rounded-t-xl mx-auto w-11/12 sm:w-10/12 justify-around relative py-8 border-b-4">
        <div className="absolute top-1/2 transform -translate-y-1/2 text-[#707B89] border-b-2 border-[#707B89] sm:text-3xl text-lg font-medium pb-2">
          VS
        </div>
        {countries.map((country, index) => {
          return (
            <div key={index} className="">
              <div className="text-xs relative w-[100px] h-[50px] sm:w-[200px] sm:h-[100px] shadow-md shadow-slate-600">
                <Image
                  src={`https://countryflagsapi.com/png/${country.code}`}
                  alt="Flag"
                  layout="fill"
                  priority
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameDetails;
