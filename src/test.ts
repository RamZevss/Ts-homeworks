import Card from "./card";
import { CurrencyEnum, Transaction } from "./transactions";

const card = new Card();

const firstTrans: string = card.addTransaction(1000, CurrencyEnum.USD);
const SecondTrans: string = card.addTransaction(2222222, CurrencyEnum.UAH);

const transactionMain: Transaction | undefined =
  card.getTransaction(firstTrans);
if (transactionMain) {
  console.log(transactionMain.getAmount());
  console.log(transactionMain.getCurrency());
}
const transactionMain2: Transaction | undefined =
  card.getTransaction(SecondTrans);
if (transactionMain2) {
  console.log(transactionMain2.getAmount());
  console.log(transactionMain2.getCurrency());
}

const usd: number = card.getMoney(CurrencyEnum.USD);
console.log(usd);
const uah: number = card.getMoney(CurrencyEnum.UAH);
console.log(uah);
console.log(firstTrans);
console.log(SecondTrans);
