var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';
var MainPage = /** @class */ (function () {
    function MainPage(navCtrl, atmService) {
        this.navCtrl = navCtrl;
        this.atmService = atmService;
        this.currentBalance = 0;
    }
    MainPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.atmService.getCurrentBalance(this.atmService.accountNumber).subscribe(function (resp) {
            _this.currentBalance = resp.currentBalance;
            _this.accountName = resp.accountName;
        });
    };
    MainPage.prototype.ionViewCanEnter = function () {
        return this.atmService.accountValid;
    };
    MainPage.prototype.getAccountName = function () {
        return this.accountName;
    };
    MainPage.prototype.makeDeposit = function () {
        this.navCtrl.push("DepositPage");
    };
    MainPage.prototype.makeWithdraw = function () {
        this.navCtrl.push("WithdrawPage");
    };
    MainPage.prototype.getCurrentBalance = function () {
        return this.currentBalance;
    };
    MainPage = __decorate([
        Component({
            selector: 'page-main',
            templateUrl: 'main.html'
        }),
        __metadata("design:paramtypes", [NavController, AtmserviceProvider])
    ], MainPage);
    return MainPage;
}());
export { MainPage };
//# sourceMappingURL=main.js.map