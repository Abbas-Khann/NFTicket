import { expect } from "chai";
import { ethers, network } from "hardhat";


describe("Ticket", async function() {
    xit("Should be able to resell ticket to other address", async function() {
         const [owner, addr1, addr2, addr3] = await ethers.getSigners();
         const Ticket = await ethers.getContractFactory("Ticket");
         const ticket = await Ticket.deploy(100000000000000);
         await ticket.deployed();
         await ticket.connect(addr1).buySeatLevelOne(true, {value: ethers.utils.parseEther(`5`)});
         expect(await ticket.balanceOf(addr1.address)).to.equal(1); 
         expect(await ticket.ownerOf(1)).to.equal(addr1.address);
         await ticket.connect(addr2).buySeatLevelOne(false, { value: ethers.utils.parseEther(`5`) });
         expect(await ticket.balanceOf(addr2.address)).to.equal(1);
         expect(await ticket.ownerOf(101)).to.equal(addr2.address);
          await ticket.connect(addr3).buySeatLevelOne(false, { value: ethers.utils.parseEther(`5`) });
          expect(await ticket.balanceOf(addr3.address)).to.equal(1);
          expect(await ticket.ownerOf(102)).to.equal(addr3.address);
    })



    xit("Should be able to buy ticket from first seat level", async function () {
      const [owner, addr1, addr2] = await ethers.getSigners();
      const Ticket = await ethers.getContractFactory("Ticket");
      const ticket = await Ticket.connect(owner).deploy(100000000000000);
      await ticket.deployed();
      const Resell = await ethers.getContractFactory("Resell");
      const resell = await Resell.connect(owner).deploy(100000000000000,ticket.address);
      await resell.deployed();
      await ticket.connect(owner).setResellContract(resell.address);
      await ticket.connect(addr1).buySeatLevelOne(false, { value: ethers.utils.parseEther(`5`) });
      const awayTicketsOwned = await ticket.connect(addr1).amountOfAwayTicketsMinted(1);
      await ticket.connect(addr1).approve(addr2.address, 101);
      await resell.connect(addr2).receiveTicketLevelOne(false, 101, addr1.address, {value: ethers.utils.parseEther(`5`)});
       const awayTicketsOwnedTwo = await ticket.connect(addr1).amountOfAwayTicketsMinted(1);
      console.log("First", awayTicketsOwned)
      console.log("Second", awayTicketsOwnedTwo)
      console.log(await ticket.connect(addr2).amountOfAwayTicketsMinted(1));
      console.log(await ticket.connect(addr2).amountOfHomeTicketsMinted(1));
    });

     xit("Should be able to buy ticket from first seat level", async function () {
       const [owner, addr1, addr2] = await ethers.getSigners();
       const Ticket = await ethers.getContractFactory("Ticket");
       const ticket = await Ticket.connect(owner).deploy(100000000000000);
       await ticket.deployed();
       const Refund = await ethers.getContractFactory("Refund");
       const refund = await Refund.connect(owner).deploy(100000000000000, ticket.address);
       await refund.deployed();
       await ticket.connect(owner).setRefundContract(refund.address);
       const balanceOne = await addr1.getBalance()
       console.log("One", ethers.utils.formatEther(balanceOne))
       await ticket.connect(addr1).buySeatLevelOne(false, { value: ethers.utils.parseEther(`5`) });
        const balanceThree = await addr1.getBalance();
        console.log("Two", ethers.utils.formatEther(balanceThree));
       await refund.connect(addr1).refundBackToContractLevelOne(false, 101);
       const balanceTwo = await addr1.getBalance();
       console.log("Three", ethers.utils.formatEther(balanceTwo));
       const theOwner = await ticket.ownerOf(101);
       expect(theOwner).to.equal(ticket.address);
     });
      
     it("Should be able to buy ticket from first seat level", async function () {
       const [owner, addr1, addr2] = await ethers.getSigners();
       const Ticket = await ethers.getContractFactory("Ticket");
       const ticket = await Ticket.connect(owner).deploy(100000000000000);
       await ticket.deployed();
       const Refund = await ethers.getContractFactory("Refund");
       const refund = await Refund.connect(owner).deploy(100000000000000, ticket.address);
       await refund.deployed();
       await ticket.connect(owner).setRefundContract(refund.address);
       const RefundTicket = await ethers.getContractFactory("ReceiveRefundedTicketFromContract");
       const refundTicket = await RefundTicket.connect(owner).deploy(100000000000000, ticket.address);
       await refundTicket.deployed();
       await ticket.connect(owner).setReceivedRefundTicketContract(refundTicket.address);
       await ticket.connect(addr1).buySeatLevelOne(false, { value: ethers.utils.parseEther(`5`) });
       await refund.connect(addr1).refundBackToContractLevelOne(false, 101);
       await refundTicket.connect(addr2).refundTicketLevelOne(false, 101, {value: ethers.utils.parseEther(`5`)});
     });


})