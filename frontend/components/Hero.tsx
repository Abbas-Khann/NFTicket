import Image from "next/image";
import heroImage from "../public/img/hero.png";
import { useState } from "react";
import {
  useSigner,
} from "wagmi";
const Filestorage = require("@skalenetwork/filestorage.js");
const Web3 = require("web3");

const Hero = () => {
  const [selectedFile, setSelectedFile] = useState();
      
       //let filestorage = new Filestorage(web3Provider);
       const changeHandler = (event: React.ChangeEvent) => {
         setSelectedFile(event.target.files[0]);
       };

       async function upload() {
         const web3Provider = new Web3.providers.HttpProvider(
           "https://eth-online.skalenodes.com/v1/hackathon-content-live-vega"
         );
         let web3 = new Web3(web3Provider);
         let filestorage = new Filestorage(web3, true);
         let privateKey =
           "0x" +
           "";
         let account = "0xbB7b095D779621cC4db92CdebD08f0a87FBA1D40";
         let file = selectedFile
         let reader = new FileReader();

         //file path in account tree (dirA/file.name)
        //  let filePath = ""
        //  if (specificDirectory === "") {
        //    filePath = file.name;
        //  } else {
        //    filePath = specificDirectory + "/" + file.name;
        //  }

         //file storage method to upload file
         reader.onload = async function (e) {
           const arrayBuffer = reader.result;
           const bytes = new Uint8Array(arrayBuffer);
           let link = filestorage.uploadFile(
             account,
             file?.name,
             bytes,
             privateKey
           );
            console.log(link);
         };
         reader.readAsArrayBuffer(file);
      }

  return (
    <section className="px-2 py-20 bg-gradient-to-r from-[#9B021EDE] via-[#800028] to-[#3B0113F7] text-white">
      <div className="md:flex items-center justify-around ">
        <div className=" md:w-3/5 px-4">
          <h2 className="font-philosopher text-4xl text-skin-base my-4 leading-tight lg:text-7xl tracking-tighter mb-6">
            Tickets to FiFa <br />
            World Cup <span className="text-[#FFB200]">2022</span>
          </h2>
          <p className="text-base text-skin-muted dark:text-skin-darkMuted lg:text-2xl sm:mb-14 mb-10">
            Get access to tickets as NFTs. Retain the value of your purchased
            Ticket NFT legally and re-sell if you want with the same price
          </p>
          <div>
            <input type="file" name="file" onChange={changeHandler} />
            <img
              src="https://eth-online.skalenodes.com/v1/hackathon-content-live-vega/bB7b095D779621cC4db92CdebD08f0a87FBA1D40/valist.png"
              alt=""
            />
            <button
              onClick={upload}
              className="border-full py-2 px-6 rounded-full border-2  hover:bg-[#800028]"
            >
              How it works
            </button>
          </div>
        </div>
        <div className="w-10/12 md:w-1/3 mx-auto md:mx-0 my-8 order-2 ">
          <Image src={heroImage} />
        </div>
      </div>
    </section>
  );
};


export default Hero;