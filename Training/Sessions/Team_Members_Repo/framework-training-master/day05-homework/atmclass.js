"use strict";
exports.__esModule = true;
var AtmClass = /** @class */ (function () {
    function AtmClass() {
    }
    ;
    AtmClass.prototype.setInitialBalance = function (arg) {
        this.currentBalance = arg;
    };
    AtmClass.prototype.viewBalance = function () {
        console.log("Balance is " + this.currentBalance);
    };
    AtmClass.prototype.deposit = function (arg) {
        this.currentBalance = this.currentBalance + arg;
    };
    AtmClass.prototype.withdraw = function (arg) {
        this.currentBalance = this.currentBalance - arg;
    };
    return AtmClass;
}());
exports.AtmClass = AtmClass;
