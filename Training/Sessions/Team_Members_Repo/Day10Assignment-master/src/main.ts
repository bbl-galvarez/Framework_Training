import { AtmClient } from './AtmClient';

var atm : AtmClient = new AtmClient();

atm.setInitialBalance("123456010220001",500);

atm.withdrawMoney("123456010220001",50);

atm.showBalance("123456010220001");

atm.showBalance("123456010220002");

atm.showBalance("123456010220003");