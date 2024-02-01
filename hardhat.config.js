require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("@nomicfoundation/hardhat-ethers");
require('dotenv').config()

// Go to https://dashboard.alchemy.com/, sign up, create a new API key
// in its dashboard, and replace "API Key" with it
const ALCHEMY_SEPOLIA_RPC_URL = process.env.ALCHEMY_SEPOLIA_RPC_URL;
const ALCHEMY_ETHEREUM_RPC_URL = process.env.ALCHEMY_ETHEREUM_RPC_URL;


// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const PRIVATE_KEY1 = process.env.PRIVATE_KEY1;

module.exports = {
  solidity: {
    version: "0.8.23", // any version you want
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        details: {
          yulDetails: {
            optimizerSteps: "u",
          },
        },
      },
    },
  },
  defaultNetwork: 'hardhat',

  networks: {

    hardhat: {},
    sepolia: {
      url: ALCHEMY_SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY1],
    },
    ethereum: {
      url: ALCHEMY_ETHEREUM_RPC_URL,
      accounts: [PRIVATE_KEY1],
    },
  },
  etherscan: {
    // API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: {
      sepolia: process.env.ETHERSCAN_API,
      mainnet: process.env.ETHERSCAN_API
    }
  },

};
