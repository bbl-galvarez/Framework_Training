import { Component, OnInit, AfterViewInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { AtmServiceService } from '../../services/atm-service.service';
import { AtmResponseOperation,AtmResponseOperationBalance } from '../../models/atm.interface';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-atmoperations',
  templateUrl: './atmoperations.component.html',
  styleUrls: ['./atmoperations.component.css']
})
export class AtmoperationsComponent implements OnInit{
  
  public currentBalance     : number = 0;
  public atmResponse        : AtmResponseOperation = <AtmResponseOperation>{}; 
  public atmResponseBalance : AtmResponseOperationBalance = <AtmResponseOperationBalance>{};
  public title              : string = '';
  
  private amount            : number = 0;
  private operation         : number = 0;

  public theForm    : FormGroup;

  constructor(public atmService : AtmServiceService,
  public route : ActivatedRoute) { }

 
  ngOnInit() {
 
        let acctNumber = this.atmService.getAccountNumber();

        this.route.params.subscribe(data=>{
          
            console.log("received parameter",data['arg']);

               switch (data['arg']) {
                     case 'deposit'   : { this.operation = 1; this.title = "Deposit"; break }
                     case 'withdrawl' : { this.operation = 2; this.title = "Witdraw"; break }
                     
               }
        });

        this.theForm = new FormGroup({
              amount : new FormControl(0,Validators.required)
        });

        this.atmService.onUpdatedTransactions$.subscribe(data=>{

              this.theForm.setValue({amount:0});

         });

           
  }

  doOperation(mickey:FormGroup) {

    this.amount =  mickey.value.amount;

    if (this.operation == 1 ) {
           this.makeADeposit(this.atmService.getAccountNumber(),this.amount);   
    }
    else {
          this.makeAWithdraw(this.atmService.getAccountNumber(),this.amount);
    }
  }


  makeADeposit(acct:string,amount:number) {
 
    this.atmService.deposit(acct,amount).then( result => {
               this.atmResponse = result;
               this.currentBalance = result.currentBalance;
    });
    
  }

  makeAWithdraw(acct:string,amount:number) {

        this.atmService.withDraw(acct,amount).then( result => {
                this.atmResponse = result;
                this.currentBalance = result.currentBalance;

      });  
  }

  showPanel(){
    return this.atmService.accountValid;
  }

}
