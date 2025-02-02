const hre = require("hardhat");

async function main() {
  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");

  const simpleStorage = await SimpleStorage.deploy();

  await simpleStorage.waitForDeployment();

  const contractAddress = await simpleStorage.getAddress();

  console.log("SimpleStorage deployed to:", contractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});