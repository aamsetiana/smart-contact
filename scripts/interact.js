const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

  const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");
  const simpleStorage = SimpleStorage.attach(contractAddress);

  // Menyimpan data
  let tx = await simpleStorage.set(42);
  await tx.wait();
  console.log("Data disimpan!");

  // Membaca data
  let storedData = await simpleStorage.get();
  console.log("Data tersimpan:", storedData.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
