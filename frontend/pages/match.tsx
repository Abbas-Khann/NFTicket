import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

// Components
import Footer from "../components/Footer";
import GameDetails from "../components/GameDetails";
import GameInfo from "../components/GameInfo";
import Navbar from "../components/Navbar";

const match: NextPage = () => {
  //* Send URL : `match?country1=Quatars+QAT&country2=Ecuador+EC&gameDate=20:30`
  const router = useRouter();

  // Get the data from the URL
  const country1 = router.query.country1 as string;
  const country2 = router.query.country2 as string;
  const gameDate = (router.query.gameDate as string) ?? "Loading..";

  // Split the values into two (Country Name and Code)
  const c1Array = country1?.split(" ") ?? ["Loading.."];
  const c2Array = country2?.split(" ") ?? ["Loading.."];

  return (
    <>
      <NextSeo
        title={`Match : ${c1Array[0]} vs ${c2Array[0]}`}
        description="View Match Details of two teams in the event and mint NFTs"
      />

      <div className="min-h-screen bg-[#282846]">
        <Navbar />
        <GameDetails
          countries={[
            { name: c1Array[0], code: c1Array[1] },
            { name: c2Array[0], code: c2Array[1] },
          ]}
        />

        <GameInfo
          countries={[{ name1: c1Array[0], name2: c2Array[0], gameDate }]}
        />
        <Footer />
      </div>
    </>
  );
};

export default match;
