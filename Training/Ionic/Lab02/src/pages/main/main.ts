import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  currentBalance : number = 0;
  accountName : string;

  constructor(public navCtrl: NavController, public atmService : AtmserviceProvider) {

  }

  ionViewWillEnter(){
    this.atmService.getCurrentBalance(this.atmService.accountNumber).subscribe(resp => {
      this.currentBalance = resp.currentBalance;
      this.accountName = resp.accountName
    })
  }

  ionViewCanEnter(): boolean{
      return this.atmService.accountValid;
  }

  getAccountName(): string{
    return this.accountName;
  }

  makeDeposit(){
    this.navCtrl.push("DepositPage");
  }

  makeWithdraw(){
    this.navCtrl.push("WithdrawPage");
  }

  getCurrentBalance(): number{
    return this.currentBalance;
  }

}
