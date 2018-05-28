import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators} from '@angular/forms';
//import{ AlertController }
import { AlertController } from 'ionic-angular';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  myForm:FormGroup;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public atmService: AtmserviceProvider,
    public loadCtrl: LoadingController,
    public toastCtrl: ToastController) {
    
      this.myForm = new FormGroup({
      accountNumber : new FormControl('', Validators.required),
      pinNumber : new FormControl('', Validators.required)
    })
  
  }

  doLogin(){

    console.log("Went into DO LOGIN");

    let loader = this.loadCtrl.create({content:'Authenticating'});

    let accountNumber = this.myForm.get("accountNumber").value;
    let pinNumber = this.myForm.get("pinNumber").value;

    this.atmService.setAccountNumber(accountNumber, pinNumber).then(
      (succ) =>{
          loader.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Form Submitted! It works!',
            subTitle: 'Account Number' + accountNumber,
            buttons: ['OK']
          });
          alert.present();
      },
      (err) =>{
          let toast = this.toastCtrl.create({message: 'Invalid Login!'});
          toast.present();
          loader.dismiss();
      }
    )
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
