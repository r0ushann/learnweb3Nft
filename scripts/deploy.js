const {ethers} = require("hardhat");

require ("dotenv").config({path : ".env"});

async function main() {
  //URL from where we can extract the metadata for a LW3Punks
  const metadataURL = "ipfs://QmRTPVYF2Gh8EwiPs7tsJ7cK6HBKvpPcp84vUhRDwTQxHj";

  /**
   * A ContractFactory in ethers.js is an abstraction used tp deploy  new smart contracts,
   * so LW3PunksContract here is a factory for instances of our LW3Punks contracts.
   */
  const lw3PunksContract = await ethers.getContractFactory("Lw3Punks");

  // deploy the contract
  const deployedLw3PunksContract = await lw3PunksContract.deploy(metadataURL);

  await deployedLw3PunksContract.deployed();

  // print the address of the deployed contract 
  console.log("Lw3Punks Contract Address : ", deployedLw3PunksContract.address);
}

main()
.then(() =>process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});