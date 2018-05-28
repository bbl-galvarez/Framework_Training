var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';
var AtmserviceProvider = /** @class */ (function () {
    function AtmserviceProvider(http) {
        this.http = http;
        this.onUpdatedTransactions$ = new Subject();
        this.onUpdateAccountNumber$ = new Subject();
        this.END_POINT = environment.urlEndPoint;
        this.accountValid = undefined;
    }
    AtmserviceProvider.prototype.getToken = function () { return this.token !== undefined ? this.token : ''; };
    AtmserviceProvider.prototype.setAccountNumber = function (acct, pin) {
        var _this = this;
        return new Promise(function (succ, reject) {
            _this.accountExists(acct, pin).then(function (resp) {
                if (resp.status == 0) {
                    _this.accountNumber = acct;
                    _this.accountValid = true;
                    _this.token = resp.token;
                    _this.onUpdateAccountNumber$.next();
                    succ(true);
                }
                else {
                    _this.accountValid = false;
                    reject(false);
                }
            });
        });
    };
    AtmserviceProvider.prototype.getAccountNumber = function () {
        return this.accountNumber;
    };
    AtmserviceProvider.prototype.isAlive = function () {
        return this.http.get(this.END_POINT);
    };
    AtmserviceProvider.prototype.accountExists = function (acct, pin) {
        var _this = this;
        return new Promise(function (success, reject) {
            var FINDACCOUNT = '/find/' + acct + '/pin/' + pin;
            _this.http.get(_this.END_POINT + FINDACCOUNT)
                .subscribe(function (resp) { success(resp); }, function (err) { reject(err); });
        });
    };
    AtmserviceProvider.prototype.getCurrentBalance = function (acct) {
        var BALANCE = "/" + acct;
        return this.http.get(this.END_POINT + BALANCE);
    };
    AtmserviceProvider.prototype.withDraw = function (acct, amount) {
        var _this = this;
        var WITHDRAW = "/withdraw/" + acct + "/amount/" + amount;
        return new Promise(function (success, reject) {
            _this.http.get(_this.END_POINT + WITHDRAW).subscribe(function (resp) { success(resp); }, function (err) { reject(err); }, function () {
                console.log('onUpdatedTransactions.next()');
                _this.onUpdatedTransactions$.next();
            });
        });
    };
    AtmserviceProvider.prototype.deposit = function (acct, amount) {
        var _this = this;
        var DEPOSIT = "/deposit/" + acct + "/amount/" + amount;
        return new Promise(function (success, reject) {
            _this.http.get(_this.END_POINT + DEPOSIT).subscribe(function (resp) { success(resp); }, function (err) { reject(err); }, function () {
                console.log('onUpdatedTransactions.next()');
                _this.onUpdatedTransactions$.next();
            });
        });
    };
    AtmserviceProvider.prototype.getLastOperations = function (acct) {
        var TRANSACTIONS = "/transactions/" + acct;
        return this.http.get(this.END_POINT + TRANSACTIONS);
    };
    AtmserviceProvider.prototype.logOff = function () {
        this.accountNumber = '';
        this.accountName = '';
        this.currentBalance = 0;
        this.token = undefined;
        this.accountValid = undefined;
    };
    AtmserviceProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], AtmserviceProvider);
    return AtmserviceProvider;
}());
export { AtmserviceProvider };
//# sourceMappingURL=atmservice.js.map