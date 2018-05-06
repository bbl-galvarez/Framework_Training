import { Component, OnInit } from '@angular/core';
import { AtmServiceService } from '../../services/atm-service.service';
import { AtmResponseOperation } from '../../models/atm.interface';

@Component({
  selector: 'app-operationlist',
  templateUrl: './operationlist.component.html',
  styleUrls: ['./operationlist.component.css']
})
export class OperationlistComponent implements OnInit {

  currentOperation = '';
  atmResponse      : AtmResponseOperation = <AtmResponseOperation>{}; 
 
 
  constructor(public atmService : AtmServiceService) { }

  ngOnInit() {
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

