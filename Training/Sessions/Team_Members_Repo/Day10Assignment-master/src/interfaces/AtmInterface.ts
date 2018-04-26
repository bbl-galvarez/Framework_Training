//Gustavo Alvarez - Interface to export
//25-04-2018

import {TransactionList} from './atmmodel'

export interface AtmInterface{
    getCurrentBalance (acct:string) : number;
    withDraw (acct:string, amount: number) : number;
    deposit (acct:string, amount: number) : number;
    getLastOperations (acct:string) : TransactionList;
    accountExists(acct:string) : boolean;
}



/*export interface AtmInterface {

    initialBalance : number,
    currentBalance : number,
    accountNumber  : string,

    setInitialBalance(acct:string, balance : number ) : void,

    withdrawMoney(acct: string, amount : number ) : void,
    depositMoney(acct: string, amount : number) : void,

    showBalance(acct:string) :void,

}*/