import {AtmInterface} from './AtmInterface';

export class Atm implements AtmInterface{

    intialBalance:number;
    currentBalance:number;
    accountNumber:string;

    constructor(){

    }

    setInitialBalance(acct:string, balance:number):void{
        this.accountNumber = acct;
        this.accountNumber = acct;
        this.accountNumber = acct;
    }

}
