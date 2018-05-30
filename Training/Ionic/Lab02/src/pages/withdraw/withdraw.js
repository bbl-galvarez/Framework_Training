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
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';
var WithdrawPage = /** @class */ (function () {
    function WithdrawPage(navCtrl, navParams, atmServiceProvider, alertCtrl, toastCtrl, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.atmServiceProvider = atmServiceProvider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadCtrl = loadCtrl;
        this.withdrawForm = new FormGroup({
            amount: new FormControl('', Validators.required),
        });
    }
    WithdrawPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WithdrawPage');
    };
    WithdrawPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.atmServiceProvider.getCurrentBalance(this.atmServiceProvider.accountNumber).subscribe(function (resp) {
            _this.currentBalance = resp.currentBalance;
        });
    };
    WithdrawPage.prototype.performWithdraw = function () {
        var _this = this;
        var loader = this.loadCtrl.create({ content: 'Submitting' });
        loader.present();
        var amount = this.withdrawForm.get("amount").value;
        var accountNumber = this.atmServiceProvider.getAccountNumber();
        if (amount <= this.currentBalance) {
            this.atmServiceProvider.withDraw(accountNumber, amount).then(function (succ) {
                loader.dismiss();
                var withdrawAlert = _this.alertCtrl.create({
                    title: 'Withdrawal Successful',
                    subTitle: "Account Number:" + accountNumber + ", Amount: " + amount,
                    buttons: ['OK']
                });
                withdrawAlert.present();
                _this.navCtrl.pop();
            }, function (err) {
                var toast = _this.toastCtrl.create({ message: "Withdraw Unsuccessful!", duration: 3000 });
                loader.dismiss();
                toast.present();
                _this.navCtrl.pop();
            });
        }
        else {
            var toast = this.toastCtrl.create({ message: "Requested amount is greater than available balance", duration: 3000 });
            loader.dismiss();
            toast.present();
        }
    };
    WithdrawPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-withdraw',
            templateUrl: 'withdraw.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams,
            AtmserviceProvider, AlertController,
            ToastController, LoadingController])
    ], WithdrawPage);
    return WithdrawPage;
}());
export { WithdrawPage };
//# sourceMappingURL=withdraw.js.map