export interface AtmInterface{
    debitcardnum:string,
    accountbalance:number,
    txndate:string,
    atmdate:number,
    txntype:number,
    accCurrency:string,
    
    intialBalance:number,
    currentBalance:number,
    accountNumber:string,

    setInitialBalance(accountNumber:string, amount:number):void,
    withdrawMoney(accountNumber:string, amount:number):void,
    depositMoney(accountNumber:string, amount:number):void,
    showBalance(accountNumber:string):void,
}

//class test() implements Atm {
//
//}