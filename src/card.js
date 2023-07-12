"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var transactions_1 = require("./transactions");
var Card = /** @class */ (function () {
    function Card() {
        this.transactions = [];
    }
    Card.prototype.addTransaction = function (a1, b2) {
        if (a1 instanceof transactions_1.Transaction) {
            var transaction = a1;
            this.transactions.push(transaction);
            return transaction.getId();
        }
        else if (typeof a1 === 'number' && b2) {
            var amount = a1;
            var currency = b2;
            var transaction = new UpdatedTransaction(amount, currency);
            this.transactions.push(transaction);
            return transaction.getId();
        }
        else {
            throw new Error('Erorrrrrrrr');
        }
    };
    Card.prototype.getTransaction = function (id) {
        return this.transactions.find(function (transaction) { return transaction.getId() === id; });
    };
    Card.prototype.getMoney = function (currency) {
        return this.transactions
            .filter(function (transaction) { return transaction.getCurrency() === currency; })
            .reduce(function (sum, transaction) { return sum + transaction.getAmount(); }, 0);
    };
    return Card;
}());
exports.default = Card;
var UpdatedTransaction = /** @class */ (function (_super) {
    __extends(UpdatedTransaction, _super);
    function UpdatedTransaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdatedTransaction.prototype.getAmount = function () {
        return this.amount;
    };
    UpdatedTransaction.prototype.getCurrency = function () {
        return this.currency;
    };
    return UpdatedTransaction;
}(transactions_1.Transaction));
