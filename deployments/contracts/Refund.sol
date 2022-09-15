import  "./interfaces/ITicket.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

error YOU_HAVE_ALREADY_REFUNDED_TOKENID();
error HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
error AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
error CONTRACT_IS_PAUSED();
error EVENT_HAS_ALREADY_STARTED();

//Maybe use the graph to list out all the tokenIds that the smart contract owns, along with it's seat level and if its a homeoraway ticket

contract Refund is Ownable {
  mapping(uint => mapping(address => bool)) private tokenIdRefunded; //tokenId => owner => trueOrFalse
  event RefundTicket(bool HomeOrAway, uint SeatLevel, uint TokenId, uint Amount);
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

   modifier onlyIfEventHasntStarted {
      if(block.timestamp > timeUntilEventStarts) {
        revert EVENT_HAS_ALREADY_STARTED();
      }
      _;
   }

  function refundBackToContractLevelOne(bool _homeOrAway, uint _tokenId) external onlyWhenNotPaused onlyIfEventHasntStarted {
   if(tokenIdRefunded[_tokenId][msg.sender] == true) {
        revert YOU_HAVE_ALREADY_REFUNDED_TOKENID();
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
      tokenIdRefunded[_tokenId][msg.sender] = true;
      ITicket(ticket).refundTicketToContract(msg.sender, _tokenId, _homeOrAway, 1);
      status = 0;
      emit RefundTicket(_homeOrAway, 1, _tokenId, 5 ether);
  }

  function refundBackToContractLevelTwo(bool _homeOrAway, uint _tokenId) external onlyWhenNotPaused onlyIfEventHasntStarted {
   if(tokenIdRefunded[_tokenId][msg.sender] == true) {
        revert YOU_HAVE_ALREADY_REFUNDED_TOKENID();
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
      tokenIdRefunded[_tokenId][msg.sender] = true;
      ITicket(ticket).refundTicketToContract(msg.sender, _tokenId, _homeOrAway, 2);
      status = 0;
      emit RefundTicket(_homeOrAway, 2, _tokenId, 4 ether);
  }

  function refundBackToContractLevelThree(bool _homeOrAway, uint _tokenId) external onlyWhenNotPaused onlyIfEventHasntStarted {
   if(tokenIdRefunded[_tokenId][msg.sender] == true) {
        revert YOU_HAVE_ALREADY_REFUNDED_TOKENID();
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
      tokenIdRefunded[_tokenId][msg.sender] = true;
      ITicket(ticket).refundTicketToContract(msg.sender, _tokenId, _homeOrAway, 3);
      status = 0;
      emit RefundTicket(_homeOrAway, 3, _tokenId, 3 ether);
  }
  
  function refundBackToContractLevelFour(bool _homeOrAway, uint _tokenId) external onlyWhenNotPaused onlyIfEventHasntStarted {
   if(tokenIdRefunded[_tokenId][msg.sender] == true) {
        revert YOU_HAVE_ALREADY_REFUNDED_TOKENID();
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
      tokenIdRefunded[_tokenId][msg.sender] = true;
      ITicket(ticket).refundTicketToContract(msg.sender, _tokenId, _homeOrAway, 4);
      status = 0;
      emit RefundTicket(_homeOrAway, 4, _tokenId, 2 ether);
  }

  function refundBackToContractLevelFive(bool _homeOrAway, uint _tokenId) external onlyWhenNotPaused onlyIfEventHasntStarted {
   if(tokenIdRefunded[_tokenId][msg.sender] == true) {
        revert YOU_HAVE_ALREADY_REFUNDED_TOKENID();
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
      tokenIdRefunded[_tokenId][msg.sender] = true;
      ITicket(ticket).refundTicketToContract(msg.sender, _tokenId, _homeOrAway, 5);
      status = 0;
      emit RefundTicket(_homeOrAway, 5, _tokenId, 1 ether);
  }

 function refundBackToContractLevelSix(bool _homeOrAway, uint _tokenId) external onlyWhenNotPaused onlyIfEventHasntStarted {
   if(tokenIdRefunded[_tokenId][msg.sender] == true) {
        revert YOU_HAVE_ALREADY_REFUNDED_TOKENID();
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
      tokenIdRefunded[_tokenId][msg.sender] = true;
      ITicket(ticket).refundTicketToContract(msg.sender, _tokenId, _homeOrAway, 6);
      emit RefundTicket(_homeOrAway, 6, _tokenId, 0.5 ether);
  }

   function refundBackToContractLevelSeven(bool _homeOrAway, uint _tokenId) external onlyWhenNotPaused onlyIfEventHasntStarted {
   if(tokenIdRefunded[_tokenId][msg.sender] == true) {
        revert YOU_HAVE_ALREADY_REFUNDED_TOKENID();
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
      tokenIdRefunded[_tokenId][msg.sender] = true;
      ITicket(ticket).refundTicketToContract(msg.sender, _tokenId, _homeOrAway, 7);
      status = 0;
      emit RefundTicket(_homeOrAway, 7, _tokenId, 0.5 ether);
  }

   function refundBackToContractLevelEight(bool _homeOrAway, uint _tokenId) external onlyWhenNotPaused onlyIfEventHasntStarted {
   if(tokenIdRefunded[_tokenId][msg.sender] == true) {
        revert YOU_HAVE_ALREADY_REFUNDED_TOKENID();
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
      tokenIdRefunded[_tokenId][msg.sender] = true;
      ITicket(ticket).refundTicketToContract(msg.sender, _tokenId, _homeOrAway, 8);
      status = 0;
      emit RefundTicket(_homeOrAway, 8, _tokenId, 0.25 ether);
  }

  function refundBackToContractLevelNine(bool _homeOrAway, uint _tokenId) external onlyWhenNotPaused onlyIfEventHasntStarted {
   if(tokenIdRefunded[_tokenId][msg.sender] == true) {
        revert YOU_HAVE_ALREADY_REFUNDED_TOKENID();
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
      tokenIdRefunded[_tokenId][msg.sender] = true;
      ITicket(ticket).refundTicketToContract(msg.sender, _tokenId, _homeOrAway, 9);
      status = 0;
      emit RefundTicket(_homeOrAway, 9, _tokenId, 0.125 ether);
  }

   function refundBackToContractLevelTen(bool _homeOrAway, uint _tokenId) external onlyWhenNotPaused onlyIfEventHasntStarted {
   if(tokenIdRefunded[_tokenId][msg.sender] == true) {
        revert YOU_HAVE_ALREADY_REFUNDED_TOKENID();
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
      tokenIdRefunded[_tokenId][msg.sender] = true;
      ITicket(ticket).refundTicketToContract(msg.sender, _tokenId, _homeOrAway, 10);
      status = 0;
      emit RefundTicket(_homeOrAway, 10, _tokenId, 0.1 ether);
  }

   function setPause(bool _value) external onlyOwner {
      paused = _value;
   }

  function haveYouRefundedToken(uint _tokenId) external view returns(bool) {
    return tokenIdRefunded[_tokenId][msg.sender];
  }

   function areYouAllowedToRefund() public view returns(bool) {
     return status == 5;
   }

}