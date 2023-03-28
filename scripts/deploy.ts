import { ethers } from "hardhat";

const _feeToSetter: string = "0x53F145325113c2d9e5af35649b8bDC89AeD314C2";

async function main() {
  const Factory = await ethers.getContractFactory("ZKVaultFactory");
  const factory = await Factory.deploy(_feeToSetter);

  let [account] = await ethers.getSigners();
  let deployerAddress = account.address;
  console.log(`Deploying factory using ${deployerAddress}`);

  await factory.deployed();

  console.log(`Factory deployed to ${factory.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
