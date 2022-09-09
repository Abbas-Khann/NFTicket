import "./Refund.sol";
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract ReceiveRefundedTicketFromContract is Refund {
   event ReceiveRefundedTicket(address To, bool HomeOrAway, uint SeatLevel, uint TokenId, uint Amount);
   function refundTicketLevelOne(bool _homeOrAway, uint _tokenId) onlyWhenNotPaused balanceUnderThree external payable {
      if(msg.value != 5 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 1 || _tokenId > 100) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        homeTicketsOwned[1][msg.sender]++;
     } else if(_homeOrAway == false) {
       if(_tokenId < 101 || _tokenId > 200) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
         awayTicketsOwned[1][msg.sender]++;
     }
       _safeTransfer(address(this), msg.sender, _tokenId, "");
      emit ReceiveRefundedTicket(msg.sender, _homeOrAway, 1, _tokenId, msg.value);
   }

   function refundTicketLevelTwo(bool _homeOrAway, uint _tokenId) onlyWhenNotPaused balanceUnderThree external payable {
      if(msg.value != 4 ether) {
         revert INSUFFICIENT_FUNDS();
      }
    if(_homeOrAway == true) {
       if(_tokenId < 201 || _tokenId > 300) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        homeTicketsOwned[2][msg.sender]++;
     } else if(_homeOrAway == false) {
       if(_tokenId < 301 || _tokenId > 400) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
         awayTicketsOwned[2][msg.sender]++;
     }
       _safeTransfer(address(this), msg.sender, _tokenId, "");
      emit ReceiveRefundedTicket(msg.sender, _homeOrAway, 2, _tokenId, msg.value);
   }

    function refundTicketLevelThree(bool _homeOrAway, uint _tokenId) onlyWhenNotPaused balanceUnderThree external payable {
      if(msg.value != 3 ether) {
         revert INSUFFICIENT_FUNDS();
      }
    if(_homeOrAway == true) {
       if(_tokenId < 401 || _tokenId > 500) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        homeTicketsOwned[3][msg.sender]++;
     } else if(_homeOrAway == false) {
       if(_tokenId < 501 || _tokenId > 600) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
       awayTicketsOwned[3][msg.sender]++;
     }
       _safeTransfer(address(this), msg.sender, _tokenId, "");
      emit ReceiveRefundedTicket(msg.sender, _homeOrAway, 3, _tokenId, msg.value);
   }

    function refundTicketLevelFour(bool _homeOrAway, uint _tokenId) onlyWhenNotPaused balanceUnderThree external payable {
      if(msg.value != 2 ether) {
         revert INSUFFICIENT_FUNDS();
      }
    if(_homeOrAway == true) {
       if(_tokenId < 601 || _tokenId > 700) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        homeTicketsOwned[4][msg.sender]++;
     } else if(_homeOrAway == false) {
       if(_tokenId < 701 || _tokenId > 800) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        awayTicketsOwned[4][msg.sender]++;
     }
       _safeTransfer(address(this), msg.sender, _tokenId, "");
      emit ReceiveRefundedTicket(msg.sender, _homeOrAway, 4, _tokenId, msg.value);
   }

    function refundTicketLevelFive(bool _homeOrAway, uint _tokenId) onlyWhenNotPaused balanceUnderThree external payable {
      if(msg.value != 1 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 801 || _tokenId > 900) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        homeTicketsOwned[5][msg.sender]++;
     } else if(_homeOrAway == false) {
       if(_tokenId < 901 || _tokenId > 1000) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        awayTicketsOwned[5][msg.sender]++;
     }
       _safeTransfer(address(this), msg.sender, _tokenId, "");
      emit ReceiveRefundedTicket(msg.sender, _homeOrAway, 5, _tokenId, msg.value);
   }

    function refundTicketLevelSix(bool _homeOrAway, uint _tokenId) onlyWhenNotPaused balanceUnderThree external payable {
      if(msg.value != 0.5 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 1001 || _tokenId > 1100) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        homeTicketsOwned[6][msg.sender]++;
     } else if(_homeOrAway == false) {
       if(_tokenId < 1101 || _tokenId > 1200) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        awayTicketsOwned[6][msg.sender]++;
     }
       _safeTransfer(address(this), msg.sender, _tokenId, "");
      emit ReceiveRefundedTicket(msg.sender, _homeOrAway, 6, _tokenId, msg.value);
   }

    function refundTicketLevelSeven(bool _homeOrAway, uint _tokenId) onlyWhenNotPaused balanceUnderThree external payable {
      if(msg.value != 0.25 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 1201 || _tokenId > 1300) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        homeTicketsOwned[7][msg.sender]++;
     } else if(_homeOrAway == false) {
       if(_tokenId < 1301 || _tokenId > 1400) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        awayTicketsOwned[7][msg.sender]++;
     }
       _safeTransfer(address(this), msg.sender, _tokenId, "");
      emit ReceiveRefundedTicket(msg.sender, _homeOrAway, 7, _tokenId, msg.value);
   }

    function refundTicketLevelEight(bool _homeOrAway, uint _tokenId) onlyWhenNotPaused balanceUnderThree external payable {
      if(msg.value != 0.125 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 1401 || _tokenId > 1500) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        homeTicketsOwned[8][msg.sender]++;
     } else if(_homeOrAway == false) {
       if(_tokenId < 1501 || _tokenId > 1600) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        awayTicketsOwned[8][msg.sender]++;
     }
       _safeTransfer(address(this), msg.sender, _tokenId, "");
      emit ReceiveRefundedTicket(msg.sender, _homeOrAway, 8, _tokenId, msg.value);
   }

     function refundTicketLevelNine(bool _homeOrAway, uint _tokenId) onlyWhenNotPaused balanceUnderThree external payable {
      if(msg.value != 0.1 ether) {
         revert INSUFFICIENT_FUNDS();
      }
    if(_homeOrAway == true) {
       if(_tokenId < 1601 || _tokenId > 1700) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        homeTicketsOwned[9][msg.sender]++;
     } else if(_homeOrAway == false) {
       if(_tokenId < 1701 || _tokenId > 1800) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        awayTicketsOwned[9][msg.sender]++;
     }
       _safeTransfer(address(this), msg.sender, _tokenId, "");
      emit ReceiveRefundedTicket(msg.sender, _homeOrAway, 9, _tokenId, msg.value);
   }

    function refundTicketLevelTen(bool _homeOrAway, uint _tokenId) onlyWhenNotPaused balanceUnderThree external payable {
      if(msg.value != 0.05 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 1801 || _tokenId > 1900) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        homeTicketsOwned[10][msg.sender]++;
     } else if(_homeOrAway == false) {
       if(_tokenId < 1901 || _tokenId > 2000) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        awayTicketsOwned[10][msg.sender]++;
     }
       _safeTransfer(address(this), msg.sender, _tokenId, "");
      emit ReceiveRefundedTicket(msg.sender, _homeOrAway, 10, _tokenId, msg.value);
   }
}