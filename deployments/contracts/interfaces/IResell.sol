//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface IResell {
   function areYouAllowedToTransfer() external view returns(bool);
}