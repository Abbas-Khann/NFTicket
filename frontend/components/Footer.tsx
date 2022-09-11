import React from "react";
import logo from "../assets/[NFTICKET] white.png";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-[#211E2C] text-white flex flex-col py-20 px-20">
      <div>
        <Image src={logo} width={130} height={30} />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing. </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing. </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing. </p>
      </div>
      <div className="pr-4 flex items-end flex-col">
        <h1 className="text-lg mb-4">Connect with us on our Socials</h1>
        <div className="flex items-center w-80 justify-evenly">
          <BsLinkedin className="text-3xl" />
          <AiOutlineTwitter className="text-3xl" />
          <SiDiscord className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Footer;