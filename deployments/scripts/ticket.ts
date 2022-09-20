const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const Ticket = await ethers.getContractFactory("Ticket");
  const ticket = await Ticket.deploy(1000000000000000);

  await ticket.deployed();

  console.log("Ticket deployed to:", ticket.address);

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})
