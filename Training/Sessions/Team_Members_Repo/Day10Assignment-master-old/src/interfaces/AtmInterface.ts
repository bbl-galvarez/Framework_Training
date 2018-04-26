export interface AtmInterface {

    initialBalance : number,
    currentBalance : number,
    accountNumber  : string,

    setInitialBalance(acct:string, balance : number ) : void,

    withdrawMoney(acct: string, amount : number ) : void,
    depositMoney(acct: string, amount : number) : void,

    showBalance(acct:string) :void,

}