import React from "react";
import Footer from "../components/Footer";
import GameDetails from "../components/GameDetails";
import GameInfo from "../components/GameInfo";
import Navbar from "../components/Navbar";

const matchDetails = () => {
  return (
    <div className="min-h-screen bg-[#282846]">
      <Navbar />
      <GameDetails
        countries={[
          { name: "Qatar", code: "QAT" },
          { name: "Ecuador", code: "EC" },
        ]}
      />

      <GameInfo countries={[{ name: "Qatar", gameDate: "20:30" }]} />
      <Footer />
    </div>
  );
};

export default matchDetails;