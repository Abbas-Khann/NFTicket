import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
//import "@openzeppelin/contracts/utils/Counters.sol";
//Create a factory where one person can create a contract per world cup event
//define the cost of the tickets(both home and away ticket)
//People are not allowed to transfer/resell nft for a higher price
//Set a max to the amount of home and away tickets that can be minted or make it limitless
//What should events/subgraph be based on????


//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;
error INSUFFICIENT_FUNDS();
error NO_HOME_SEATS_AVAILABLE();
error NO_AWAY_SEATS_AVAILABLE();
error TICKETS_MINTED_REACHED_MAX();

contract WorldCup is ERC721 {
   mapping(uint => mapping(address => uint)) private homeTicketsOwned; //seatLevel => owner => amount minted
   mapping(uint => mapping(address => uint)) private awayTicketsOwned; //seatLevel => owner => amount minted
   mapping(bool => mapping(uint => uint)) private seatLevelCount; //HomeOrAway => Seat Level => amount minted
    constructor() ERC721("hello", "hello")  {
       
    }
   uint public LEVEL_ONE_HOME_SEATS_BOUGHT;
   uint public LEVEL_ONE_AWAY_SEATS_BOUGHT;
   uint constant public seatLevelTwoPrice = 4 ether;
   uint constant public seatLevelThreePrice = 3 ether;
   uint constant public seatLevelFourPrice = 2 ether;
   uint constant public seatLevelFivePrice = 1 ether;
   uint constant public seatLevelSixPrice = 0.5 ether;
   uint constant public seatLevelSevenPrice = 0.25 ether;
   uint constant public seatLevelEightPrice = 0.125 ether;
   uint constant public seatLevelNinePrice = 0.1 ether;
   uint constant public seatLevelTenPrice = 0.05 ether;

//create a function based on seatLevel instead of just having one main seat function
   function buySeatLevelOne(bool _homeOrAway) external payable {
    uint balance = balanceOf(msg.sender);
    if(balance == 2) {
      revert TICKETS_MINTED_REACHED_MAX();
    }
     if(msg.value < 5 ether) {
       revert INSUFFICIENT_FUNDS();
     }

      if(_homeOrAway == true) {
       if(LEVEL_ONE_HOME_SEATS_BOUGHT >= 100) {
         revert NO_HOME_SEATS_AVAILABLE();
       }
       homeTicketsOwned[1][msg.sender]++;
       _safeMint(msg.sender, seatLevelCount[true][1]);

     } else if(_homeOrAway == false) {
        if(LEVEL_ONE_AWAY_SEATS_BOUGHT >= 100) {
         revert NO_AWAY_SEATS_AVAILABLE();
       }
        awayTicketsOwned[1][msg.sender]++;
        _safeMint(msg.sender, seatLevelCount[false][1]);
     }
     _homeOrAway == true ? LEVEL_ONE_HOME_SEATS_BOUGHT++ : LEVEL_ONE_AWAY_SEATS_BOUGHT++;
   }

   function reSellTicket(uint _seatLevel) external {
     
   }
   
   
   function amountOfHomeTicketsMinted(uint _seatLevel) external view returns(uint) {
      return homeTicketsOwned[_seatLevel][msg.sender];
   }

   function amountOfAwayTicketsMinted(uint _seatLevel) external view returns(uint) {
      return awayTicketsOwned[_seatLevel][msg.sender];
   }


   function returnAllNFTsMinted() external view returns(uint) {

   }
   
}