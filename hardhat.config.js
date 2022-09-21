require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path: ".env"});

const ALCHEMY_PUBLIC_URL = process.env.ALCHEMY_PUBLIC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: 
    "0.8.17",
  
  networks: {
    hardhat:{},
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/K_1eACekTMY01dw73VFy3_SugGfGKQuf",
      accounts: [PRIVATE_KEY],
    }
  }
};
