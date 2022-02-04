import { ethers } from "hardhat";

export const getProxyAddress = (name: string): string => {
  const addresses: { [key: string]: string } = {
    rinkeby: "0xf57b2c51ded3a29e6891aba85459d600256cf317",
    ethereum: "0xa5409ec958c83c3f309868babaca7c86dcb077c1",
  };
  return addresses[name];
};

export const deployStonedCookies = async () => {
  const [deployer] = await ethers.getSigners();
  const StonedCookies = await ethers.getContractFactory("StonedCookies");
  const stonedCookies = await StonedCookies.deploy();
  await stonedCookies.deployed();
  console.log("Network:", ethers.provider.network.name);
  console.log("StonedCookies address:", stonedCookies.address);
  console.log("Deployer:", deployer.address);
};

async function main() {
  deployStonedCookies();
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
