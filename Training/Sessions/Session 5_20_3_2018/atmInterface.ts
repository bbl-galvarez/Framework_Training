interface Atm{
    debitcardnum:string;
    accountnumber:number;
    accountbalance:number;
    txndate:string;
    atmdate:number;
    txntype:number;
    accCurrency:string;
    withdraw():void;
    balanceInquiry():void;
    withdraw():void;
}

class test() implements Atm {

}