import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  WithdrawForm : FormGroup;
  DepositForm : FormGroup;

  currentBalance : number = 0;
  accountName : string;

  constructor(public navCtrl: NavController, public atmService : AtmserviceProvider) {
    
    this.WithdrawForm = new FormGroup(
      {
        txnAmount : new FormControl('',Validators.required)
      }
    );

    this.DepositForm = new FormGroup(
      {
        txnAmount2 : new FormControl('',Validators.required)
      }
    );

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

  getCurrentBalance(): number{
    return this.currentBalance;
  }

}
