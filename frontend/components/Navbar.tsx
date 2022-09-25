import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import logo from "../public/img/[NFTICKET].png";
import { useSnackbar } from "notistack";
import { useAccount } from "wagmi";

const Navbar = () => {
  // --------- States here -------------
  const [expand, setExpand] = useState<boolean>(false);
const { enqueueSnackbar, closeSnackbar } = useSnackbar();
   const account = useAccount({
     onConnect({}) {
       enqueueSnackbar("Wallet Connected!", {
         variant: "success",
         preventDuplicate: true,
       });
     },
     onDisconnect() {
       enqueueSnackbar("Wallet Disconnected!", {
         variant: "success",
         preventDuplicate: true,
       });
     },
   });

  return (
    <nav className="max-w-full bg-[#FFB200] px-4 py-8 grid grid-cols-2 grid-rows-1 gap-y-7 justify-items-end h-full content-center lg:flex lg:justify-around lg:px-0 font-plus relative lg:items-center ">
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
        </style>
      </Head>
      <div className="flex justify-between w-full lg:w-96">
        {!expand ? (
          <a
            href="#"
            className="self-center ml-2 lg:hidden"
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <BiMenu className="text-3xl" />
          </a>
        ) : (
          <a
            href="#"
            className="self-center text-center lg:hidden fixed top-10 left-2/4 z-50 rounded-full ml-3 bg-gray-600 dark:bg-slate-50 px-2 py-2"
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <MdClose className="text-2xl text-white dark:text-black" />
          </a>
        )}
        <Image src={logo} width={150} height={25} />
        {/* <h1 className="text-2xl font-semibold dark:text-skin-darkSecondary">
          NFTicket
        </h1> */}
      </div>
      <ul className="hidden lg:flex justify-between items-center basis-2/5 text-lg">
        <Link href="/">
          <button className="cursor-pointer hover:border-b-2 hover:border-black transition-all text-skin-muted dark:text-skin-darkMuted">
            Home
          </button>
        </Link>
        <Link
          href="/About"
          className="cursor-pointer hover:border-b-2 hover:border-black transition-all text-skin-muted"
        >
          <button className="cursor-pointer hover:border-b-2 hover:border-black transition-all text-skin-muted dark:text-skin-darkMuted">
            About
          </button>
        </Link>
        <Link href="/profile">
          <button className="cursor-pointer hover:border-b-2 hover:border-black transition-all text-skin-muted dark:text-skin-darkMuted">
            Profile
          </button>
        </Link>
        <Link href="/Tickets">
          <button className="cursor-pointer hover:border-b-2 hover:border-black transition-all text-skin-muted dark:text-skin-darkMuted">
            Tickets
          </button>
        </Link>
        <Link href="/Activity">
          <button className="cursor-pointer hover:border-b-2 hover:border-black transition-all text-skin-muted dark:text-skin-darkMuted">
            Activity
          </button>
        </Link>
        <Link href="/Resell">
          <button className="cursor-pointer hover:border-b-2 hover:border-black transition-all text-skin-muted dark:text-skin-darkMuted">
            Resell
          </button>
        </Link>
      </ul>
      {/* ------------ Input component rendered here -------------- */}
      <ConnectButton />
      {/* --------------- Mobile and Tablets --------------- */}

      <button className="justify-self-end self-center mr-2 lg:hidden text-2xl">
        {/* <RiSearchLine className="text-3xl" /> */}
        {/* search icon here */}
      </button>

      {/* ------------- Transition for Mobile Menu -------------- */}

      <Transition
        show={expand}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-500 transfrom"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        className="lg:hidden w-screen h-screen fixed overflow-y left-0 top-0 z-10"
      >
        <div
          className="lg:hidden flex flex-col items-start h-full px-4 w-2/4 bg-[#FFB200] py-10 md:px-8"
          id="mobile-menu"
        >
          <div className="flex space-x-2 items-center w-auto mb-24">
            <Image src={logo} width={120} height={20} />
          </div>
          <ul className=" flex flex-col justify-between basis-2/6 items-start mb-20">
            <Link href="/">
              <button className="cursor-pointer hover:border-b-2 hover:border-black transition-all text-skin-muted">
                Home
              </button>
            </Link>
            <Link href="/About">
              <button className="cursor-pointer hover:border-b-2 hover:border-black transition-all text-skin-muted">
                About
              </button>
            </Link>
            <Link href="/profile">
              <button className="cursor-pointer hover:border-b-2 hover:border-black transition-all text-skin-muted">
                Profile
              </button>
            </Link>
            <Link href="/Tickets">
              <button className="cursor-pointer hover:border-b-2 hover:border-black transition-all text-skin-muted">
                Tickets
              </button>
            </Link>
              <Link href="/Activity">
            <button className="cursor-pointer hover:border-b-2 hover:border-black transition-all text-skin-muted dark:text-skin-darkMuted">
              Activity
            </button>
          </Link>
          <Link href="/Resell">
            <button className="cursor-pointer hover:border-b-2 hover:border-black transition-all text-skin-muted dark:text-skin-darkMuted">
              Resell
            </button>
          </Link>
          </ul>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
