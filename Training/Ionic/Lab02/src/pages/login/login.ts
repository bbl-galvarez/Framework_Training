import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController , AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AtmserviceProvider } from '../../providers/atmservice/atmservice';
import { TabsPage } from '../../pages/tabs/tabs'; 
 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

   myForm : FormGroup;
  constructor (  public navCtrl: NavController, 
                public navParams: NavParams,
                public atmService : AtmserviceProvider,
                public loadCtrl : LoadingController,
                public alertCtrl : AlertController,
                public toastCtrl : ToastController 
             ) {
 
     this.myForm = new FormGroup(
       {
         accountNumber : new FormControl('',Validators.required),
         pinNumber : new FormControl('',Validators.required)
       }
     );
  }

  doLogin(){

   let loader =  this.loadCtrl.create({content:'Authenticating'});
   loader.present();

   let accountNumber = this.myForm.get("accountNumber").value;
   let pinNumber    =  this.myForm.get("pinNumber").value;

  
   this.atmService.setAccountNumber(accountNumber,pinNumber).then ( 
       
           (succ) => { 
                        loader.dismiss();
                        let alerta = this.alertCtrl.create({
                          title: 'Login successful',
                          subTitle : 'Account Number: ' + accountNumber,
                          buttons : ['OK']
                        });
                        alerta.present();
                        this.navCtrl.push(TabsPage);
                        //TODO: Here we have to go to the main page !
                      
            }, 
           (err) => {
                  //bad news
                  let toast = this.toastCtrl.create({message:'Invalid credentials',duration:3000});
                  loader.dismiss();
                  toast.present();

             }
            
       );
 
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
