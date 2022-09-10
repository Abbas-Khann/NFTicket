import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
//Create a factory where one person can create a contract per world cup event

//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

error INSUFFICIENT_FUNDS();
error NO_HOME_SEATS_AVAILABLE();
error NO_AWAY_SEATS_AVAILABLE();
error TICKETS_MINTED_REACHED_MAX();
error HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
error AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
error CONTRACT_IS_PAUSED();

contract Ticket is ERC721, Ownable {
   event BuyTicket(address From, bool HomeOrAway, uint SeatLevel, uint TokenId, uint Amount);
   event ResellTicket(address From, address To, bool HomeOrAway, uint SeatLevel, uint TokenId, uint Amount);
   mapping(uint => mapping(address => uint)) private homeTicketsOwned; //seatLevel => owner => amount minted
   mapping(uint => mapping(address => uint)) private awayTicketsOwned; //seatLevel => owner => amount minted
   mapping(bool => mapping(uint => uint)) private seatLevelCount; //HomeOrAway => Seat Level => amount minted
    constructor() ERC721("", "")  {
       
    }
   bool paused;
   uint public currentLevelOneHomeId = 1;
   uint public currentLevelOneAwayId = 101;
   uint public currentLevelTwoHomeId = 201;
   uint public currentLevelTwoAwayId = 301;
   uint public currentLevelThreeHomeId = 401;
   uint public currentLevelThreeAwayId = 501;
   uint public currentLevelFourHomeId = 601;
   uint public currentLevelFourAwayId = 701;
   uint public currentLevelFiveHomeId = 801;
   uint public currentLevelFiveAwayId = 901;
   uint public currentLevelSixHomeId = 1001;
   uint public currentLevelSixAwayId = 1101;
   uint public currentLevelSevenHomeId = 1201;
   uint public currentLevelSevenAwayId = 1301;
   uint public currentLevelEightHomeId = 1401;
   uint public currentLevelEightAwayId = 1501;
   uint public currentLevelNineHomeId = 1601;
   uint public currentLevelNineAwayId = 1701;
   uint public currentLevelTenHomeId = 1801;
   uint public currentLevelTenAwayId = 1901;

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
//create a function based on seatLevel instead of just having one main seat function
   function buySeatLevelOne(bool _homeOrAway) onlyWhenNotPaused balanceUnderThree external payable {
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

   function receiveTicketLevelOne(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused external payable {
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
      emit ResellTicket(_from, msg.sender, _homeOrAway, 1, _tokenId, msg.value);
   }

    function buySeatLevelTwo(bool _homeOrAway) onlyWhenNotPaused balanceUnderThree external payable {
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

    function receiveTicketLevelTwo(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused external payable {
      if(msg.value != 4 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 201 || _tokenId > 300) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
     } else if(_homeOrAway == false) {
       if(_tokenId < 301 || _tokenId > 400) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
     }
      require(_isApprovedOrOwner(_msgSender(), _tokenId), "ERC721: caller is not token owner or approved");
       _safeTransfer(_from, msg.sender, _tokenId, "");
      (bool success, ) = _from.call{value: 4 ether}("");
      require(success, "Failed to send ether");
      emit ResellTicket(_from, msg.sender, _homeOrAway, 2, _tokenId, msg.value);
   }

   function buySeatLevelThree(bool _homeOrAway) onlyWhenNotPaused balanceUnderThree external payable {
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

    function receiveTicketLevelThree(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused external payable {
      if(msg.value != 3 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 401 || _tokenId > 500) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
     } else if(_homeOrAway == false) {
       if(_tokenId < 501 || _tokenId > 600) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
     }
      require(_isApprovedOrOwner(_msgSender(), _tokenId), "ERC721: caller is not token owner or approved");
       _safeTransfer(_from, msg.sender, _tokenId, "");
      (bool success, ) = _from.call{value: 3 ether}("");
      require(success, "Failed to send ether");
      emit ResellTicket(_from, msg.sender, _homeOrAway, 3, _tokenId, msg.value);
   }

   function buySeatLevelFour(bool _homeOrAway) onlyWhenNotPaused balanceUnderThree external payable {
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

     function receiveTicketLevelFour(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused external payable {
      if(msg.value != 2 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 601 || _tokenId > 700) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
     } else if(_homeOrAway == false) {
       if(_tokenId < 701 || _tokenId > 800) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
     }
      require(_isApprovedOrOwner(_msgSender(), _tokenId), "ERC721: caller is not token owner or approved");
       _safeTransfer(_from, msg.sender, _tokenId, "");
      (bool success, ) = _from.call{value: 2 ether}("");
      require(success, "Failed to send ether");
      emit ResellTicket(_from, msg.sender, _homeOrAway, 4, _tokenId, msg.value);
   }

   function buySeatLevelFive(bool _homeOrAway) onlyWhenNotPaused balanceUnderThree external payable {
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

    function receiveTicketLevelFive(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused external payable {
      if(msg.value != 1 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 801 || _tokenId > 900) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
     } else if(_homeOrAway == false) {
       if(_tokenId < 901 || _tokenId > 1000) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
     }
      require(_isApprovedOrOwner(_msgSender(), _tokenId), "ERC721: caller is not token owner or approved");
       _safeTransfer(_from, msg.sender, _tokenId, "");
      (bool success, ) = _from.call{value: 1 ether}("");
      require(success, "Failed to send ether");
      emit ResellTicket(_from, msg.sender, _homeOrAway, 5, _tokenId, msg.value);
   }

    function buySeatLevelSix(bool _homeOrAway) onlyWhenNotPaused balanceUnderThree external payable {
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

    function receiveTicketLevelSix(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused external payable {
      if(msg.value != 0.5 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 1001 || _tokenId > 1100) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
     } else if(_homeOrAway == false) {
       if(_tokenId < 1101 || _tokenId > 1200) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
     }
      require(_isApprovedOrOwner(_msgSender(), _tokenId), "ERC721: caller is not token owner or approved");
       _safeTransfer(_from, msg.sender, _tokenId, "");
      (bool success, ) = _from.call{value: 0.5 ether}("");
      require(success, "Failed to send ether");
      emit ResellTicket(_from, msg.sender, _homeOrAway, 6, _tokenId, msg.value);
   }

    function buySeatLevelSeven(bool _homeOrAway) onlyWhenNotPaused balanceUnderThree external payable {
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

    function receiveTicketLevelSeven(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused external payable {
      if(msg.value != 0.25 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 1201 || _tokenId > 1300) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
     } else if(_homeOrAway == false) {
       if(_tokenId < 1301 || _tokenId > 1400) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
     }
      require(_isApprovedOrOwner(_msgSender(), _tokenId), "ERC721: caller is not token owner or approved");
       _safeTransfer(_from, msg.sender, _tokenId, "");
      (bool success, ) = _from.call{value: 0.25 ether}("");
      require(success, "Failed to send ether");
      emit ResellTicket(_from, msg.sender, _homeOrAway, 7, _tokenId, msg.value);
   }

   function buySeatLevelEight(bool _homeOrAway) onlyWhenNotPaused balanceUnderThree external payable {
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

    function receiveTicketLevelEight(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused external payable {
      if(msg.value != 0.125 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 1401 || _tokenId > 1500) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
     } else if(_homeOrAway == false) {
       if(_tokenId < 1501 || _tokenId > 1600) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
     }
      require(_isApprovedOrOwner(_msgSender(), _tokenId), "ERC721: caller is not token owner or approved");
       _safeTransfer(_from, msg.sender, _tokenId, "");
      (bool success, ) = _from.call{value: 0.125 ether}("");
      require(success, "Failed to send ether");
      emit ResellTicket(_from, msg.sender, _homeOrAway, 8, _tokenId, msg.value);
   }

   function buySeatLevelNine(bool _homeOrAway) onlyWhenNotPaused balanceUnderThree external payable {
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

    function receiveTicketLevelNine(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused external payable {
      if(msg.value != 0.1 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 1601 || _tokenId > 1700) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
     } else if(_homeOrAway == false) {
       if(_tokenId < 1701 || _tokenId > 1800) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
     }
      require(_isApprovedOrOwner(_msgSender(), _tokenId), "ERC721: caller is not token owner or approved");
       _safeTransfer(_from, msg.sender, _tokenId, "");
      (bool success, ) = _from.call{value: 0.1 ether}("");
      require(success, "Failed to send ether");
      emit ResellTicket(_from, msg.sender, _homeOrAway, 9, _tokenId, msg.value);
   }

    function buySeatLevelTen(bool _homeOrAway) onlyWhenNotPaused balanceUnderThree external payable {
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

    function receiveTicketLevelTen(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused external payable {
      if(msg.value != 0.05 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 1801 || _tokenId > 1900) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
     } else if(_homeOrAway == false) {
       if(_tokenId < 1901 || _tokenId > 2000) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
     }
      require(_isApprovedOrOwner(_msgSender(), _tokenId), "ERC721: caller is not token owner or approved");
       _safeTransfer(_from, msg.sender, _tokenId, "");
      (bool success, ) = _from.call{value: 0.05 ether}("");
      require(success, "Failed to send ether");
      emit ResellTicket(_from, msg.sender, _homeOrAway, 10, _tokenId, msg.value);
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

   function homeSeatLevelCount(uint _seatLevel) external view returns(uint) {
      return seatLevelCount[true][_seatLevel];
   }

   function awaySeatLevelCount(uint _seatLevel) external view returns(uint) {
      return seatLevelCount[false][_seatLevel];
   }

   function getContractBalance() public view returns(uint) {
      return address(this).balance;
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