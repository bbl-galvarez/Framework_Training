import { AtmInterface } from "./AtmInterface";

export class AtmClass implements AtmInterface {

    currBal: number;

    constructor () {};

    setInitialBalance(amt: number): void {
        this.currBal = amt;
    }

    getAccBalance(): number {
        return this.currBal;
    }

    deposit(depamt: number): void {
        this.currBal = this.currBal + depamt;
    }

    withdraw(withamt: number): void {
        this.currBal = this.currBal - withamt;
    }

}