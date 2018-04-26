import { Atm } from './atm';

var atmInstance : Atm = new Atm();
var balance = 0;
var accountToQuery = '12345-1';
var result : any;

balance = atmInstance.getCurrentBalance(accountToQuery);
console.log('Balance of ' + accountToQuery + ' = ' + balance);

balance = atmInstance.withDraw(accountToQuery, 300);
console.log('Balance of ' + accountToQuery + ' = ' + balance + ' After ATM Withdraw');

balance = atmInstance.deposit(accountToQuery, 200);
console.log('Balance of ' + accountToQuery + ' = ' + balance + ' After ATM Deposit');

result = atmInstance.getLastOperations(accountToQuery).transactions;
console.log('Showing Operations!!!');
console.log(result);
