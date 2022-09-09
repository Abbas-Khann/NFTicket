import  "./Ticket.sol";
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract Resell is Ticket {
  event ResellTicket(address From, address To, bool HomeOrAway, uint SeatLevel, uint TokenId, uint Amount);
  function receiveTicketLevelOne(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused balanceUnderThree public payable {
      if(msg.value != 5 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 1 || _tokenId > 100) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        homeTicketsOwned[1][_from]--;
        homeTicketsOwned[1][msg.sender]++;
     } else if(_homeOrAway == false) {
       if(_tokenId < 101 || _tokenId > 200) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
         awayTicketsOwned[1][_from]--;
         awayTicketsOwned[1][msg.sender]++;
     }
      require(_isApprovedOrOwner(_msgSender(), _tokenId), "ERC721: caller is not token owner or approved");
       _safeTransfer(_from, msg.sender, _tokenId, "");
      (bool success, ) = _from.call{value: 5 ether}("");
      require(success, "Failed to send ether");
      emit ResellTicket(_from, msg.sender, _homeOrAway, 1, _tokenId, msg.value);
   }

    function receiveTicketLevelTwo(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused balanceUnderThree public payable {
      if(msg.value != 4 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 201 || _tokenId > 300) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        homeTicketsOwned[2][_from]--;
        homeTicketsOwned[2][msg.sender]++;
     } else if(_homeOrAway == false) {
       if(_tokenId < 301 || _tokenId > 400) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
         awayTicketsOwned[2][_from]--;
         awayTicketsOwned[2][msg.sender]++;
     }
      require(_isApprovedOrOwner(_msgSender(), _tokenId), "ERC721: caller is not token owner or approved");
       _safeTransfer(_from, msg.sender, _tokenId, "");
      (bool success, ) = _from.call{value: 4 ether}("");
      require(success, "Failed to send ether");
      emit ResellTicket(_from, msg.sender, _homeOrAway, 2, _tokenId, msg.value);
   }
  
    function receiveTicketLevelThree(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused balanceUnderThree public payable {
      if(msg.value != 3 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 401 || _tokenId > 500) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        homeTicketsOwned[3][_from]--;
        homeTicketsOwned[3][msg.sender]++;
     } else if(_homeOrAway == false) {
       if(_tokenId < 501 || _tokenId > 600) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
         awayTicketsOwned[3][_from]--;
         awayTicketsOwned[3][msg.sender]++;
     }
      require(_isApprovedOrOwner(_msgSender(), _tokenId), "ERC721: caller is not token owner or approved");
       _safeTransfer(_from, msg.sender, _tokenId, "");
      (bool success, ) = _from.call{value: 3 ether}("");
      require(success, "Failed to send ether");
      emit ResellTicket(_from, msg.sender, _homeOrAway, 3, _tokenId, msg.value);
   }

     function receiveTicketLevelFour(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused balanceUnderThree public payable {
      if(msg.value != 2 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 601 || _tokenId > 700) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        homeTicketsOwned[4][_from]--;
        homeTicketsOwned[4][msg.sender]++;
     } else if(_homeOrAway == false) {
       if(_tokenId < 701 || _tokenId > 800) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        awayTicketsOwned[4][_from]--;
        awayTicketsOwned[4][msg.sender]++;
     }
      require(_isApprovedOrOwner(_msgSender(), _tokenId), "ERC721: caller is not token owner or approved");
       _safeTransfer(_from, msg.sender, _tokenId, "");
      (bool success, ) = _from.call{value: 2 ether}("");
      require(success, "Failed to send ether");
      emit ResellTicket(_from, msg.sender, _homeOrAway, 4, _tokenId, msg.value);
   }

    function receiveTicketLevelFive(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused balanceUnderThree public payable {
      if(msg.value != 1 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 801 || _tokenId > 900) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        homeTicketsOwned[5][_from]--;
        homeTicketsOwned[5][msg.sender]++;
     } else if(_homeOrAway == false) {
       if(_tokenId < 901 || _tokenId > 1000) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        awayTicketsOwned[5][_from]--;
        awayTicketsOwned[5][msg.sender]++;
     }
      require(_isApprovedOrOwner(_msgSender(), _tokenId), "ERC721: caller is not token owner or approved");
       _safeTransfer(_from, msg.sender, _tokenId, "");
      (bool success, ) = _from.call{value: 1 ether}("");
      require(success, "Failed to send ether");
      emit ResellTicket(_from, msg.sender, _homeOrAway, 5, _tokenId, msg.value);
   }

    function receiveTicketLevelSix(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused balanceUnderThree public payable {
      if(msg.value != 0.5 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 1001 || _tokenId > 1100) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        homeTicketsOwned[6][_from]--;
        homeTicketsOwned[6][msg.sender]++;
     } else if(_homeOrAway == false) {
       if(_tokenId < 1101 || _tokenId > 1200) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        awayTicketsOwned[6][_from]--;
        awayTicketsOwned[6][msg.sender]++;
     }
      require(_isApprovedOrOwner(_msgSender(), _tokenId), "ERC721: caller is not token owner or approved");
       _safeTransfer(_from, msg.sender, _tokenId, "");
      (bool success, ) = _from.call{value: 0.5 ether}("");
      require(success, "Failed to send ether");
      emit ResellTicket(_from, msg.sender, _homeOrAway, 6, _tokenId, msg.value);
   }

    function receiveTicketLevelSeven(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused balanceUnderThree public payable {
      if(msg.value != 0.25 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 1201 || _tokenId > 1300) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        homeTicketsOwned[7][_from]--;
        homeTicketsOwned[7][msg.sender]++;
     } else if(_homeOrAway == false) {
       if(_tokenId < 1301 || _tokenId > 1400) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        awayTicketsOwned[7][_from]--;
        awayTicketsOwned[7][msg.sender]++;
     }
      require(_isApprovedOrOwner(_msgSender(), _tokenId), "ERC721: caller is not token owner or approved");
       _safeTransfer(_from, msg.sender, _tokenId, "");
      (bool success, ) = _from.call{value: 0.25 ether}("");
      require(success, "Failed to send ether");
      emit ResellTicket(_from, msg.sender, _homeOrAway, 7, _tokenId, msg.value);
   }

    function receiveTicketLevelEight(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused balanceUnderThree public payable {
      if(msg.value != 0.125 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 1401 || _tokenId > 1500) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        homeTicketsOwned[8][_from]--;
        homeTicketsOwned[8][msg.sender]++;
     } else if(_homeOrAway == false) {
       if(_tokenId < 1501 || _tokenId > 1600) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        awayTicketsOwned[8][_from]--;
        awayTicketsOwned[8][msg.sender]++;
     }
      require(_isApprovedOrOwner(_msgSender(), _tokenId), "ERC721: caller is not token owner or approved");
       _safeTransfer(_from, msg.sender, _tokenId, "");
      (bool success, ) = _from.call{value: 0.125 ether}("");
      require(success, "Failed to send ether");
      emit ResellTicket(_from, msg.sender, _homeOrAway, 8, _tokenId, msg.value);
   }

    function receiveTicketLevelNine(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused balanceUnderThree public payable {
      if(msg.value != 0.1 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 1601 || _tokenId > 1700) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        homeTicketsOwned[9][_from]--;
        homeTicketsOwned[9][msg.sender]++;
     } else if(_homeOrAway == false) {
       if(_tokenId < 1701 || _tokenId > 1800) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        awayTicketsOwned[9][_from]--;
        awayTicketsOwned[9][msg.sender]++;
     }
      require(_isApprovedOrOwner(_msgSender(), _tokenId), "ERC721: caller is not token owner or approved");
       _safeTransfer(_from, msg.sender, _tokenId, "");
      (bool success, ) = _from.call{value: 0.1 ether}("");
      require(success, "Failed to send ether");
      emit ResellTicket(_from, msg.sender, _homeOrAway, 9, _tokenId, msg.value);
   }

    function receiveTicketLevelTen(bool _homeOrAway, uint _tokenId, address _from) onlyWhenNotPaused balanceUnderThree public payable {
      if(msg.value != 0.05 ether) {
         revert INSUFFICIENT_FUNDS();
      }
     if(_homeOrAway == true) {
       if(_tokenId < 1801 || _tokenId > 1900) {
         revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        homeTicketsOwned[10][_from]--;
        homeTicketsOwned[10][msg.sender]++;
     } else if(_homeOrAway == false) {
       if(_tokenId < 1901 || _tokenId > 2000) {
         revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
       }
        awayTicketsOwned[10][_from]--;
        awayTicketsOwned[10][msg.sender]++;
     }
      require(_isApprovedOrOwner(_msgSender(), _tokenId), "ERC721: caller is not token owner or approved");
       _safeTransfer(_from, msg.sender, _tokenId, "");
      (bool success, ) = _from.call{value: 0.05 ether}("");
      require(success, "Failed to send ether");
      emit ResellTicket(_from, msg.sender, _homeOrAway, 10, _tokenId, msg.value);
   } 
}