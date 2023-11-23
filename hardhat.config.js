require('dotenv').config()

require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomicfoundation/hardhat-ethers");
require('ethers');

module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: process.env.STAGING_QUICKNODE_KEY,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
