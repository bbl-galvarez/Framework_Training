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
var DepositPage = /** @class */ (function () {
    function DepositPage(navCtrl, navParams, atmserviceProvider, alertCtrl, toastCtrl, loadCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.atmserviceProvider = atmserviceProvider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadCtrl = loadCtrl;
        this.depositForm = new FormGroup({
            amount: new FormControl('', Validators.required),
        });
    }
    DepositPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DepositPage');
    };
    DepositPage.prototype.performDeposit = function () {
        var _this = this;
        var loader = this.loadCtrl.create({ content: 'Submitting' });
        loader.present();
        var amount = this.depositForm.get("amount").value;
        var accountNumber = this.atmserviceProvider.getAccountNumber();
        this.atmserviceProvider.deposit(accountNumber, amount).then(function (succ) {
            loader.dismiss();
            var depositAlert = _this.alertCtrl.create({
                title: 'Deposit Successful',
                subTitle: "Account Number:" + accountNumber + ", Amount: " + amount,
                buttons: ['OK']
            });
            depositAlert.present();
            _this.navCtrl.pop();
        }, function (err) {
            var toast = _this.toastCtrl.create({ message: "Deposit Unsuccessful!", duration: 3000 });
            loader.dismiss();
            toast.present();
            _this.navCtrl.pop();
        });
    };
    DepositPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-deposit',
            templateUrl: 'deposit.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams,
            AtmserviceProvider, AlertController,
            ToastController, LoadingController])
    ], DepositPage);
    return DepositPage;
}());
export { DepositPage };
//# sourceMappingURL=deposit.js.map