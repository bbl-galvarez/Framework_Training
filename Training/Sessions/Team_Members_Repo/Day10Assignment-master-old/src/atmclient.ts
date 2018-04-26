import * as got from 'got';
import { AtmInterface } from './interfaces/AtmInterface';

export class AtmClient implements AtmInterface {

    initialBalance : number;
    currentBalance : number;
    accountNumber : string;

    constructor(){

    }

    setInitialBalance(acct:string, balance : number ) : void {
        got.get("http://localhost:3000/atm").then(
            (data) => {
                console.log("Data from web backend testing " + data.body); 
                let result = JSON.parse(data.body);
                console.log(result);
            },
            (err) => {
                console.log("Error from web backend " + err.message);
            }
        );
    }

    showBalance(acct:string) : void {
        got.get(`http://localhost:3000/atm/${acct}`).then(
            (data) => {
                console.log("Data from web backend " + data.body);
                let result = JSON.parse(data.body);
                console.log(result);
            },
            (err) => {
                console.log("Error from web backend " + err.message);
            }
        );
    }

    withdrawMoney(acct: string, amount : number ) : void {
        got.get(`http://localhost:3000/atm/withdraw/${acct}/amount/${amount}`).then(
            (data) => {
                console.log("Data from web backend " + data.body);
                let result = JSON.parse(data.body);
                console.log(result);
            },
            (err) => {
                console.log("Error from web backend " + err.message);
            }
        );
    }

    depositMoney(acct: string, amount : number) : void {
        got.get(`http://localhost:3000/atm/deposit/${acct}/amount/${amount}`).then(
            (data) => {
                console.log("Data from web backend " + data.body);
                let result = JSON.parse(data.body);
                console.log(result);
            },
            (err) => {
                console.log("Error from web backend " + err.message);
            }
        );
    }
}