import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Countdown from "../components/Countdown";
import CallGroups from "../components/CallGroups";
import BuyTickets from "../components/BuyTickets";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="NFTicket" description="NFTicket" />
      <main>
        <Navbar />
        <Hero />
        <Countdown />
        <CallGroups />
        <BuyTickets />
        <Footer />
      </main>
    </>
  );
};

export default Home;
