import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
require("dotenv").config({ path: ".env" });


const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.15",
    settings: {
      optimizer: {
        enabled: true,
        runs: 5,
      },
    },
  },
  networks: {
    mumbai: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [PRIVATE_KEY !== undefined ? PRIVATE_KEY : ""],
    },
    skale: {
      url: "https://eth-online.skalenodes.com/v1/hackathon-content-live-vega",
      accounts: [PRIVATE_KEY !== undefined ? PRIVATE_KEY : ""],
    },
  },

  etherscan: {
    apiKey:
      process.env.ETHERSCAN_API_KEY !== undefined
        ? process.env.ETHERSCAN_API_KEY
        : "",
  },
};

export default config;
