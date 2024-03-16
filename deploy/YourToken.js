require('dotenv').config()
const hre = require("hardhat")

// Contract Deployer
async function main() {
  const [deployer] = await ethers.getSigners();

  const network = await ethers.provider.getNetwork();
  console.log("Deploying contract with the account  :", deployer.address);
  console.log("Network name                         :", network.name);
  console.log("Network chain id                     :", network.chainId);

  const contractDeployer1 = await ethers.deployContract("YourToken");

  if (contractDeployer1.waitForDeployment()) {
    console.log("ERC20 Token Deployed :", await contractDeployer1.getAddress());
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });