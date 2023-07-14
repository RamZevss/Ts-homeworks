import { Transaction } from "./transactions";
import { CurrencyEnum } from "./transactions";
import { Card, ICard } from "./card";

export class BonusCard extends Card implements ICard {
    addTransaction(transaction: Transaction): string;
    addTransaction(amount: number, currency: CurrencyEnum): string;
    addTransaction(a: Transaction | number, b?: CurrencyEnum): string {
      if (a instanceof Transaction) {
        const bonusAmount = a.getAmount() * 0.1;
        const bonusTransaction = new Transaction(bonusAmount, a.getCurrency());
  
        super.addTransaction(a);
        super.addTransaction(bonusTransaction);
  
        return a.getId();
      } else if (typeof a === "number" && b) {
        const transaction = new Transaction(a, b);
        const bonusAmount = transaction.getAmount() * 0.1;
        const bonusTransaction = new Transaction(bonusAmount, transaction.getCurrency());
  
        super.addTransaction(transaction);
        super.addTransaction(bonusTransaction);
  
        return transaction.getId();
      }
  
      throw new Error("Invalid Transaction ");
    }
  }
