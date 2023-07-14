


import {Pocket} from "./pocket";
import {Card} from "./card";

import {CurrencyEnum} from "./transactions";
import { BonusCard } from "./bonusCard";

const pocket = new Pocket();

const card = new Card();
const bonusCard = new BonusCard();

pocket.addCard("A", card);
pocket.addCard("B ", bonusCard);
console.log(pocket.getCard("A")); 
console.log(pocket.getCard("B"));

const transactionId1 = card.addTransaction(100, CurrencyEnum.USD);
const transactionId2 = card.addTransaction(50, CurrencyEnum.USD);
const transactionId3 = bonusCard.addTransaction(2100, CurrencyEnum.UAH);
const transactionId4 = bonusCard.addTransaction(5200, CurrencyEnum.UAH);

console.log(card.getTransaction(transactionId1)); 
console.log(card.getTransaction(transactionId2)); 
console.log(bonusCard.getTransaction(transactionId3)); 
console.log(bonusCard.getTransaction(transactionId4)); 

console.log(card.getMoney(CurrencyEnum.USD)); 
console.log(bonusCard.getMoney(CurrencyEnum.UAH)); 

console.log(pocket.totalAmount(CurrencyEnum.USD)); 
console.log(pocket.totalAmount(CurrencyEnum.UAH))