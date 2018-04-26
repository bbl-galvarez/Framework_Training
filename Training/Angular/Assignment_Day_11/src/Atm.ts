//Gustavo Alvarez 10-04-2018
//ATM Class

import * as express from 'express';
import { AtmClass } from "./AtmClass";
import { accounts } from "./Accounts";

  class Atm {

  public express;
  public implementAtm;
  public dbAccounts;

  constructor () {
    this.express = express();
    this.implementAtm = new AtmClass;
    this.dbAccounts = accounts;
    //this.implementAtm.setInitialBalance(2000);
    this.mountRoutes();
  }

  mountRoutes() : void {

    const atm = express.Router();
    const atmAccount = express.Router();
    const atmWithdraw = express.Router();
    const atmDeposit = express.Router();

    atm.get('/atm', (req,resp) => {
      resp.json ({ 
        status : 0, 
        message : 'OK it is working'
      });
    });

    atmAccount.get('/atm/:account', (req,resp) => {

      resp.json({
        account : req.params.account,
        balance : this.implementAtm.getBalance(),
        status : 0, 
        message : 'OK GET BALANCE working'
      })
    });

    atmWithdraw.get('/atm/withdraw/:account/amount/:amount', (req,resp) => {

      this.implementAtm.withdraw(req.params.amount);

      resp.json({
        account : req.params.account,
        balance : this.implementAtm.getBalance(),
        status : 0, 
        message : 'OK WITHDRAW working'
      })
    });

    atmDeposit.get('/atm/deposit/:account/amount/:amount', (req,resp) => {

      this.implementAtm.deposit(req.params.amount);

      resp.json({
        account : req.params.account,
        balance : this.implementAtm.getBalance(),
        status : 0, 
        message : 'OK DEPOSIT working'
      })
    });

    this.express.use('/',atm); 
    this.express.use('/',atmAccount);
    this.express.use('/',atmWithdraw);
    this.express.use('/',atmDeposit);
  }
}

export default new Atm().express 