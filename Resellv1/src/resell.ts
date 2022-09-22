import { BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  ResellTicket
} from "../generated/Resell/Resell"
import { Resell } from "../generated/schema"

export function handleResellTicket(event: ResellTicket): void {
  let entity = Resell.load(event.params.TokenId.toString());

  if (!entity) {
    entity = new Resell(event.params.TokenId.toString());
  }

  entity.Amount = event.params.Amount;
  entity.From = event.params.From;
  entity.HomeOrAway = event.params.HomeOrAway;
  entity.TokenId = event.params.TokenId;
  entity.SeatLevel = event.params.SeatLevel;
  entity.To = event.params.To;
  entity.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

