export interface AtmInterface {
    currentBalance : number,
    setInitialBalance(arg: number) : void,  
    getBalance() : number, 
    deposit(arg: number) : void,
    withdraw(arg: number) : void,
}