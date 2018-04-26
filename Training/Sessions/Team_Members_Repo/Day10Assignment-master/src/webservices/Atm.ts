import * as express from 'express';
import { accounts } from '../database/Accounts';

class Atm {

  public express;

  constructor () {
    this.express = express();
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
        message : 'OK'
      });
    });

    atmAccount.get('/atm/:account', (req,resp) => {

      resp.json({
        account : req.params.account,
        balance : accounts.filter(acc => {
          return acc.account === req.params.account
        })[0].bal,
        name : accounts.filter(acc => {
          return acc.account === req.params.account
        })[0].name
      })
    });

    atmWithdraw.get('/atm/withdraw/:account/amount/:amount', (req,resp) => {

      resp.json({
        account : req.params.account,
        previousbalance : accounts.filter(acc => {
          return acc.account === req.params.account
        })[0].bal,
        balance : accounts.filter(acc => {
          return acc.account === req.params.account
        })[0].bal - Number(req.params.amount),
        name : accounts.filter(acc => {
          return acc.account === req.params.account
        })[0].name,
        status : 0, 
        message : 'OK'
      })
    });

    atmDeposit.get('/atm/deposit/:account/amount/:amount', (req,resp) => {

      resp.json({
        account : req.params.account,
        previousbalance : accounts.filter(acc => {
          return acc.account === req.params.account
        })[0].bal,
        balance : accounts.filter(acc => {
          return acc.account === req.params.account
        })[0].bal + Number(req.params.amount),
        name : accounts.filter(acc => {
          return acc.account === req.params.account
        })[0].name,
        status : 0, 
        message : 'OK'
      })
    });

    this.express.use('/',atm); 
    this.express.use('/',atmAccount);
    this.express.use('/',atmWithdraw);
    this.express.use('/',atmDeposit);
  }
}

export default new Atm().express 