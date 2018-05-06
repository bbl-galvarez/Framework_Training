/*
* This is the component for LAB 03 - Developing an Angular App 
* mocking up the data provided by the Service.
* by EyC Consulting Group www.eycgrupo.com
*/
import { Component } from '@angular/core';
import { AtmServiceService } from './services/atm-service.service';
import { AtmResponseOperation } from './models/atm.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {

  title            = 'ATM Project ';
  currentOperation = '';
  atmResponse      : AtmResponseOperation = <AtmResponseOperation>{}; 
 
 
    constructor(public atmService : AtmServiceService) {

      /*
       * We are going to be simulating a delay of 2 seconds between calls.
       * We could have chained the setTimeout function and place a 2 seconds
       * on each call. For simplicity we are keeping them separated with a 
       * 2 seconds interval each.
      */
      
        this.showBalance('23232-1');

        setTimeout(() => {
             this.makeADeposit('23232-1',100);

        }, 2000);

        setTimeout(() => {
          this.makeAWithdraw('23232-1',50);
          
        }, 4000);


       }


  showBalance(acct:string) {

    //We change the component property currentOperation
    this.currentOperation = 'Querying Balance';

    /*
    * The mocked up object returned by the method in the service
    * is declared and created here, receiving the values from the Service method getCurrentBalance
    */
     this.atmService.getCurrentBalance(acct).subscribe(result => {
       this.atmResponse = result;
     });

    
  }

  makeADeposit(acct:string,amount:number) {
    this.currentOperation = "Making a Deposit";
    this.atmService.deposit(acct,amount).subscribe(result => {
        this.atmResponse = result;
    });
    
  }

  makeAWithdraw(acct:string,amount:number) {
    this.currentOperation = "Making a Withdrawl";
      this.atmService.withDraw(acct,amount).subscribe(result => {
        this.atmResponse = result;
      });  
  }

}
