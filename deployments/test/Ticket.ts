import { expect } from "chai";
import { ethers, network } from "hardhat";
import chai from "chai";
// import { solidity } from "ethereum-waffle";
// chai.use(solidity);


describe("Ticket", async function() {
    xit("Should be able to resell ticket to other address", async function() {
         const [_, addr1, addr2, addr3] = await ethers.getSigners();
         const Ticket = await ethers.getContractFactory("Ticket");
         const ticket = await Ticket.deploy();
         await ticket.deployed();
         const currentLevelOneHomeIdOne = await ticket.currentLevelOneHomeId();
         await ticket.connect(addr1).buySeatLevelOne(true, {value: ethers.utils.parseEther(`5`)});
         expect(await ticket.balanceOf(addr1.address)).to.equal(1); 
         expect(await ticket.ownerOf(1)).to.equal(addr1.address);
         await ticket.connect(addr2).buySeatLevelOne(false, { value: ethers.utils.parseEther(`5`) });
         expect(await ticket.balanceOf(addr2.address)).to.equal(1);
         expect(await ticket.ownerOf(101)).to.equal(addr2.address);
          await ticket.connect(addr3).buySeatLevelOne(false, { value: ethers.utils.parseEther(`5`) });
          expect(await ticket.balanceOf(addr3.address)).to.equal(1);
          expect(await ticket.ownerOf(102)).to.equal(addr3.address);
         const currentLevelOneHomeIdTwo = await ticket.currentLevelOneHomeId();
    })



    xit("Should be able to buy ticket from first seat level", async function () {
      const [_, addr1, addr2] = await ethers.getSigners();
      const Ticket = await ethers.getContractFactory("Ticket");
      const ticket = await Ticket.deploy();
      await ticket.deployed();
      const addr1BalanceOne = await addr1.getBalance();
      console.log(`Addr1 Balance Before Buying Ticket, ${ethers.utils.formatEther(addr1BalanceOne)}\n`);
      await ticket.connect(addr1).buySeatLevelOne(false, { value: ethers.utils.parseEther(`5`) });
      const contractBalance = await ticket.getContractBalance();
      console.log(`Contract Balance Before Resell, ${ethers.utils.formatEther(contractBalance)}\n`)
      expect(await ticket.balanceOf(addr1.address)).to.equal(1);
      expect(await ticket.ownerOf(101)).to.equal(addr1.address);
      const addr1BalanceThree = await addr1.getBalance();
      console.log(`Addr1 Balance After Buying Ticket, ${ethers.utils.formatEther(addr1BalanceThree)}\n`);
       const addr2BalanceOne = await addr2.getBalance();
       console.log(`Addr2 Balance One, ${ethers.utils.formatEther(addr2BalanceOne)}\n`);
      await ticket.connect(addr1).approve(addr2.address, 101);
      await ticket.connect(addr2).receiveTicketLevelOne(false, 101, addr1.address, {value: ethers.utils.parseEther(`5`)});
       expect(await ticket.balanceOf(addr2.address)).to.equal(1);
       expect(await ticket.ownerOf(101)).to.equal(addr2.address);
       expect(await ticket.balanceOf(addr1.address)).to.equal(0);
      const addr1BalanceTwo = await addr1.getBalance();
      console.log(`Addr1 Balance After Reselling Ticket, ${ethers.utils.formatEther(addr1BalanceTwo)}\n`);
       const addr2BalanceTwo = await addr2.getBalance();
       console.log(`Addr2 Balance One, ${ethers.utils.formatEther(addr2BalanceTwo)}\n`);
        const contractBalanceTwo = await ticket.getContractBalance();
        console.log(
          `Contract Balance After Resell, ${ethers.utils.formatEther(
            contractBalanceTwo
          )}\n`
        );
    });
})