import { AtmInterface } from "./atminterface";

export class AtmClass implements AtmInterface {

    currentBalance: number;

    constructor () {};

    setInitialBalance(arg: number): void {
        this.currentBalance = arg;
    }

    viewBalance(): void {
        console.log("Balance is " + this.currentBalance);
    }

    deposit(arg: number): void {
        this.currentBalance = this.currentBalance + arg;
    }

    withdraw(arg: number): void {
        this.currentBalance = this.currentBalance - arg;
    }

}