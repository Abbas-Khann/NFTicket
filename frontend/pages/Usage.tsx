import React from "react";
import Navbar from "../components/Navbar";
import image from "../public/img/Wallet.jpeg";
import Image from "next/image";
import Footer from "../components/Footer";
import StepTwo from "../public/img/secondStep.jpeg";
import StepThree from "../public/img/stepThree.jpeg";

const Usage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#07031A] min-h-screen text-white">
        <h1 className="text-4xl md:text-5xl text-center py-14 md:py-20">
          How To Use?
        </h1>
        <h1 className="text-4xl text-center py-10">Step One</h1>
        <div className="flex sm:px-24 md:px-32 lg:px-36">
          <div className="w-10/12 sm:w-6/12 flex flex-col justify-center lg:pl-32">
            <h2 className="text-3xl pb-8">Connect your Wallet</h2>
            <p className="text-xl">
              First of all you will need to connect your <br />
              wallet and select the Scale network <br /> Since this dApp is
              deployed on Scale
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-6/12">
            <Image
              src={image}
              className="rounded-full object-cover"
              width={320}
              height={320}
            />
          </div>
        </div>
        <h1 className="text-4xl text-center pt-32 pb-10">Step Two</h1>
        <div className="flex sm:px-24 md:px-32 lg:px-36">
          <div className="flex flex-col items-center justify-center w-6/12">
            <Image
              src={StepTwo}
              className="rounded-full object-cover"
              width={300}
              height={300}
            />
          </div>
          <div className="w-10/12 sm:w-6/12 flex flex-col justify-center lg:pl-32">
            <h2 className="text-3xl pb-8">Purchase a Ticket</h2>
            <p className="text-xl">
              Head over to the tickets page and <br />
              Choose the game you want to watch
              <br /> Click on Match details and purchase a ticket in the row you
              want, Now you should be able to see the ticket in your profile
              page
            </p>
          </div>
        </div>
        <h1 className="text-4xl text-center pt-32 pb-10">Step Three</h1>
        <div className="flex sm:px-24 md:px-32 lg:px-36">
          <div className="w-10/12 sm:w-6/12 flex flex-col justify-center lg:pl-32">
            <h2 className="text-3xl pb-8">Resell your Ticket if you want</h2>
            <p className="text-xl">
              If you want to resell your ticket <br />
              head over to the resell page and <br /> and you'll have the
              options to resell your ticket back <br /> to the contract or even
              receive the it from <br />
              someone else and most importantly send it <br />
              to a friend.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-6/12">
            <Image
              src={StepThree}
              className="rounded-full object-cover"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="flex flex-col items-center py-24">
          <iframe
            width="760"
            height="455"
            src="https://www.youtube.com/embed/fs5Xp1P8Gck"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Usage;
