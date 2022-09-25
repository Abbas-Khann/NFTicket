import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  ReceiveRefundedTicket
} from "../generated/ReceiveRefundedTicketFromContract/ReceiveRefundedTicketFromContract"

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

export function createReceiveRefundedTicketEvent(
  To: Address,
  HomeOrAway: boolean,
  SeatLevel: BigInt,
  TokenId: BigInt,
  Amount: BigInt
): ReceiveRefundedTicket {
  let receiveRefundedTicketEvent = changetype<ReceiveRefundedTicket>(
    newMockEvent()
  )

  receiveRefundedTicketEvent.parameters = new Array()

  receiveRefundedTicketEvent.parameters.push(
    new ethereum.EventParam("To", ethereum.Value.fromAddress(To))
  )
  receiveRefundedTicketEvent.parameters.push(
    new ethereum.EventParam(
      "HomeOrAway",
      ethereum.Value.fromBoolean(HomeOrAway)
    )
  )
  receiveRefundedTicketEvent.parameters.push(
    new ethereum.EventParam(
      "SeatLevel",
      ethereum.Value.fromUnsignedBigInt(SeatLevel)
    )
  )
  receiveRefundedTicketEvent.parameters.push(
    new ethereum.EventParam(
      "TokenId",
      ethereum.Value.fromUnsignedBigInt(TokenId)
    )
  )
  receiveRefundedTicketEvent.parameters.push(
    new ethereum.EventParam("Amount", ethereum.Value.fromUnsignedBigInt(Amount))
  )

  return receiveRefundedTicketEvent
}
