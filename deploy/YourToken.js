require('dotenv').config()
const hre = require("hardhat")

// Contract Deployer
async function main() {
  const [deployer] = await ethers.getSigners();

  const network = await ethers.provider.getNetwork();
  console.log("Deploying contract with the account  :", deployer.address);
  console.log("Network name                         :", network.name);
  console.log("Network chain id                     :", network.chainId);

  const adminAddress = "0x3Ec5faF545030cdE1f3D887F876061e0B0Ffa1a0";
  const tokenHoldingAddress = "0x3Ec5faF545030cdE1f3D887F876061e0B0Ffa1a0";

  const contractDeployer1 = await ethers.deployContract("YourToken", [
    adminAddress, // Initial Admin
    tokenHoldingAddress, // Initial Owner holding all tokens
  ]);

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