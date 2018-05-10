import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';
import { environment } from '../../environments/environment';

import { AtmResponse ,AtmResponseOperationBalance ,AtmResponseOperation,AtmResponseTransactions } from '../models/atm.interface';

@Injectable()
export class AtmServiceService {
   
    public onUpdatedTransactions$ = new Subject<void>();
    public onUpdateAccountNumber$ = new Subject<void>();

    private END_POINT = environment.urlEndPoint;
    
    public accountNumber : string;
    public accountName   : string;
    public currentBalance : number;

    public  accountValid   : boolean;
 
  constructor( public http: HttpClient) {
      this.accountValid = undefined;
   }

  setAccountNumber(acct:string, pin:string){
      this.accountExists(acct,pin).then ( resp => {
          if (resp.status == 0 ){
                this.accountNumber = acct;
                this.accountValid = true;
                this.onUpdateAccountNumber$.next();
          }
          else {
               this.accountValid = false;
          }
      });
 
  }
  
  getAccountNumber(){
      return this.accountNumber;
  }


  isAlive () : Observable<AtmResponse > {
     return  this.http.get<AtmResponse>(this.END_POINT);
  }

   accountExists(acct : string, pin:string ) : Promise<AtmResponse>{

    return new Promise ( (success,reject) =>{

        let FINDACCOUNT  = '/find/' + acct+'/pin/'+pin;
        this.http.get<AtmResponse>(this.END_POINT + FINDACCOUNT )
           .subscribe (
               resp => { success(resp); },
               err  => { reject(err); }
           );
       });
    }

   getCurrentBalance(acct : string) : Observable<AtmResponseOperationBalance> {
       let BALANCE = `/${acct}`;
       return this.http.get<AtmResponseOperationBalance>(this.END_POINT + BALANCE );
   }

   withDraw(acct : string, amount:number) : Promise<AtmResponseOperation> {
       
       let WITHDRAW = `/withdraw/${acct}/amount/${amount}`;
       
       return new Promise ( (success,reject) => {
                this.http.get<AtmResponseOperation>(this.END_POINT + WITHDRAW ).subscribe (
                      resp => { success(resp) },
                      err =>  { reject(err) },
                      () =>   { //on completed
                                    console.log('onUpdatedTransactions.next()');
                                    this.onUpdatedTransactions$.next(); 
                                }
                );
       });   
    }

  deposit(acct : string, amount:number) : Promise<AtmResponseOperation> {

      let DEPOSIT  = `/deposit/${acct}/amount/${amount}`;
      
      return new Promise ( (success,reject)=> {
           this.http.get<AtmResponseOperation>(this.END_POINT + DEPOSIT).subscribe(
               resp => { success(resp) },
               err =>  {  reject(err) },
               () =>   {    console.log('onUpdatedTransactions.next()');
                             this.onUpdatedTransactions$.next();
                       }           
           );
      });
  }

  getLastOperations(acct:string) : Observable<AtmResponseTransactions> {

     let TRANSACTIONS = `/transactions/${acct}`;
     return this.http.get<AtmResponseTransactions>(this.END_POINT + TRANSACTIONS);
  }

  logOff() : void {
        this.accountNumber = '';
        this.accountName   = '';
        this.currentBalance = 0;
        this.accountValid  = undefined;
  }
  
}