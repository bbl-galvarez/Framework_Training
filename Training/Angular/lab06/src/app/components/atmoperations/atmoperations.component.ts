import { Component, OnInit } from '@angular/core';
import { AtmServiceService } from '../../services/atm-service.service';
import { AtmResponseOperation,AtmResponseOperationBalance } from '../../models/atm.interface';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-atmoperations',
  templateUrl: './atmoperations.component.html',
  styleUrls: ['./atmoperations.component.css']
})
export class AtmoperationsComponent implements OnInit {
  
  public currentOperation   : string = '';
  public currentBalance     : number = 0;
  public atmResponse        : AtmResponseOperation = <AtmResponseOperation>{}; 
  public atmResponseBalance : AtmResponseOperationBalance = <AtmResponseOperationBalance>{};
  public txnAmountForm      : FormGroup;

  constructor(public atmService : AtmServiceService,
  public route : ActivatedRoute) { }

  ngOnInit() {

    this.txnAmountForm = new FormGroup({
      transactionAmount : new FormControl('',Validators.required)
    }
    );

        //let acctNumber = this.atmService.getAccountNumber();

        this.route.params.subscribe(data=>{
          
            console.log("received parameter",data['arg']);

               switch (data['arg']) {
                     case 'deposit'   : { this.currentOperation = "Making a Deposit"; break }
                     case 'withdrawl' : { this.currentOperation = "Making a Withdrawl"; break }
                     
               }
        });
           
  }

  performOperation(){
    let acctNumber = this.atmService.getAccountNumber();

    this.route.params.subscribe(data=>{

            switch (data['arg']) {
                  case 'deposit'   : { 
                    this.makeADeposit(acctNumber,Number(this.txnAmountForm.get("transactionAmount").value)); 
                    this.txnAmountForm.reset();
                    break 
                  }
                  case 'withdrawal' : { 
                    this.makeAWithdraw(acctNumber,Number(this.txnAmountForm.get("transactionAmount").value)); 
                    this.txnAmountForm.reset();
                    break 
                  }
                  
            }
    });
  }


  showBalance(acct:string) {

    this.currentOperation = 'Querying Balance';

    this.atmService.getCurrentBalance(acct).subscribe(result => {
            this.atmResponseBalance = result;
            this.currentBalance = result.currentBalance;
      });

  }

  makeADeposit(acct:string,amount:number) {

    //this.currentOperation = "Making a Deposit";

    this.atmService.deposit(acct,amount).then( result => {
               this.atmResponse = result;
               this.currentBalance = result.currentBalance;
    });
    
  }

  makeAWithdraw(acct:string,amount:number) {

       //this.currentOperation = "Making a Withdrawl";

        this.atmService.withDraw(acct,amount).then( result => {
                this.atmResponse = result;
                this.currentBalance = result.currentBalance;

      });  
  }

  showPanel(){
    return this.atmService.accountValid;
  }

}
