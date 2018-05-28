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
//import{ AlertController }
import { AlertController } from 'ionic-angular';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, atmService, loadCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.atmService = atmService;
        this.loadCtrl = loadCtrl;
        this.toastCtrl = toastCtrl;
        this.myForm = new FormGroup({
            accountNumber: new FormControl('', Validators.required),
            pinNumber: new FormControl('', Validators.required)
        });
    }
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        var loader = this.loadCtrl.create({ content: 'Authenticating' });
        var accountNumber = this.myForm.get("accountNumber").value;
        var pinNumber = this.myForm.get("pinNumber").value;
        this.atmService.setAccountNumber(accountNumber, pinNumber).then(function (succ) {
            loader.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Form Submitted! It works!',
                subTitle: 'Account Number' + accountNumber,
                buttons: ['OK']
            });
            alert.present();
        }, function (err) {
            var toast = _this.toastCtrl.create({ message: 'Invalid Login!' });
            toast.present();
            loader.dismiss();
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AlertController,
            AtmserviceProvider,
            LoadingController,
            ToastController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map