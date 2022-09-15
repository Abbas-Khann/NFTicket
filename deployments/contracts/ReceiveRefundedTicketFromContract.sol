//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "./interfaces/ITicket.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

error INSUFFICIENT_FUNDS();
error TICKETS_MINTED_REACHED_MAX();
error HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
error AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
error CONTRACT_IS_PAUSED();
error EVENT_HAS_ALREADY_STARTED();

contract ReceiveRefundedTicketFromContract is Ownable, ReentrancyGuard {
    event ReceiveRefundedTicket(
        address To,
        bool HomeOrAway,
        uint SeatLevel,
        uint TokenId,
        uint Amount
    );

    address public ticket;
    bool paused;
    uint status = 0;
    uint immutable timeUntilEventStarts;

    constructor(uint _time, address _ticket) {
        timeUntilEventStarts = block.timestamp + _time;
        ticket = _ticket;
    }

    modifier onlyWhenNotPaused() {
        if (paused == true) {
            revert CONTRACT_IS_PAUSED();
        }
        _;
    }

    modifier balanceUnderThree() {
        uint balance = IERC721(ticket).balanceOf(msg.sender);
        if (balance == 2) {
            revert TICKETS_MINTED_REACHED_MAX();
        }
        _;
    }

    modifier onlyIfEventHasntStarted() {
        if (block.timestamp > timeUntilEventStarts) {
            revert EVENT_HAS_ALREADY_STARTED();
        }
        _;
    }

    function refundTicketLevelOne(bool _homeOrAway, uint _tokenId)
        external
        payable
        onlyWhenNotPaused
        onlyIfEventHasntStarted
        nonReentrant
        balanceUnderThree
    {
        if (msg.value != 5 ether) {
            revert INSUFFICIENT_FUNDS();
        }
        if (_homeOrAway == true) {
            if (_tokenId < 1 || _tokenId > 100) {
                revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
            }
        } else if (_homeOrAway == false) {
            if (_tokenId < 101 || _tokenId > 200) {
                revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
            }
        }
        status = 5;
        (bool success, ) = payable(ticket).call{value: 5 ether}("");
        require(success, "Failed to send ether");
        ITicket(ticket).receiveRefundedTicket(
            msg.sender,
            _tokenId,
            _homeOrAway,
            1
        );
        status = 0;
        emit ReceiveRefundedTicket(
            msg.sender,
            _homeOrAway,
            1,
            _tokenId,
            5 ether
        );
    }

    function refundTicketLevelTwo(bool _homeOrAway, uint _tokenId)
        external
        payable
        onlyWhenNotPaused
        onlyIfEventHasntStarted
        nonReentrant
        balanceUnderThree
    {
        if (msg.value != 4 ether) {
            revert INSUFFICIENT_FUNDS();
        }
        if (_homeOrAway == true) {
            if (_tokenId < 201 || _tokenId > 300) {
                revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
            }
        } else if (_homeOrAway == false) {
            if (_tokenId < 301 || _tokenId > 400) {
                revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
            }
        }
        status = 5;
        (bool success, ) = payable(ticket).call{value: 4 ether}("");
        require(success, "Failed to send ether");
        ITicket(ticket).receiveRefundedTicket(
            msg.sender,
            _tokenId,
            _homeOrAway,
            2
        );
        status = 0;
        emit ReceiveRefundedTicket(
            msg.sender,
            _homeOrAway,
            2,
            _tokenId,
            4 ether
        );
    }

    function refundTicketLevelThree(bool _homeOrAway, uint _tokenId)
        external
        payable
        onlyWhenNotPaused
        onlyIfEventHasntStarted
        nonReentrant
        balanceUnderThree
    {
        if (msg.value != 3 ether) {
            revert INSUFFICIENT_FUNDS();
        }
        if (_homeOrAway == true) {
            if (_tokenId < 401 || _tokenId > 500) {
                revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
            }
        } else if (_homeOrAway == false) {
            if (_tokenId < 501 || _tokenId > 600) {
                revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
            }
        }
        status = 5;
        (bool success, ) = payable(ticket).call{value: 3 ether}("");
        require(success, "Failed to send ether");
        ITicket(ticket).receiveRefundedTicket(
            msg.sender,
            _tokenId,
            _homeOrAway,
            3
        );
        status = 0;
        emit ReceiveRefundedTicket(
            msg.sender,
            _homeOrAway,
            3,
            _tokenId,
            3 ether
        );
    }

    function refundTicketLevelFour(bool _homeOrAway, uint _tokenId)
        external
        payable
        onlyWhenNotPaused
        onlyIfEventHasntStarted
        nonReentrant
        balanceUnderThree
    {
        if (msg.value != 2 ether) {
            revert INSUFFICIENT_FUNDS();
        }
        if (_homeOrAway == true) {
            if (_tokenId < 601 || _tokenId > 700) {
                revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
            }
        } else if (_homeOrAway == false) {
            if (_tokenId < 701 || _tokenId > 800) {
                revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
            }
        }
        status = 5;
        (bool success, ) = payable(ticket).call{value: 2 ether}("");
        require(success, "Failed to send ether");
        ITicket(ticket).receiveRefundedTicket(
            msg.sender,
            _tokenId,
            _homeOrAway,
            4
        );
        status = 0;
        emit ReceiveRefundedTicket(
            msg.sender,
            _homeOrAway,
            4,
            _tokenId,
            2 ether
        );
    }

    function refundTicketLevelFive(bool _homeOrAway, uint _tokenId)
        external
        payable
        onlyWhenNotPaused
        onlyIfEventHasntStarted
        nonReentrant
        balanceUnderThree
    {
        if (msg.value != 1 ether) {
            revert INSUFFICIENT_FUNDS();
        }
        if (_homeOrAway == true) {
            if (_tokenId < 801 || _tokenId > 900) {
                revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
            }
        } else if (_homeOrAway == false) {
            if (_tokenId < 901 || _tokenId > 1000) {
                revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
            }
        }
        status = 5;
        (bool success, ) = payable(ticket).call{value: 1 ether}("");
        require(success, "Failed to send ether");
        ITicket(ticket).receiveRefundedTicket(
            msg.sender,
            _tokenId,
            _homeOrAway,
            5
        );
        status = 0;
        emit ReceiveRefundedTicket(
            msg.sender,
            _homeOrAway,
            5,
            _tokenId,
            1 ether
        );
    }

    function refundTicketLevelSix(bool _homeOrAway, uint _tokenId)
        external
        payable
        onlyWhenNotPaused
        onlyIfEventHasntStarted
        nonReentrant
        balanceUnderThree
    {
        if (msg.value != 0.5 ether) {
            revert INSUFFICIENT_FUNDS();
        }
        if (_homeOrAway == true) {
            if (_tokenId < 1001 || _tokenId > 1100) {
                revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
            }
        } else if (_homeOrAway == false) {
            if (_tokenId < 1101 || _tokenId > 1200) {
                revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
            }
        }
        status = 5;
        (bool success, ) = payable(ticket).call{value: 0.5 ether}("");
        require(success, "Failed to send ether");
        ITicket(ticket).receiveRefundedTicket(
            msg.sender,
            _tokenId,
            _homeOrAway,
            6
        );
        status = 0;
        emit ReceiveRefundedTicket(
            msg.sender,
            _homeOrAway,
            6,
            _tokenId,
            0.5 ether
        );
    }

    function refundTicketLevelSeven(bool _homeOrAway, uint _tokenId)
        external
        payable
        onlyWhenNotPaused
        onlyIfEventHasntStarted
        nonReentrant
        balanceUnderThree
    {
        if (msg.value != 0.25 ether) {
            revert INSUFFICIENT_FUNDS();
        }
        if (_homeOrAway == true) {
            if (_tokenId < 1201 || _tokenId > 1300) {
                revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
            }
        } else if (_homeOrAway == false) {
            if (_tokenId < 1301 || _tokenId > 1400) {
                revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
            }
        }
        status = 5;
        (bool success, ) = payable(ticket).call{value: 0.25 ether}("");
        require(success, "Failed to send ether");
        ITicket(ticket).receiveRefundedTicket(
            msg.sender,
            _tokenId,
            _homeOrAway,
            7
        );
        status = 0;
        emit ReceiveRefundedTicket(
            msg.sender,
            _homeOrAway,
            7,
            _tokenId,
            0.25 ether
        );
    }

    function refundTicketLevelEight(bool _homeOrAway, uint _tokenId)
        external
        payable
        onlyWhenNotPaused
        onlyIfEventHasntStarted
        nonReentrant
        balanceUnderThree
    {
        if (msg.value != 0.125 ether) {
            revert INSUFFICIENT_FUNDS();
        }
        if (_homeOrAway == true) {
            if (_tokenId < 1401 || _tokenId > 1500) {
                revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
            }
        } else if (_homeOrAway == false) {
            if (_tokenId < 1501 || _tokenId > 1600) {
                revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
            }
        }
        status = 5;
        (bool success, ) = payable(ticket).call{value: 0.125 ether}("");
        require(success, "Failed to send ether");
        ITicket(ticket).receiveRefundedTicket(
            msg.sender,
            _tokenId,
            _homeOrAway,
            8
        );
        status = 0;
        emit ReceiveRefundedTicket(
            msg.sender,
            _homeOrAway,
            8,
            _tokenId,
            0.125 ether
        );
    }

    function refundTicketLevelNine(bool _homeOrAway, uint _tokenId)
        external
        payable
        onlyWhenNotPaused
        onlyIfEventHasntStarted
        nonReentrant
        balanceUnderThree
    {
        if (msg.value != 0.1 ether) {
            revert INSUFFICIENT_FUNDS();
        }
        if (_homeOrAway == true) {
            if (_tokenId < 1601 || _tokenId > 1700) {
                revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
            }
        } else if (_homeOrAway == false) {
            if (_tokenId < 1701 || _tokenId > 1800) {
                revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
            }
        }
        status = 5;
        (bool success, ) = payable(ticket).call{value: 0.1 ether}("");
        require(success, "Failed to send ether");
        ITicket(ticket).receiveRefundedTicket(
            msg.sender,
            _tokenId,
            _homeOrAway,
            9
        );
        status = 0;
        emit ReceiveRefundedTicket(
            msg.sender,
            _homeOrAway,
            9,
            _tokenId,
            0.1 ether
        );
    }

    function refundTicketLevelTen(bool _homeOrAway, uint _tokenId)
        external
        payable
        onlyWhenNotPaused
        onlyIfEventHasntStarted
        nonReentrant
        balanceUnderThree
    {
        if (msg.value != 0.05 ether) {
            revert INSUFFICIENT_FUNDS();
        }
        if (_homeOrAway == true) {
            if (_tokenId < 1801 || _tokenId > 1900) {
                revert HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
            }
        } else if (_homeOrAway == false) {
            if (_tokenId < 1901 || _tokenId > 2000) {
                revert AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
            }
        }
        status = 5;
        (bool success, ) = payable(ticket).call{value: 0.05 ether}("");
        require(success, "Failed to send ether");
        ITicket(ticket).receiveRefundedTicket(
            msg.sender,
            _tokenId,
            _homeOrAway,
            10
        );
        status = 0;
        emit ReceiveRefundedTicket(
            msg.sender,
            _homeOrAway,
            10,
            _tokenId,
            0.05 ether
        );
    }

    function setPause(bool _value) external onlyOwner {
        paused = _value;
    }

    function areYouAllowedToReceiveTicketFromContract()
        public
        view
        returns (bool)
    {
        return status == 5;
    }
}
