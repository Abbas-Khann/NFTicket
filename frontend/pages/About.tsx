import { NextSeo } from "next-seo";
import { NextPage } from "next";
import Description from "../components/Description";
import Mission from "../components/Mission";
import Navbar from "../components/Navbar";
import Team from "../components/Team";

const About: NextPage = () => {
  return (
    <>
      <NextSeo title="About | NFTicket" description="About NFTicket" />
      <div className="bg-black pb-24">
        <Navbar />
        <Description />
        <Mission />
        <Team />
      </div>
    </>
  );
};

export default About;
