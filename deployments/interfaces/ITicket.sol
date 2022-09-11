//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface ITicket {
   function transferTicket(address from, address to, uint256 tokenId, bytes memory data, bool homeOrAway, uint seatLevel) external;
   function refundTicketToContract(address from, uint256 tokenId, bool homeOrAway, uint seatLevel) external; 
   function receiveRefundedTicket(address to, uint256 tokenId, bool homeOrAway, uint seatLevel) external;
   function balanceOf(address owner) external view returns (uint256 balance);
}