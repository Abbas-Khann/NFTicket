import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { OwnershipTransferred, ResellTicket } from "../generated/Resell/Resell"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createResellTicketEvent(
  From: Address,
  To: Address,
  HomeOrAway: boolean,
  SeatLevel: BigInt,
  TokenId: BigInt,
  Amount: BigInt
): ResellTicket {
  let resellTicketEvent = changetype<ResellTicket>(newMockEvent())

  resellTicketEvent.parameters = new Array()

  resellTicketEvent.parameters.push(
    new ethereum.EventParam("From", ethereum.Value.fromAddress(From))
  )
  resellTicketEvent.parameters.push(
    new ethereum.EventParam("To", ethereum.Value.fromAddress(To))
  )
  resellTicketEvent.parameters.push(
    new ethereum.EventParam(
      "HomeOrAway",
      ethereum.Value.fromBoolean(HomeOrAway)
    )
  )
  resellTicketEvent.parameters.push(
    new ethereum.EventParam(
      "SeatLevel",
      ethereum.Value.fromUnsignedBigInt(SeatLevel)
    )
  )
  resellTicketEvent.parameters.push(
    new ethereum.EventParam(
      "TokenId",
      ethereum.Value.fromUnsignedBigInt(TokenId)
    )
  )
  resellTicketEvent.parameters.push(
    new ethereum.EventParam("Amount", ethereum.Value.fromUnsignedBigInt(Amount))
  )

  return resellTicketEvent
}
