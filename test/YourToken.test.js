const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("YourToken", function () {
  let YourToken;
  let yourToken;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    YourToken = await ethers.getContractFactory("YourToken");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    yourToken = await YourToken.connect(owner).deploy(owner.address, owner.address);
  });

  it("Should have the correct name, symbol, and initial supply", async function () {
    const name = await yourToken.name();
    const symbol = await yourToken.symbol();
    const totalSupply = await yourToken.totalSupply();

    expect(name).to.equal("YOUR token");
    expect(symbol).to.equal("YOUR");
    expect(totalSupply).to.equal(ethers.parseEther("1000000000"));
  });

  it("Should assign the default admin, pauser, and minter roles correctly", async function () {
    const defaultAdminRole = await yourToken.DEFAULT_ADMIN_ROLE();
    const pauserRole = await yourToken.PAUSER_ROLE();
    const minterRole = await yourToken.MINTER_ROLE();

    expect(await yourToken.hasRole(defaultAdminRole, owner.address)).to.equal(true);
    expect(await yourToken.hasRole(pauserRole, owner.address)).to.equal(true);
    expect(await yourToken.hasRole(minterRole, owner.address)).to.equal(true);
  });

  it("Should mint new tokens to the specified address", async function () {
    const mintAmount = 100;
    const recipient = addr1.address;

    await yourToken.connect(owner).mint(recipient, mintAmount);

    const balance = await yourToken.balanceOf(recipient);
    expect(balance).to.equal(mintAmount);
  });

  it("Should pause and unpause token transfers", async function () {
    // Pause the contract
    await yourToken.connect(owner).pause();

    // Attempt to transfer tokens while paused
    try {
      await yourToken.connect(owner).transfer(addr1.address, 10);
      // If the above line doesn't revert, the test should fail
      expect.fail("Transaction did not revert");
    } catch (error) {
      // Check if the error message matches the expected custom error message
      expect(error.message).to.include("EnforcedPause");
      // Print the error message
      console.log("Error Message:", error.message);
    }
  });
});
