
import { Transaction,CurrencyEnum } from './transactions';


export interface ICard {
  addTransaction(transaction: Transaction): string;
  addTransaction(amount: number, currency: CurrencyEnum): string;
  getTransaction(id: string): Transaction | undefined;
  getMoney(currency: CurrencyEnum): number;
}

export class Card implements ICard {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  addTransaction(transaction: Transaction): string;
  addTransaction(amount: number, currency: CurrencyEnum): string;
  addTransaction(a: Transaction | number, b?: CurrencyEnum): string {
    if (a instanceof Transaction) {
      this.transactions.push(a);
      return a.getId();
    } else if (typeof a === "number" && b) {
      const transaction = new Transaction(a, b);
      this.transactions.push(transaction);
      return transaction.getId();
    }

    throw new Error("Invalid Transaction");
  }
  getTransaction(id: string): Transaction | undefined {
    return this.transactions.find((transaction) => transaction.getId() === id);
  }

  getMoney(currency: CurrencyEnum): number {
    return this.transactions
      .filter((transaction) => transaction.getCurrency() === currency)
      .reduce((sum, transaction) => sum + transaction.getAmount(), 0);
  }
}
