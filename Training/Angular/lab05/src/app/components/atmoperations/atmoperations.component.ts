import { Component, OnInit } from '@angular/core';
import { AtmServiceService } from '../../services/atm-service.service';
import { AtmResponseOperation,AtmResponseOperationBalance } from '../../models/atm.interface';
import { ActivatedRoute } from '@angular/router';

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

  constructor(public atmService : AtmServiceService,
  public route : ActivatedRoute) { }

  ngOnInit() {
 
        let acctNumber = this.atmService.getAccountNumber();

        this.route.params.subscribe(data=>{
          
            console.log("received parameter",data['arg']);

               switch (data['arg']) {
                     case 'deposit'   : { this.makeADeposit(acctNumber,100); break }
                     case 'withdrawl' : { this.makeAWithdraw(acctNumber,50); break }
                     
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

    this.currentOperation = "Making a Deposit";

    this.atmService.deposit(acct,amount).then( result => {
               this.atmResponse = result;
               this.currentBalance = result.currentBalance;
    });
    
  }

  makeAWithdraw(acct:string,amount:number) {

       this.currentOperation = "Making a Withdrawl";

        this.atmService.withDraw(acct,amount).then( result => {
                this.atmResponse = result;
                this.currentBalance = result.currentBalance;

      });  
  }

  showPanel(){
    return this.atmService.accountValid;
  }

}
