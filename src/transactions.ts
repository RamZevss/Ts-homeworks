import { v4 as uuidv4 } from "uuid";

export enum CurrencyEnum {
  USD = "USD",
  UAH = "UAH",
}

export  class Transaction {
   id: string;
   amount: number;
   currency: CurrencyEnum;
  constructor(amount: number, currency: CurrencyEnum) {
    this.id = uuidv4();
    this.amount = amount;
    this.currency = currency;
  }
  getId(): string {
    return this.id;
  }
   getAmount(): number {
    return this.amount
   }
   getCurrency():CurrencyEnum {
    return this.currency
   }
}
