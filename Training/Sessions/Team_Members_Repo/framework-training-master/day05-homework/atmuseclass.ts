import { AtmClass } from "./atmclass";

//let atm001 = new AtmClass;
var atm001 : AtmClass = new AtmClass();

atm001.setInitialBalance(750);
atm001.viewBalance();

atm001.deposit(20);
atm001.viewBalance();

atm001.withdraw(35);
atm001.viewBalance();
