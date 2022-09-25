import { BigInt } from "@graphprotocol/graph-ts";
import {
  OwnershipTransferred,
  ReceiveRefundedTicket,
} from "../generated/ReceiveRefundedTicketFromContract/ReceiveRefundedTicketFromContract";
import { ReceiveRefund } from "../generated/schema";

export function handleReceiveRefundedTicket(
  event: ReceiveRefundedTicket
): void {
  let entity = ReceiveRefund.load(event.params.TokenId.toString());

  if (!entity) {
    entity = new ReceiveRefund(event.params.TokenId.toString());
  }

  entity.Amount = event.params.Amount;
  entity.To = event.params.To;
  entity.HomeOrAway = event.params.HomeOrAway;
  entity.TokenId = event.params.TokenId;
  entity.SeatLevel = event.params.SeatLevel;
  entity.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
