//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "./interfaces/IResell.sol";
import "./interfaces/ITicket.sol";
import "./interfaces/IRefund.sol";
import "./interfaces/IReceiveRefundedTicketFromContract.sol";

/// @title NFTicket Contract
/// @author Larry Cutts
/// @notice This contract contains the NFT Tickets that can be used for the games
/// @custom:project NFTicket
/// @custom:twitterhandle @yanukadeneth99, @LarryCutts6, @KhanAbbas201
contract Ticket is ITicket, ERC721, Ownable, ReentrancyGuard, Pausable {
    // =============================================================
    //                            VARIABLES
    // =============================================================

    // The Address of the Resell Contract
    address public resellContract;

    // The Address of the Refund Contract
    address public refundContract;

    // The Address of the Receive Refund Contract
    address public receiveRefundedTicketContract;

    // The timestamp the event starts
    uint immutable timeUntilEventStarts;

    // Seats available
    uint public seatsAvailable;

    // =============================================================
    //                            MAPPINGS
    // =============================================================

    // SeatLevel => Owner => Amount minted
    mapping(uint => mapping(address => uint)) public homeTicketsOwned;

    // SeatLevel => Owner => Amount minted
    mapping(uint => mapping(address => uint)) public awayTicketsOwned;

    // Side(HOME or AWAY) => Seat Level => amount minted
    mapping(side => mapping(uint => uint)) public seatLevelCount;

    // Seat Level => Ether Price
    mapping(uint => uint) public seatPrices;

    // Seat Level => Ticket ID - HOME
    mapping(uint => uint) public currentHome;

    // Seat Level => Ticket ID - AWAY
    mapping(uint => uint) public currentAway;

    // =============================================================
    //                            CONSTRUCTOR
    // =============================================================
    constructor(uint _time) ERC721("NFTicket", "NFTT") {
        timeUntilEventStarts = block.timestamp + _time;
        seatsAvailable = 10;
        seatPrices[1] = 5 ether;
        seatPrices[2] = 4 ether;
        seatPrices[3] = 3 ether;
        seatPrices[4] = 2 ether;
        seatPrices[5] = 1 ether;
        seatPrices[6] = 0.8 ether;
        seatPrices[7] = 0.6 ether;
        seatPrices[8] = 0.4 ether;
        seatPrices[9] = 0.2 ether;
        seatPrices[10] = 0.1 ether;

        // Set the Ticket IDs of Home and Away
        uint _hprice = 1;
        for (uint i = 1; i <= seatsAvailable; i++) {
            currentHome[i] = _hprice;
            currentAway[i] = _hprice += 100;
            _hprice += 100;
        }
    }

    // =============================================================
    //                            MODIFIERS
    // =============================================================

    modifier balanceUnderThree() {
        uint balance = balanceOf(msg.sender);
        if (balance == 2) {
            revert TICKETS_MINTED_REACHED_MAX();
        }
        _;
    }

    modifier eventNotStarted() {
        if (block.timestamp > timeUntilEventStarts) {
            revert EVENT_HAS_ALREADY_STARTED();
        }
        _;
    }

    modifier eventStarted() {
        if (block.timestamp < timeUntilEventStarts) {
            revert EVENT_HASNT_STARTED_YET();
        }
        _;
    }

    modifier isEOA() {
        require(tx.origin == msg.sender, "Not a EAO!");
        _;
    }

    // =============================================================
    //                         MAIN FUNCTIONS
    // =============================================================

    // Buy a ticket depending on which side and the seat number
    function buyTicket(side _type, uint seat)
        external
        payable
        whenNotPaused
        eventNotStarted
        nonReentrant
        isEOA
    {
        if (balanceOf(msg.sender) == 2) revert TICKETS_MINTED_REACHED_MAX(); // Caller cannot hold more than 2 tokens
        if (seat == 0 || seat > seatsAvailable) revert INCORRECT_SEAT(); // Seat must exist
        uint price = seatPrices[seat];
        if (price == 0) revert PRICE_NOT_SET(seat); // Price cannot be 0 (Unassigned)
        if (msg.value != price) revert INSUFFICIENT_FUNDS(price); // Price must be correct

        if (_type == side.HOME) {
            // All tokens are over
            if (
                currentHome[seat + 1] != 0
                    ? currentHome[seat] == currentHome[seat + 1]
                    : currentHome[seat] == (currentHome[seat - 1] + 200)
            ) revert NO_HOME_SEATS_AVAILABLE();

            homeTicketsOwned[seat][msg.sender]++;
            seatLevelCount[side.HOME][seat]++;
            _mint(msg.sender, currentHome[seat]);
            emit BuyTicket(
                msg.sender,
                side.HOME,
                seat,
                currentHome[seat],
                msg.value
            );
            currentHome[seat]++;
        } else {
            // All tokens are over
            if (
                currentAway[seat + 1] != 0
                    ? currentAway[seat] == currentAway[seat + 1]
                    : currentAway[seat] == (currentAway[seat - 1] + 200)
            ) revert NO_AWAY_SEATS_AVAILABLE();

            awayTicketsOwned[seat][msg.sender]++;
            seatLevelCount[side.AWAY][seat]++;
            _mint(msg.sender, currentAway[seat]);
            emit BuyTicket(
                msg.sender,
                side.AWAY,
                seat,
                currentAway[seat],
                msg.value
            );
            currentAway[seat]++;
        }
    }

    // =============================================================
    //                         OVERRIDE FUNCTIONS
    // =============================================================

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override onlyOwner {
        super.transferFrom(from, to, tokenId);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public override onlyOwner {
        super.safeTransferFrom(from, to, tokenId);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory data
    ) public override onlyOwner {
        super.safeTransferFrom(from, to, tokenId, data);
    }

    function receiveRefundedTicket(
        address to,
        uint256 tokenId,
        bool homeOrAway,
        uint seatLevel
    ) public {
        bool value = IReceiveRefundedTicketFromContract(
            receiveRefundedTicketContract
        ).areYouAllowedToReceiveTicketFromContract();
        if (value == false) {
            revert NOT_ALLOWED_TO_TRANSFER();
        }
        if (homeOrAway == true) {
            homeTicketsOwned[seatLevel][to]++;
        } else if (homeOrAway == false) {
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
        if (value == false) {
            revert NOT_ALLOWED_TO_TRANSFER();
        }
        if (homeOrAway == true) {
            homeTicketsOwned[seatLevel][from]--;
        } else if (homeOrAway == false) {
            awayTicketsOwned[seatLevel][from]--;
        }
        if (seatLevel == 1) {
            (bool success, ) = payable(from).call{value: 5 ether}("");
            require(success, "Failed to send ether");
        } else if (seatLevel == 2) {
            (bool success, ) = payable(from).call{value: 4 ether}("");
            require(success, "Failed to send ether");
        } else if (seatLevel == 3) {
            (bool success, ) = payable(from).call{value: 3 ether}("");
            require(success, "Failed to send ether");
        } else if (seatLevel == 4) {
            (bool success, ) = payable(from).call{value: 2 ether}("");
            require(success, "Failed to send ether");
        } else if (seatLevel == 5) {
            (bool success, ) = payable(from).call{value: 1 ether}("");
            require(success, "Failed to send ether");
        } else if (seatLevel == 6) {
            (bool success, ) = payable(from).call{value: 0.5 ether}("");
            require(success, "Failed to send ether");
        } else if (seatLevel == 7) {
            (bool success, ) = payable(from).call{value: 0.25 ether}("");
            require(success, "Failed to send ether");
        } else if (seatLevel == 8) {
            (bool success, ) = payable(from).call{value: 0.125 ether}("");
            require(success, "Failed to send ether");
        } else if (seatLevel == 9) {
            (bool success, ) = payable(from).call{value: 0.1 ether}("");
            require(success, "Failed to send ether");
        } else if (seatLevel == 10) {
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
    ) public whenNotPaused {
        bool value = IResell(resellContract).areYouAllowedToTransfer();
        if (value == false) {
            revert NOT_ALLOWED_TO_TRANSFER();
        }
        if (homeOrAway == true) {
            homeTicketsOwned[seatLevel][from]--;
            homeTicketsOwned[seatLevel][to]++;
        } else if (homeOrAway == false) {
            awayTicketsOwned[seatLevel][from]--;
            awayTicketsOwned[seatLevel][to]++;
        }
        address approvedTo = getApproved(tokenId);
        require(
            approvedTo == to,
            "ERC721: caller is not token owner or approved"
        );
        _safeTransfer(from, to, tokenId, data);
    }

    // =============================================================
    //                         SETTER FUNCTIONS
    // =============================================================

    /// @notice Pause or Unpause Contract
    function setPause(bool _value) external onlyOwner {
        // Pause Contract
        if (_value && !paused()) _pause();

        // Unpause Contract
        if (!_value && paused()) _unpause();
    }

    function setResellContract(address _resellContract) external onlyOwner {
        resellContract = _resellContract;
    }

    function setRefundContract(address _refundContract) external onlyOwner {
        refundContract = _refundContract;
    }

    function setReceivedRefundTicketContract(
        address _receiveRefundedTicketContract
    ) external onlyOwner {
        receiveRefundedTicketContract = _receiveRefundedTicketContract;
    }

    // =============================================================
    //                         GETTER FUNCTIONS
    // =============================================================

    /// @notice Get the Home Purchased seat count of the passed seat level
    /// @param _seatLevel Seat Level within the boundries
    /// @return The amount of seats purchased in the passed seat level
    function getHomeSeatCount(uint _seatLevel) external view returns (uint) {
        if (_seatLevel == 0 || _seatLevel > seatsAvailable)
            revert INCORRECT_SEAT();
        return seatLevelCount[side.HOME][_seatLevel];
    }

    /// @notice Get the Away Purchased seat count of the passed seat level
    /// @param _seatLevel Seat Level within the boundries
    /// @return The amount of seats purchased in the passed seat level
    function getAwaySeatCount(uint _seatLevel) external view returns (uint) {
        if (_seatLevel == 0 || _seatLevel > seatsAvailable)
            revert INCORRECT_SEAT();
        return seatLevelCount[side.AWAY][_seatLevel];
    }

    /// @notice Get the Amount of Home Tickets Minted by the Caller
    /// @param _seatLevel The Seat level
    /// @return The amount of tickets bought at the passed seat level
    function getHomeTicketsCountByOwner(uint _seatLevel)
        external
        view
        returns (uint)
    {
        return homeTicketsOwned[_seatLevel][msg.sender];
    }

    /// @notice Get the Amount of Away Tickets Minted by the Caller
    /// @param _seatLevel The Seat level
    /// @return The amount of tickets bought at the passed seat level
    function getAwayTicketsCountByOwner(uint _seatLevel)
        external
        view
        returns (uint)
    {
        return awayTicketsOwned[_seatLevel][msg.sender];
    }

    // =============================================================
    //                         WITHDRAWAL
    // =============================================================

    /// @dev Withdraw Ether from this contract by owners
    function withdraw() external onlyOwner eventStarted {
        uint256 amount = address(this).balance;
        address payable owner = payable(owner());
        (bool sent, ) = owner.call{value: amount}("");
        require(sent, "Error withdrawing ether");
    }

    receive() external payable {}

    fallback() external payable {}
}
