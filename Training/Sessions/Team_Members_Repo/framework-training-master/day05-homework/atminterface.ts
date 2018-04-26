export interface AtmInterface {
    currentBalance : number,
    setInitialBalance(arg: number) : void,  
    viewBalance() : void, 
    deposit(arg: number) : void,
    withdraw(arg: number) : void,
}