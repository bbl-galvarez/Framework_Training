import * as express from 'express';

import { Atm } from './atm';

export class App{
    public webService : any;
    private atm : Atm;

    constructor(){
        this.webService = express();
        this.atm = new Atm();
        this.mountATMRoutes();
    }

    private mountATMRoutes(){
        const atmLive = express.Router();
        const atmWithdraw = express.Router();
        const atmDeposit = express.Router();
        const atmBalance = express.Router();
        const atmTransactions = express.Router();

        atmLive.get('/atm', (req, resp) => {
            resp.json({
                status : 0,
                message: 'ok'
            })
        });

        atmBalance.get('/atm/:acct/', (req, resp) => {
            resp.setHeader('Access-Control-Allow-Origin', '*');
            resp.json({
                accountNumber : req.params.acct,
                currentBalance: this.atm.getCurrentBalance(req.params.acct)
            })
        });

        atmTransactions.get('/atm/transactions/:acct', (req, resp) => {
            resp.setHeader('Access-Control-Allow-Origin', '*');
            resp.json({
                accountNumber : req.params,
                transactions: this.atm.getLastOperations(req.params.acct).transactions
            })
        });

        atmDeposit.get('/atm/deposit/:acct/amount/:amount', (req, resp) => {
            resp.setHeader('Access-Control-Allow-Origin', '*');
            resp.json({
                accountNumber : req.params.acct,
                currentBalance: this.atm.deposit(req.params.acct, parseFloat(req.params.amount))
            })
        });
        
        atmWithdraw.get('/atm/withdraw/:acct/amount/:amount', (req, resp) => {
            resp.setHeader('Access-Control-Allow-Origin', '*');
            resp.json({
                accountNumber : req.params.acct,
                currentBalance: this.atm.withDraw(req.params.acct, parseFloat(req.params.amount))
            })
        });

        this.webService.use(atmLive);
        this.webService.use(atmBalance);
        this.webService.use(atmTransactions);
        this.webService.use(atmDeposit);
        this.webService.use(atmWithdraw);

    }
}

export default new App().webService;