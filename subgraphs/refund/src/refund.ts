import { BigInt } from "@graphprotocol/graph-ts";
import { OwnershipTransferred, RefundTicket } from "../generated/Refund/Refund";
import { Refund } from "../generated/schema";

export function handleRefundTicket(event: RefundTicket): void {
  let entity = Refund.load(event.params.TokenId.toString());

  if (!entity) {
    entity = new Refund(event.params.TokenId.toString());
  }

  entity.Amount = event.params.Amount;
  entity.HomeOrAway = event.params.HomeOrAway;
  entity.TokenId = event.params.TokenId;
  entity.SeatLevel = event.params.SeatLevel;
  entity.save();
}
export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
