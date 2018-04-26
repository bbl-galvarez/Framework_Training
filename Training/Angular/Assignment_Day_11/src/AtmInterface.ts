export interface AtmInterface {
    currBal : number,
    setInitialBalance(amt: number) : void,  
    getAccBalance() : number, 
    deposit(depamt: number) : void,
    withdraw(withamt: number) : void,
}