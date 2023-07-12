"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = exports.CurrencyEnum = void 0;
var uuid_1 = require("uuid");
var CurrencyEnum;
(function (CurrencyEnum) {
    CurrencyEnum["USD"] = "USD";
    CurrencyEnum["UAH"] = "UAH";
})(CurrencyEnum || (exports.CurrencyEnum = CurrencyEnum = {}));
var Transaction = /** @class */ (function () {
    function Transaction(amount, currency) {
        this.id = (0, uuid_1.v4)();
        this.amount = amount;
        this.currency = currency;
    }
    Transaction.prototype.getId = function () {
        return this.id;
    };
    return Transaction;
}());
exports.Transaction = Transaction;
