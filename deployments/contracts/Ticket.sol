import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "../interfaces/IResell.sol";
import "../interfaces/IRefund.sol";
import "../interfaces/IReceiveRefundedTicketFromContract.sol";

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

error INSUFFICIENT_FUNDS();
error NO_HOME_SEATS_AVAILABLE();
error NO_AWAY_SEATS_AVAILABLE();
error TICKETS_MINTED_REACHED_MAX();
error HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
error AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
error CONTRACT_IS_PAUSED();
error EVENT_HAS_ALREADY_STARTED();
error EVENT_HASNT_STARTED_YET();
error NOT_ALLOWED_TO_TRANSFER();

contract Ticket is ERC721, Ownable, ReentrancyGuard {
  using Strings for uint256;
   event BuyTicket(address From, bool HomeOrAway, uint SeatLevel, uint TokenId, uint Amount);
   mapping(uint => mapping(address => uint)) public homeTicketsOwned; //seatLevel => owner => amount minted
   mapping(uint => mapping(address => uint)) public awayTicketsOwned; //seatLevel => owner => amount minted
   mapping(bool => mapping(uint => uint)) public seatLevelCount; //HomeOrAway => Seat Level => amount minted
   address public resellContract;
   address public refundContract;
   address public receiveRefundedTicketContract;
   uint immutable timeUntilEventStarts;
    constructor(uint _time) ERC721("WCTicket", "WCT")  {
       timeUntilEventStarts = block.timestamp + _time;
    }
   bool paused;
   uint  currentLevelOneHomeId = 1;
   uint  currentLevelOneAwayId = 101;
   uint  currentLevelTwoHomeId = 201;
   uint  currentLevelTwoAwayId = 301;
   uint  currentLevelThreeHomeId = 401;
   uint  currentLevelThreeAwayId = 501;
   uint  currentLevelFourHomeId = 601;
   uint  currentLevelFourAwayId = 701;
   uint  currentLevelFiveHomeId = 801;
   uint  currentLevelFiveAwayId = 901;
   uint  currentLevelSixHomeId = 1001;
   uint  currentLevelSixAwayId = 1101;
   uint  currentLevelSevenHomeId = 1201;
   uint  currentLevelSevenAwayId = 1301;
   uint  currentLevelEightHomeId = 1401;
   uint  currentLevelEightAwayId = 1501;
   uint  currentLevelNineHomeId = 1601;
   uint  currentLevelNineAwayId = 1701;
   uint  currentLevelTenHomeId = 1801;
   uint  currentLevelTenAwayId = 1901;

   modifier onlyWhenNotPaused {
      if(paused == true) {
         revert CONTRACT_IS_PAUSED();
      }
      _;
   }

   modifier balanceUnderThree {
     uint balance = balanceOf(msg.sender);
     if(balance == 2) {
      revert TICKETS_MINTED_REACHED_MAX();
     }
     _;
   }

   modifier onlyIfEventHasntStarted {
      if(block.timestamp > timeUntilEventStarts) {
        revert EVENT_HAS_ALREADY_STARTED();
      }
      _;
   }

   modifier onlyAfterEventHasStarted {
       if(block.timestamp < timeUntilEventStarts) {
        revert EVENT_HASNT_STARTED_YET();
      }
      _;
   }

   function buySeatLevelOne(bool _homeOrAway) onlyWhenNotPaused onlyIfEventHasntStarted nonReentrant balanceUnderThree external payable {
     if(msg.value != 5 ether) {
       revert INSUFFICIENT_FUNDS();
     }
      if(_homeOrAway == true) {
       if(currentLevelOneHomeId > 100) {
         revert NO_HOME_SEATS_AVAILABLE();
       }
       homeTicketsOwned[1][msg.sender]++;
       seatLevelCount[true][1]++;
       _safeMint(msg.sender, currentLevelOneHomeId);
        emit BuyTicket(msg.sender, true, 1, currentLevelOneHomeId, msg.value);
       currentLevelOneHomeId++;
     } else if(_homeOrAway == false) {
        if(currentLevelOneAwayId > 200) {
         revert NO_AWAY_SEATS_AVAILABLE();
       }
         awayTicketsOwned[1][msg.sender]++;
         seatLevelCount[false][1]++;
        _safeMint(msg.sender, currentLevelOneAwayId);
         emit BuyTicket(msg.sender, false, 1, currentLevelOneAwayId, msg.value);
        currentLevelOneAwayId++;
     }
   }

    function buySeatLevelTwo(bool _homeOrAway) onlyWhenNotPaused onlyIfEventHasntStarted nonReentrant balanceUnderThree external payable {
     if(msg.value != 4 ether) {
       revert INSUFFICIENT_FUNDS();
     }
      if(_homeOrAway == true) {
       if(currentLevelTwoHomeId > 300) {
         revert NO_HOME_SEATS_AVAILABLE();
       }
       homeTicketsOwned[2][msg.sender]++;
       seatLevelCount[true][2]++;
       _safeMint(msg.sender, currentLevelTwoHomeId);
        emit BuyTicket(msg.sender, true, 2, currentLevelTwoHomeId, msg.value);
       currentLevelTwoHomeId++;
     } else if(_homeOrAway == false) {
        if(currentLevelTwoAwayId > 400) {
         revert NO_AWAY_SEATS_AVAILABLE();
       }
         awayTicketsOwned[2][msg.sender]++;
         seatLevelCount[false][2]++;
        _safeMint(msg.sender, currentLevelTwoAwayId);
         emit BuyTicket(msg.sender, false, 2, currentLevelTwoAwayId, msg.value);
        currentLevelTwoAwayId++;
     }
   }

   function buySeatLevelThree(bool _homeOrAway) onlyWhenNotPaused onlyIfEventHasntStarted nonReentrant balanceUnderThree external payable {
     if(msg.value != 3 ether) {
       revert INSUFFICIENT_FUNDS();
     }
      if(_homeOrAway == true) {
       if(currentLevelThreeHomeId > 500) {
         revert NO_HOME_SEATS_AVAILABLE();
       }
       homeTicketsOwned[3][msg.sender]++;
       seatLevelCount[true][3]++;
       _safeMint(msg.sender, currentLevelThreeHomeId);
        emit BuyTicket(msg.sender, true, 3, currentLevelThreeHomeId, msg.value);
       currentLevelThreeHomeId++;
     } else if(_homeOrAway == false) {
        if(currentLevelThreeAwayId > 600) {
         revert NO_AWAY_SEATS_AVAILABLE();
       }
         awayTicketsOwned[3][msg.sender]++;
         seatLevelCount[false][3]++;
        _safeMint(msg.sender, currentLevelThreeAwayId);
         emit BuyTicket(msg.sender, false, 3, currentLevelThreeAwayId, msg.value);
        currentLevelThreeAwayId++;
     }
   }

   function buySeatLevelFour(bool _homeOrAway) onlyWhenNotPaused onlyIfEventHasntStarted nonReentrant balanceUnderThree external payable {
     if(msg.value != 2 ether) {
       revert INSUFFICIENT_FUNDS();
     }
      if(_homeOrAway == true) {
       if(currentLevelFourHomeId > 700) {
         revert NO_HOME_SEATS_AVAILABLE();
       }
       homeTicketsOwned[4][msg.sender]++;
       seatLevelCount[true][4]++;
       _safeMint(msg.sender, currentLevelFourHomeId);
        emit BuyTicket(msg.sender, true, 4, currentLevelFourHomeId, msg.value);
       currentLevelFourHomeId++;
     } else if(_homeOrAway == false) {
        if(currentLevelFourAwayId > 800) {
         revert NO_AWAY_SEATS_AVAILABLE();
       }
         awayTicketsOwned[4][msg.sender]++;
         seatLevelCount[false][4]++;
        _safeMint(msg.sender, currentLevelFourAwayId);
         emit BuyTicket(msg.sender, false, 4, currentLevelFourAwayId, msg.value);
        currentLevelFourAwayId++;
     }
   }

   function buySeatLevelFive(bool _homeOrAway) onlyWhenNotPaused onlyIfEventHasntStarted nonReentrant balanceUnderThree external payable {
     if(msg.value != 1 ether) {
       revert INSUFFICIENT_FUNDS();
     }
      if(_homeOrAway == true) {
       if(currentLevelFiveHomeId > 900) {
         revert NO_HOME_SEATS_AVAILABLE();
       }
       homeTicketsOwned[5][msg.sender]++;
       seatLevelCount[true][5]++;
       _safeMint(msg.sender, currentLevelFiveHomeId);
        emit BuyTicket(msg.sender, true, 5, currentLevelFiveHomeId, msg.value);
       currentLevelFiveHomeId++;
     } else if(_homeOrAway == false) {
        if(currentLevelFiveAwayId > 1000) {
         revert NO_AWAY_SEATS_AVAILABLE();
       }
         awayTicketsOwned[5][msg.sender]++;
         seatLevelCount[false][5]++;
        _safeMint(msg.sender, currentLevelFiveAwayId);
         emit BuyTicket(msg.sender, false, 5, currentLevelFiveAwayId, msg.value);
        currentLevelFiveAwayId++;
     }
   }

    function buySeatLevelSix(bool _homeOrAway) onlyWhenNotPaused onlyIfEventHasntStarted nonReentrant balanceUnderThree external payable {
     if(msg.value != 0.5 ether) {
       revert INSUFFICIENT_FUNDS();
     }
      if(_homeOrAway == true) {
       if(currentLevelSixHomeId > 1100) {
         revert NO_HOME_SEATS_AVAILABLE();
       }
       homeTicketsOwned[6][msg.sender]++;
       seatLevelCount[true][6]++;
       _safeMint(msg.sender, currentLevelSixHomeId);
        emit BuyTicket(msg.sender, true, 6, currentLevelSixHomeId, msg.value);
       currentLevelSixHomeId++;
     } else if(_homeOrAway == false) {
        if(currentLevelSixAwayId > 1200) {
         revert NO_AWAY_SEATS_AVAILABLE();
       }
         awayTicketsOwned[6][msg.sender]++;
         seatLevelCount[false][6]++;
        _safeMint(msg.sender, currentLevelSixAwayId);
         emit BuyTicket(msg.sender, false, 6, currentLevelSixAwayId, msg.value);
        currentLevelSixAwayId++;
     }
   }

    function buySeatLevelSeven(bool _homeOrAway) onlyWhenNotPaused onlyIfEventHasntStarted nonReentrant balanceUnderThree external payable {
     if(msg.value != 0.25 ether) {
       revert INSUFFICIENT_FUNDS();
     }
      if(_homeOrAway == true) {
       if(currentLevelSevenHomeId > 1300) {
         revert NO_HOME_SEATS_AVAILABLE();
       }
       homeTicketsOwned[7][msg.sender]++;
       seatLevelCount[true][7]++;
       _safeMint(msg.sender, currentLevelSevenHomeId);
        emit BuyTicket(msg.sender, true, 7, currentLevelSevenHomeId, msg.value);
       currentLevelSevenHomeId++;
     } else if(_homeOrAway == false) {
        if(currentLevelSevenAwayId > 1400) {
         revert NO_AWAY_SEATS_AVAILABLE();
       }
         awayTicketsOwned[7][msg.sender]++;
         seatLevelCount[false][7]++;
        _safeMint(msg.sender, currentLevelSevenAwayId);
         emit BuyTicket(msg.sender, false, 7, currentLevelSevenAwayId, msg.value);
        currentLevelSevenAwayId++;
     }
   }

   function buySeatLevelEight(bool _homeOrAway) onlyWhenNotPaused onlyIfEventHasntStarted nonReentrant balanceUnderThree external payable {
     if(msg.value != 0.125 ether) {
       revert INSUFFICIENT_FUNDS();
     }
      if(_homeOrAway == true) {
       if(currentLevelEightHomeId > 1500) {
         revert NO_HOME_SEATS_AVAILABLE();
       }
       homeTicketsOwned[8][msg.sender]++;
       seatLevelCount[true][8]++;
       _safeMint(msg.sender, currentLevelEightHomeId);
        emit BuyTicket(msg.sender, true, 8, currentLevelEightHomeId, msg.value);
       currentLevelEightHomeId++;
     } else if(_homeOrAway == false) {
        if(currentLevelEightAwayId > 1600) {
         revert NO_AWAY_SEATS_AVAILABLE();
       }
         awayTicketsOwned[8][msg.sender]++;
         seatLevelCount[false][8]++;
        _safeMint(msg.sender, currentLevelEightAwayId);
         emit BuyTicket(msg.sender, false, 8, currentLevelEightAwayId, msg.value);
        currentLevelEightAwayId++;
     }
   }

   function buySeatLevelNine(bool _homeOrAway) onlyWhenNotPaused onlyIfEventHasntStarted nonReentrant balanceUnderThree external payable {
     if(msg.value != 0.1 ether) {
       revert INSUFFICIENT_FUNDS();
     }
      if(_homeOrAway == true) {
       if(currentLevelNineHomeId > 1700) {
         revert NO_HOME_SEATS_AVAILABLE();
       }
       homeTicketsOwned[9][msg.sender]++;
       seatLevelCount[true][9]++;
       _safeMint(msg.sender, currentLevelNineHomeId);
        emit BuyTicket(msg.sender, true, 9, currentLevelNineHomeId, msg.value);
       currentLevelNineHomeId++;
     } else if(_homeOrAway == false) {
        if(currentLevelNineAwayId > 1800) {
         revert NO_AWAY_SEATS_AVAILABLE();
       }
         awayTicketsOwned[9][msg.sender]++;
         seatLevelCount[false][9]++;
        _safeMint(msg.sender, currentLevelNineAwayId);
         emit BuyTicket(msg.sender, false, 9, currentLevelNineAwayId, msg.value);
        currentLevelNineAwayId++;
     }
   }

    function buySeatLevelTen(bool _homeOrAway) onlyWhenNotPaused onlyIfEventHasntStarted nonReentrant balanceUnderThree external payable {
     if(msg.value != 0.05 ether) {
       revert INSUFFICIENT_FUNDS();
     }
      if(_homeOrAway == true) {
       if(currentLevelTenHomeId > 1900) {
         revert NO_HOME_SEATS_AVAILABLE();
       }
       homeTicketsOwned[10][msg.sender]++;
       seatLevelCount[true][10]++;
       _safeMint(msg.sender, currentLevelTenHomeId);
        emit BuyTicket(msg.sender, true, 10, currentLevelTenHomeId, msg.value);
       currentLevelTenHomeId++;
     } else if(_homeOrAway == false) {
        if(currentLevelTenAwayId > 2000) {
         revert NO_AWAY_SEATS_AVAILABLE();
       }
         awayTicketsOwned[10][msg.sender]++;
         seatLevelCount[false][10]++;
        _safeMint(msg.sender, currentLevelTenAwayId);
         emit BuyTicket(msg.sender, false, 10, currentLevelTenAwayId, msg.value);
        currentLevelTenAwayId++;
     }
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
    ) public override onlyOwner {
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

    function receiveRefundedTicket(address to, uint256 tokenId, bool homeOrAway, uint seatLevel) public {
    bool value = IReceiveRefundedTicketFromContract(receiveRefundedTicketContract).areYouAllowedToReceiveTicketFromContract();
    if(value == false) {
      revert NOT_ALLOWED_TO_TRANSFER();
    }
        if(homeOrAway == true) {
        homeTicketsOwned[seatLevel][to]++;
     } else if(homeOrAway == false) {
        awayTicketsOwned[seatLevel][to]++;
     }
     _transfer(address(this), to, tokenId);
    }

    function refundTicketToContract(
        address from,
        uint256 tokenId,
        bool homeOrAway,
        uint seatLevel
      ) public {
    bool value = IRefund(refundContract).areYouAllowedToRefund();
    if(value == false) {
      revert NOT_ALLOWED_TO_TRANSFER();
    }
      if(homeOrAway == true) {
        homeTicketsOwned[seatLevel][from]--;
     } else if(homeOrAway == false) {
        awayTicketsOwned[seatLevel][from]--;
     }
      if(seatLevel == 1) {
      (bool success, ) = payable(from).call{value: 5 ether}("");
      require(success, "Failed to send ether");
     } else if(seatLevel == 2) {
      (bool success, ) = payable(from).call{value: 4 ether}("");
      require(success, "Failed to send ether");
     } else if(seatLevel == 3) {
      (bool success, ) = payable(from).call{value: 3 ether}("");
      require(success, "Failed to send ether");
     } else if(seatLevel == 4) {
       (bool success, ) = payable(from).call{value: 2 ether}("");
        require(success, "Failed to send ether");
     } else if(seatLevel == 5) {
        (bool success, ) = payable(from).call{value: 1 ether}("");
        require(success, "Failed to send ether");
     } else if(seatLevel == 6) {
        (bool success, ) = payable(from).call{value: 0.5 ether}("");
        require(success, "Failed to send ether");
     } else if(seatLevel == 7) {
        (bool success, ) = payable(from).call{value: 0.25 ether}("");
        require(success, "Failed to send ether");
     } else if(seatLevel == 8) {
        (bool success, ) = payable(from).call{value: 0.125 ether}("");
        require(success, "Failed to send ether");
     } else if(seatLevel == 9) {
       (bool success, ) = payable(from).call{value: 0.1 ether}("");
        require(success, "Failed to send ether");
     } else if(seatLevel == 10) {
        (bool success, ) = payable(from).call{value: 0.05 ether}("");
        require(success, "Failed to send ether");
     }
     _transfer(from, address(this), tokenId);
   }


     function transferTicket(
        address from,
        address to,
        uint256 tokenId,
        bytes memory data,
        bool homeOrAway, 
        uint seatLevel
    ) public onlyWhenNotPaused {
    bool value = IResell(resellContract).areYouAllowedToTransfer();
    if(value == false) {
      revert NOT_ALLOWED_TO_TRANSFER();
    }
      if(homeOrAway == true) {
        homeTicketsOwned[seatLevel][from]--;
        homeTicketsOwned[seatLevel][to]++;
     } else if(homeOrAway == false) {
        awayTicketsOwned[seatLevel][from]--;
        awayTicketsOwned[seatLevel][to]++;
     }
        address approvedTo = getApproved(tokenId);
        require(approvedTo == to, "ERC721: caller is not token owner or approved");
        _safeTransfer(from, to, tokenId, data);
    }
   
   function setPause(bool _value) external onlyOwner {
      paused = _value;
   }

   function setResellContract(address _resellContract) external onlyOwner {
     resellContract = _resellContract;
   }

    function setRefundContract(address _refundContract) external onlyOwner {
      refundContract = _refundContract;
   }

    function setReceivedRefundTicketContract(address _receiveRefundedTicketContract) external onlyOwner {
      receiveRefundedTicketContract = _receiveRefundedTicketContract;
   }
   
   function amountOfHomeTicketsMinted(uint _seatLevel) external view returns(uint) {
      return homeTicketsOwned[_seatLevel][msg.sender];
   }

   function amountOfAwayTicketsMinted(uint _seatLevel) external view returns(uint) {
      return awayTicketsOwned[_seatLevel][msg.sender];
   }

   function homeSeatLevelCount(uint _seatLevel) external view returns(uint) {
      return seatLevelCount[true][_seatLevel];
   }

   function awaySeatLevelCount(uint _seatLevel) external view returns(uint) {
      return seatLevelCount[false][_seatLevel];
   }

   function _baseURI() internal view virtual override returns (string memory) {
        return "https://eth-online.skalenodes.com/fs/hackathon-content-live-vega/bb7b095d779621cc4db92cdebd08f0a87fba1d40/";
    }

      function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        _requireMinted(tokenId);

        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : "";
    }
   
    function withdraw() external onlyOwner onlyAfterEventHasStarted {
        address _owner = owner();
        uint256 amount = address(this).balance;
        (bool sent, ) = _owner.call{value: amount}("");
        require(sent, "Failed to send Ether");
    }

   receive() external payable{}
   fallback() external payable{}
}