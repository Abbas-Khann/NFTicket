import "../interfaces/ITicket.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


error INSUFFICIENT_FUNDS();
error TICKETS_MINTED_REACHED_MAX();
error HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
error AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
error CONTRACT_IS_PAUSED();
error EVENT_HAS_ALREADY_STARTED();


//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;


contract Resell is Ownable, ReentrancyGuard {
 event ResellTicket(address From, address To, bool HomeOrAway, uint SeatLevel, uint TokenId, uint Amount);
 mapping(address => bool) public allowedToTransfer;
 address public ticket;
 bool paused;
 uint status = 0;
 uint immutable timeUntilEventStarts;
    constructor(uint _time, address _ticket) {
       timeUntilEventStarts = block.timestamp + _time;
       ticket = _ticket;
    }
  modifier onlyWhenNotPaused {
      if(paused == true) {
         revert CONTRACT_IS_PAUSED();
      }
      _;
   }

   modifier balanceUnderThree {
     uint balance = ITicket(ticket).balanceOf(msg.sender);
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

  function receiveTicketLevelOne(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused onlyIfEventHasntStarted nonReentrant balanceUnderThree external payable {
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
      status = 5;
      ITicket(ticket).transferTicket(_from, msg.sender, _tokenId, "", _homeOrAway, 1);
      (bool success, ) = _from.call{value: 5 ether}("");
      require(success, "Failed to send ether");
      status = 0;
      emit ResellTicket(_from, msg.sender, _homeOrAway, 1, _tokenId, msg.value);
   }

    function receiveTicketLevelTwo(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused onlyIfEventHasntStarted nonReentrant balanceUnderThree external payable {
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
      status = 5;
      ITicket(ticket).transferTicket(_from, msg.sender, _tokenId, "", _homeOrAway, 2);
      (bool success, ) = _from.call{value: 4 ether}("");
      require(success, "Failed to send ether");
      status = 0;
      emit ResellTicket(_from, msg.sender, _homeOrAway, 2, _tokenId, msg.value);
   }
  
    function receiveTicketLevelThree(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused onlyIfEventHasntStarted nonReentrant balanceUnderThree external payable {
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
      status = 5;
      ITicket(ticket).transferTicket(_from, msg.sender, _tokenId, "", _homeOrAway, 3);
      (bool success, ) = _from.call{value: 3 ether}("");
      require(success, "Failed to send ether");
       status = 0;
      emit ResellTicket(_from, msg.sender, _homeOrAway, 3, _tokenId, msg.value);
   }

     function receiveTicketLevelFour(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused onlyIfEventHasntStarted nonReentrant balanceUnderThree external payable {
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
      status = 5;
      ITicket(ticket).transferTicket(_from, msg.sender, _tokenId, "", _homeOrAway, 4);
      (bool success, ) = _from.call{value: 2 ether}("");
      require(success, "Failed to send ether");
      status = 0;
      emit ResellTicket(_from, msg.sender, _homeOrAway, 4, _tokenId, msg.value);
   }

    function receiveTicketLevelFive(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused onlyIfEventHasntStarted nonReentrant balanceUnderThree external payable {
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
      status = 5;
      ITicket(ticket).transferTicket(_from, msg.sender, _tokenId, "", _homeOrAway, 5);
      (bool success, ) = _from.call{value: 1 ether}("");
      require(success, "Failed to send ether");
      status = 0;
      emit ResellTicket(_from, msg.sender, _homeOrAway, 5, _tokenId, msg.value);
   }

    function receiveTicketLevelSix(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused onlyIfEventHasntStarted nonReentrant balanceUnderThree external payable {
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
      status = 5;
      ITicket(ticket).transferTicket(_from, msg.sender, _tokenId, "", _homeOrAway, 6);
      (bool success, ) = _from.call{value: 0.5 ether}("");
      require(success, "Failed to send ether");
      status = 0;
      emit ResellTicket(_from, msg.sender, _homeOrAway, 6, _tokenId, msg.value);
   }

    function receiveTicketLevelSeven(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused onlyIfEventHasntStarted nonReentrant balanceUnderThree external payable {
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
      status = 5;
      ITicket(ticket).transferTicket(_from, msg.sender, _tokenId, "", _homeOrAway, 7);
      (bool success, ) = _from.call{value: 0.25 ether}("");
      require(success, "Failed to send ether");
      status = 0;
      emit ResellTicket(_from, msg.sender, _homeOrAway, 7, _tokenId, msg.value);
   }

    function receiveTicketLevelEight(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused onlyIfEventHasntStarted nonReentrant balanceUnderThree external payable {
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
      status = 5;
      ITicket(ticket).transferTicket(_from, msg.sender, _tokenId, "", _homeOrAway, 8);
      (bool success, ) = _from.call{value: 0.125 ether}("");
      require(success, "Failed to send ether");
      status = 0;
      emit ResellTicket(_from, msg.sender, _homeOrAway, 8, _tokenId, msg.value);
   }

    function receiveTicketLevelNine(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused onlyIfEventHasntStarted nonReentrant balanceUnderThree external payable {
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
      status = 5;
      ITicket(ticket).transferTicket(_from, msg.sender, _tokenId, "", _homeOrAway, 9);
      (bool success, ) = _from.call{value: 0.1 ether}("");
      require(success, "Failed to send ether");
      status = 0;
      emit ResellTicket(_from, msg.sender, _homeOrAway, 9, _tokenId, msg.value);
   }

    function receiveTicketLevelTen(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused onlyIfEventHasntStarted nonReentrant balanceUnderThree external payable {
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
      status = 5;
      ITicket(ticket).transferTicket(_from, msg.sender, _tokenId, "", _homeOrAway, 10);
      (bool success, ) = _from.call{value: 0.05 ether}("");
      require(success, "Failed to send ether");
      status = 0;
      emit ResellTicket(_from, msg.sender, _homeOrAway, 10, _tokenId, msg.value);
   } 


   function setPause(bool _value) external onlyOwner {
      paused = _value;
   }

   function areYouAllowedToTransfer() public view returns(bool) {
     return status == 5;
   }
}