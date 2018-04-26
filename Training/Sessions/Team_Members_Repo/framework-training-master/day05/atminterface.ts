interface Atm {  
    currentBalance : number , 
    operation : string,  
    accountNumber : string,
    cardNumber : string,
    amount : number,
    withdraw() : void,
    deposit() : void,
    balanceinquiry() : void,
};

class Atm01 implements Atm {
    currentBalance: number;
    operation: string;
    accountNumber: string;
    cardNumber: string;
    amount: number;
    withdraw(): void {
        throw new Error("Method not implemented.");
    }
    deposit(): void {
        throw new Error("Method not implemented.");
    }
    balanceinquiry(): void {
        throw new Error("Method not implemented.");
    }
}
