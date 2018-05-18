import { TransactionList,accountModel } from './atm.model';

export interface AtmInterface {

   getCurrentBalance ( acct : string ) : Promise<accountModel>;
   withDraw ( acct : string , amount : number) : Promise<accountModel>;
   deposit  ( acct : string , amount  : number ) : Promise<accountModel>;
   getLastOperations ( acct : string ) : Promise<TransactionList>;

}