"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var card_1 = require("./card");
var transactions_1 = require("./transactions");
var card = new card_1.default();
var firstTrans = card.addTransaction(1000, transactions_1.CurrencyEnum.USD);
var SecondTrans = card.addTransaction(2222222, transactions_1.CurrencyEnum.UAH);
var transactionMain = card.getTransaction(firstTrans);
if (transactionMain) {
    console.log(transactionMain.getAmount());
    console.log(transactionMain.getCurrency());
}
var transactionMain2 = card.getTransaction(SecondTrans);
if (transactionMain2) {
    console.log(transactionMain2.getAmount());
    console.log(transactionMain2.getCurrency());
}
var usd = card.getMoney(transactions_1.CurrencyEnum.USD);
console.log(usd);
var uah = card.getMoney(transactions_1.CurrencyEnum.UAH);
console.log(uah);
console.log(firstTrans);
console.log(SecondTrans);
