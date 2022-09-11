//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface IReceiveRefundedTicketFromContract {
    function areYouAllowedToReceiveTicketFromContract() external view returns(bool);
}