require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/", //URL of the RPC node for Swisstronik.
      accounts: [`0x` + `${process.env.PRIVATE_KEY}`], 
      //Make sure you have enough funds in this wallet to deploy the smart contract
    },
  },
};