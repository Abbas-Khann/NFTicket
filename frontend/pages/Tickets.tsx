import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Footer from "../components/Footer";
import MatchCard from "../components/MatchCard";
import Navbar from "../components/Navbar";

const Tickets: NextPage = () => {
  return (
    <>
      <NextSeo title="Tickets | NFTicket" description="Buy NFT Tickets" />

      <div className="bg-black min-h-screen w-full">
        <Navbar />
        <div className="lg:px-36 pb-24">
          <div className="flex items-center justify-center pt-16 pb-20">
            <h1 className="text-3xl inline text-white sm:text-4xl border-b-2 pb-3">
              Matches
            </h1>
          </div>
          <div className="flex flex-col items-center py-5 md:flex-row md:flex-wrap md:justify-evenly">
            <MatchCard
              gameDate="21 November 2022"
              countries={[
                { name: "Qatar", code: "QAT" },
                { name: "Ecuador", code: "EC" },
              ]}
            />
            <MatchCard
              gameDate="21 November 2022"
              countries={[
                { name: "England", code: "GB" },
                { name: "IR Iran", code: "IRN" },
              ]}
            />
            <MatchCard
              gameDate="21 November 2022"
              countries={[
                { name: "England", code: "GB" },
                { name: "USA", code: "US" },
              ]}
            />
            <MatchCard
              gameDate="21 November 2022"
              countries={[
                { name: "France", code: "FR" },
                { name: "Australia", code: "AUS" },
              ]}
            />
            <MatchCard
              gameDate="21 November 2022"
              countries={[
                { name: "Poland", code: "PL" },
                { name: "Argentina", code: "ARG" },
              ]}
            />
            <MatchCard
              gameDate="21 November 2022"
              countries={[
                { name: "Spain", code: "ESP" },
                { name: "Germany", code: "DEU" },
              ]}
            />
            <MatchCard
              gameDate="21 November 2022"
              countries={[
                { name: "Australia", code: "AUS" },
                { name: "Denmark", code: "DNK" },
              ]}
            />
            <MatchCard
              gameDate="21 November 2022"
              countries={[
                { name: "Portugal", code: "PT" },
                { name: "Uruguay", code: "URY" },
              ]}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Tickets;
