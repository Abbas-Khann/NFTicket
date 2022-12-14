// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Ticket extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Ticket entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Ticket must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Ticket", id.toString(), this);
    }
  }

  static load(id: string): Ticket | null {
    return changetype<Ticket | null>(store.get("Ticket", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get From(): Bytes {
    let value = this.get("From");
    return value!.toBytes();
  }

  set From(value: Bytes) {
    this.set("From", Value.fromBytes(value));
  }

  get HomeOrAway(): boolean {
    let value = this.get("HomeOrAway");
    return value!.toBoolean();
  }

  set HomeOrAway(value: boolean) {
    this.set("HomeOrAway", Value.fromBoolean(value));
  }

  get SeatLevel(): BigInt {
    let value = this.get("SeatLevel");
    return value!.toBigInt();
  }

  set SeatLevel(value: BigInt) {
    this.set("SeatLevel", Value.fromBigInt(value));
  }

  get TokenId(): BigInt {
    let value = this.get("TokenId");
    return value!.toBigInt();
  }

  set TokenId(value: BigInt) {
    this.set("TokenId", Value.fromBigInt(value));
  }

  get Amount(): BigInt {
    let value = this.get("Amount");
    return value!.toBigInt();
  }

  set Amount(value: BigInt) {
    this.set("Amount", Value.fromBigInt(value));
  }
}
