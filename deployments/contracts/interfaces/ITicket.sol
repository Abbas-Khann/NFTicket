//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface ITicket {
    // =============================================================
    //                            ERRORS
    // =============================================================

    // Triggered when incorrect ether amount is passed
    // Returns the correctPrice that must be passed
    error INSUFFICIENT_FUNDS(uint correctPrice);

    // Triggered when an incorrect seat level is passed for purchase
    error INCORRECT_SEAT();

    // Triggered when the price is not set for the called seat
    // Returns the seat number that is not set for
    error PRICE_NOT_SET(uint seat);

    error NO_HOME_SEATS_AVAILABLE();
    error NO_AWAY_SEATS_AVAILABLE();

    // Triggered when the max amount of tickets holdable are reached
    error TICKETS_MINTED_REACHED_MAX();
    error HOME_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
    error AWAY_TOKEN_ID_FOR_SEAT_LEVEL_OUT_OF_BOUNDS();
    error EVENT_HAS_ALREADY_STARTED();
    error EVENT_HASNT_STARTED_YET();
    error NOT_ALLOWED_TO_TRANSFER();

    // =============================================================
    //                            EVENTS
    // =============================================================

    event BuyTicket(
        address From,
        side HomeOrAway,
        uint SeatLevel,
        uint TokenId,
        uint Amount
    );

    // =============================================================
    //                            ENUMS
    // =============================================================

    enum side {
        HOME,
        AWAY
    }

    // =============================================================
    //                            FUNCTIONS
    // =============================================================

    function transferTicket(
        address from,
        address to,
        uint256 tokenId,
        bytes memory data,
        bool homeOrAway,
        uint seatLevel
    ) external;

    function refundTicketToContract(
        address from,
        uint256 tokenId,
        bool homeOrAway,
        uint seatLevel
    ) external;

    function receiveRefundedTicket(
        address to,
        uint256 tokenId,
        bool homeOrAway,
        uint seatLevel
    ) external;
}
