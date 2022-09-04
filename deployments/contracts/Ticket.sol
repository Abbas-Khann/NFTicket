import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
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
error HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
error AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
error CONTRACT_IS_PAUSED();
//Seat Level One Home Will be token ids 1-100
//Seat Level One Away will be token ids 101-200
contract WorldCup is ERC721, Ownable {
   mapping(uint => mapping(address => uint)) private homeTicketsOwned; //seatLevel => owner => amount minted
   mapping(uint => mapping(address => uint)) private awayTicketsOwned; //seatLevel => owner => amount minted
   mapping(bool => mapping(uint => uint)) private seatLevelCount; //HomeOrAway => Seat Level => amount minted
    constructor() ERC721("hello", "hello")  {
       
    }

   uint public currentLevelOneHomeId = 1;
   uint public currentLevelOneAwayId = 101;
   bool paused;
   uint constant public seatLevelTwoPrice = 4 ether;
   uint constant public seatLevelThreePrice = 3 ether;
   uint constant public seatLevelFourPrice = 2 ether;
   uint constant public seatLevelFivePrice = 1 ether;
   uint constant public seatLevelSixPrice = 0.5 ether;
   uint constant public seatLevelSevenPrice = 0.25 ether;
   uint constant public seatLevelEightPrice = 0.125 ether;
   uint constant public seatLevelNinePrice = 0.1 ether;
   uint constant public seatLevelTenPrice = 0.05 ether;

   modifier onlyWhenNotPaused {
      if(paused == true) {
         revert CONTRACT_IS_PAUSED();
      }
      _;
   }

//create a function based on seatLevel instead of just having one main seat function
   function buySeatLevelOne(bool _homeOrAway) onlyWhenNotPaused external payable {
    uint balance = balanceOf(msg.sender);
    if(balance == 2) {
      revert TICKETS_MINTED_REACHED_MAX();
    }
     if(msg.value < 5 ether) {
       revert INSUFFICIENT_FUNDS();
     }

      if(_homeOrAway == true) {
       if(currentLevelOneHomeId >= 100) {
         revert NO_HOME_SEATS_AVAILABLE();
       }
       homeTicketsOwned[1][msg.sender]++;
       seatLevelCount[true][1]++;
       _safeMint(msg.sender, currentLevelOneHomeId);
       currentLevelOneHomeId++;

     } else if(_homeOrAway == false) {
        if(currentLevelOneAwayId >= 200) {
         revert NO_AWAY_SEATS_AVAILABLE();
       }
         awayTicketsOwned[1][msg.sender]++;
         seatLevelCount[false][1]++;
        _safeMint(msg.sender, currentLevelOneAwayId);
        currentLevelOneAwayId++;
     }
   }

   function receiveTicket(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused external payable {
      if(msg.value != 5 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 1 || _tokenId > 100) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
     } else if(_homeOrAway == false) {
       if(_tokenId < 101 || _tokenId > 200) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
     }
      require(_isApprovedOrOwner(_msgSender(), _tokenId), "ERC721: caller is not token owner or approved");
       _safeTransfer(_from, msg.sender, _tokenId, "");
      (bool success, ) = _from.call{value: 5 ether}("");
      require(success, "Failed to send ether");
   }

   function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override onlyOwner {
        //solhint-disable-next-line max-line-length
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: caller is not token owner or approved");
        _transfer(from, to, tokenId);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override onlyOwner {
        safeTransferFrom(from, to, tokenId, "");
    }

     function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory data
    ) public override onlyOwner {
        require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: caller is not token owner or approved");
        _safeTransfer(from, to, tokenId, data);
    }
   
   function setPause(bool _value) external onlyOwner {
      paused = _value;
   }
   
   function amountOfHomeTicketsMinted(uint _seatLevel) external view returns(uint) {
      return homeTicketsOwned[_seatLevel][msg.sender];
   }

   function amountOfAwayTicketsMinted(uint _seatLevel) external view returns(uint) {
      return awayTicketsOwned[_seatLevel][msg.sender];
   }


   function returnAllNFTsMinted() external view returns(uint) {

   }
   
    function withdraw() public onlyOwner {
        address _owner = owner();
        uint256 amount = address(this).balance;
        (bool sent, ) = _owner.call{value: amount}("");
        require(sent, "Failed to send Ether");
    }

   receive() external payable{}
   fallback() external payable{}
}