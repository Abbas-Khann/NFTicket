import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config({ path: ".env" });


const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

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
    rinkeby: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [RINKEBY_PRIVATE_KEY !== undefined ? RINKEBY_PRIVATE_KEY : ""],
    },
  },

  etherscan: {
    apiKey: {
      rinkeby:
        process.env.ETHERSCAN_API_KEY !== undefined
          ? process.env.ETHERSCAN_API_KEY
          : "",
    },
  },
};

export default config;
