import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';
 
import { AtmResponse ,AtmResponseOperation,AtmResponseTransactions } from '../models/atm.interface';

@Injectable()
export class AtmServiceService {

    private END_POINT = "http://localhost:3000/atm";
    public onUpdatedTransactions$ = new Subject<void>();
    
    public onAccountChange$ = new Subject<void>();
    
    public accountNumber: string;
    public accountValid: boolean = false;

  constructor( public http: HttpClient) { }
  
    setAccountNumber(arg: string){
        this.accountExist(arg).then (resp => {
            if (resp.status == 0){
                this.accountNumber = arg;
                this.accountValid = true;
                this.onAccountChanges$.next();
            }else{
                this.accountValid = false;
            }
        })
    }


  isAlive () : Observable<AtmResponse > {
     return  this.http.get<AtmResponse>(this.END_POINT);
  }

   getCurrentBalance(acct : string) : Observable<AtmResponseOperation> {
       let BALANCE = `/${acct}`;
       return this.http.get<AtmResponseOperation>(this.END_POINT + BALANCE );
   }

   withDraw(acct : string, amount:number) : Observable<AtmResponseOperation> {
       
       let WITHDRAW = `/withdraw/${acct}/amount/${amount}`;
       let retVal =  this.http.get<AtmResponseOperation>(this.END_POINT + WITHDRAW );
       this.onUpdatedTransactions$.next();
       return retVal;

}

  deposit(acct : string, amount:number) : Observable<AtmResponseOperation> {
      let DEPOSIT  = `/deposit/${acct}/amount/${amount}`;
      let retVal =  this.http.get<AtmResponseOperation>(this.END_POINT + DEPOSIT);
      this.onUpdatedTransactions$.next();
      return retVal;
  }


  getLastOperations(acct:string) : Observable<AtmResponseTransactions> {

     let TRANSACTIONS = `/transactions/${acct}`;
     return this.http.get<AtmResponseTransactions>(this.END_POINT + TRANSACTIONS);
  }
}