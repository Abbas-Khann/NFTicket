import { BigInt } from "@graphprotocol/graph-ts";
import {
  Approval,
  ApprovalForAll,
  BuyTicket,
  OwnershipTransferred,
  Transfer,
} from "../generated/Ticket/Ticket";
import { Ticket } from "../generated/schema";

export function handleBuyTicket(event: BuyTicket): void {
  let entity = Ticket.load(event.params.TokenId.toString());

  if (!entity) {
    entity = new Ticket(event.params.TokenId.toString());
  }

  entity.Amount = event.params.Amount;
  entity.From = event.params.From;
  entity.HomeOrAway = event.params.HomeOrAway;
  entity.TokenId = event.params.TokenId;
  entity.SeatLevel = event.params.SeatLevel;
  entity.save();
}

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTransfer(event: Transfer): void {}
