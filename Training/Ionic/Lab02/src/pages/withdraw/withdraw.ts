import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController} from  'ionic-angular';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';

@IonicPage()
@Component({
  selector: 'page-withdraw',
  templateUrl: 'withdraw.html',
})
export class WithdrawPage {

  currentBalance : number;
  withdrawForm : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public atmServiceProvider : AtmserviceProvider, public alertCtrl: AlertController,
    public toastCtrl : ToastController, public loadCtrl : LoadingController) {

      this.withdrawForm = new FormGroup({
        amount : new FormControl('', Validators.required),
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WithdrawPage');
  }

  ionViewWillEnter(){
    this.atmServiceProvider.getCurrentBalance(this.atmServiceProvider.accountNumber).subscribe(resp => {
      this.currentBalance = resp.currentBalance;
    })
  }

  performWithdraw(){

    let loader = this.loadCtrl.create({content: 'Submitting'});
    loader.present();

    let amount = this.withdrawForm.get("amount").value;
    let accountNumber = this.atmServiceProvider.getAccountNumber();

    if(amount <= this.currentBalance){
      this.atmServiceProvider.withDraw(accountNumber, amount).then (
        (succ) => {
          loader.dismiss();
          let withdrawAlert = this.alertCtrl.create({
            title: 'Withdrawal Successful',
            subTitle: "Account Number:" + accountNumber + ", Amount: " + amount,
            buttons: ['OK']
          });
          withdrawAlert.present();
          this.navCtrl.pop();
        }, 
        (err) => {
          let toast = this.toastCtrl.create({message: "Withdraw Unsuccessful!", duration: 3000});
          loader.dismiss();
          toast.present();
          this.navCtrl.pop();
        }
      );
    }else{
      let toast = this.toastCtrl.create({message: "Requested amount is greater than available balance", duration: 3000});
          loader.dismiss();
          toast.present();
    }
  }

}
