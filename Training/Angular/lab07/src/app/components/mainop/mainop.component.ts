import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AtmServiceService } from '../../services/atm-service.service';
import { AtmResponseOperationBalance } from '../../models/atm.interface';

@Component({
  selector: 'app-mainop',
  templateUrl: './mainop.component.html',
  styleUrls: ['./mainop.component.css']
})
export class MainopComponent implements OnInit {

  public currentCard : AtmResponseOperationBalance = <AtmResponseOperationBalance>{};

 
  constructor(public router : Router, 
               public atmService : AtmServiceService) { }

  ngOnInit() {

    this.atmService.getCurrentBalance(this.atmService.getAccountNumber()).
         subscribe (data => {
             this.currentCard = data;     
         });

    this.atmService.onUpdatedTransactions$.subscribe(ok=>{

          this.atmService.getCurrentBalance(this.atmService.getAccountNumber()).
               subscribe (data => {
                   this.currentCard = data;     
          });      
    })
      
  }

  
  goToTransactionList() {
     // this.router.navigate([{outlets: {insideatm:['transactionlist',{op:true}]}}]);
     this.router.navigate(['mainoperation/transactionlist']);
   }

   goToMakeADeposit() {
     //  this.router.navigate([{outlets: {insideatm:['operations',{ arg : 'deposit' }]}}]);
      this.router.navigate(['mainoperation/operations',{arg:"deposit"}]);

   }

   goToMakeAWithdrawl() {
    //this.router.navigate([{outlets: {insideatm:['operations',{ arg: 'withdrawl' }]}}]);
     this.router.navigate(['mainoperation/operations',{arg:"withdrawl"}])
}

  logOff(){

    this.atmService.logOff();
    this.router.navigate(['/auth']);
  
  }

}
