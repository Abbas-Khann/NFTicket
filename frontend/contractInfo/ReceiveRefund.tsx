export const RECEIVE_REFUND_ABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_ticket",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS",
    type: "error",
  },
  {
    inputs: [],
    name: "CONTRACT_IS_PAUSED",
    type: "error",
  },
  {
    inputs: [],
    name: "EVENT_HAS_ALREADY_STARTED",
    type: "error",
  },
  {
    inputs: [],
    name: "HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS",
    type: "error",
  },
  {
    inputs: [],
    name: "INSUFFICIENT_FUNDS",
    type: "error",
  },
  {
    inputs: [],
    name: "TICKETS_MINTED_REACHED_MAX",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "To",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "HomeOrAway",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "SeatLevel",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "TokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "Amount",
        type: "uint256",
      },
    ],
    name: "ReceiveRefundedTicket",
    type: "event",
  },
  {
    inputs: [],
    name: "areYouAllowedToReceiveTicketFromContract",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_homeOrAway",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "refundTicketLevelEight",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_homeOrAway",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "refundTicketLevelFive",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_homeOrAway",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "refundTicketLevelFour",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_homeOrAway",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "refundTicketLevelNine",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_homeOrAway",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "refundTicketLevelOne",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_homeOrAway",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "refundTicketLevelSeven",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_homeOrAway",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "refundTicketLevelSix",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_homeOrAway",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "refundTicketLevelTen",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_homeOrAway",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "refundTicketLevelThree",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_homeOrAway",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "refundTicketLevelTwo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_value",
        type: "bool",
      },
    ],
    name: "setPause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ticket",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const RECEIVE_REFUND_ADDRESS = "0x890115924807E5247981C80702cba2eAaFB12a8b";