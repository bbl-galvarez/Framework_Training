"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var atmdata_1 = require("./atmdata");
var atmmodel_1 = require("./atmmodel");
var Atm = /** @class */ (function () {
    function Atm() {
        this.localDB = new atmmodel_1.AccountList;
        this.localDB.accounts = atmdata_1.InitialData;
        this.transactionList = new atmmodel_1.TransactionList();
    }
    Atm.prototype.accountExists = function (acct) {
        return _.some(this.localDB.accounts, { 'accountNumber': acct }); //true or false
    };
    Atm.prototype.getCurrentBalance = function (acct) {
        if (this.accountExists(acct)) {
            var result = _.filter(this.localDB.accounts, { 'accountNumber': acct });
            return result[0].currentBalance;
        }
        else {
            return -100;
        }
    };
    Atm.prototype.withDraw = function (acct, amount) {
        if (this.accountExists(acct)) {
            var result = _.findIndex(this.localDB.accounts, { 'accountNumber': acct });
            this.localDB.accounts[result].currentBalance -= amount;
            var newTransaction = new atmmodel_1.TransactionModel;
            newTransaction.accountNumber = acct;
            newTransaction.amount = amount;
            newTransaction.transactionType = "withdraw";
            this.transactionList.transactions.push(newTransaction);
            return this.localDB.accounts[result].currentBalance;
        }
        else {
            return -100;
        }
    };
    Atm.prototype.deposit = function (acct, amount) {
        if (this.accountExists(acct)) {
            var result = _.findIndex(this.localDB.accounts, { 'accountNumber': acct });
            this.localDB.accounts[result].currentBalance += amount;
            var newTransaction = new atmmodel_1.TransactionModel;
            newTransaction.accountNumber = acct;
            newTransaction.amount = amount;
            newTransaction.transactionType = "deposit";
            this.transactionList.transactions.push(newTransaction);
            return this.localDB.accounts[result].currentBalance;
        }
        else {
            return -100;
        }
    };
    Atm.prototype.getLastOperations = function (acct) {
        var result = new atmmodel_1.TransactionList();
        if (this.accountExists(acct)) {
            result.transactions = _.filter(this.transactionList.transactions, { 'accountNumber': acct });
        }
        return result;
    };
    return Atm;
}());
exports.Atm = Atm;
