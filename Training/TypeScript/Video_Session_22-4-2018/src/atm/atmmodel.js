"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccountModel = /** @class */ (function () {
    function AccountModel() {
        this.accountNumber = '';
        this.currentBalance = 0;
    }
    return AccountModel;
}());
exports.AccountModel = AccountModel;
var AccountList = /** @class */ (function () {
    function AccountList() {
        this.accounts = [];
    }
    return AccountList;
}());
exports.AccountList = AccountList;
var TransactionModel = /** @class */ (function () {
    function TransactionModel() {
        this.accountNumber = '';
        this.dateOfTransaction = new Date();
        this.transactionType = '';
        this.amount = 0;
    }
    return TransactionModel;
}());
exports.TransactionModel = TransactionModel;
var TransactionList = /** @class */ (function () {
    function TransactionList() {
        this.transactions = [];
    }
    return TransactionList;
}());
exports.TransactionList = TransactionList;
