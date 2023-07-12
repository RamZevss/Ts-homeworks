import { cpuUsage } from "process";
import { Transaction,CurrencyEnum } from "./transactions";

export default class Card {
    transactions: Transaction[];
    constructor(){
        this.transactions = [];
    }
    addTransaction(transaction: Transaction): string;
    addTransaction(amount: number, currency: CurrencyEnum): string;
  
    addTransaction(a1: Transaction | number, b2?: CurrencyEnum): string {
      if (a1 instanceof Transaction) {
        const transaction = a1;
        this.transactions.push(transaction);
        return transaction.getId();
      } else if (typeof a1 === 'number' && b2) {
        const amount = a1;
        const currency = b2;
        const transaction = new UpdatedTransaction(amount, currency);
        this.transactions.push(transaction);
        return transaction.getId();
      } else {
        throw new Error('Erorrrrrrrr');
      }
    }
   
    getTransaction(id: string ): Transaction | undefined {
        return this.transactions.find((transaction)=>transaction.getId() === id)
    }
    getMoney(currency:CurrencyEnum): number{
        return this.transactions
        .filter((transaction)=>transaction.getCurrency()===currency)
        .reduce ((sum,transaction)=> sum + transaction.getAmount(),0)
    }

}
class UpdatedTransaction extends Transaction{
    getAmount(): number {
        return this.amount 
    }
    getCurrency(): CurrencyEnum {
        return this.currency
    }
}

