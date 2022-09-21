import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import logo from "../public/img/[NFTICKET] white.png";
import Link from "next/link";
import valist from "../public/img/valist.png";

const Footer = () => {
  return (
    <div className="bg-[#211E2C] text-white flex flex-col py-6 px-20">
      <div>
        <Image src={logo} width={150} height={25} />
        <p>Purchase a Ticket in the form of an NFT</p>
        <p>Resell it back to the team or another friend</p>
        <p>See all the activity on our website</p>
      </div>
      <div className="pr-4 flex items-end flex-col">
        <h1 className="text-lg mb-4">Connect with us on our Socials</h1>
        <div className="flex items-center w-80 justify-evenly">
          <Link href="https://www.linkedin.com/in/yanukadeneth99">
          <BsLinkedin className="text-3xl cursor-pointer" />
          </Link>
          <Link href="https://twitter.com/KhanAbbas201">
          <AiOutlineTwitter className="text-3xl cursor-pointer" />
          </Link>
          <Link href="https://app.valist.io/abbas-khan/nfticket">
          <div className="cursor-pointer">
          <Image src={valist} height={30} width={30} />
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
