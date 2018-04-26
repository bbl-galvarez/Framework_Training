"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var atm_1 = require("./atm");
var App = /** @class */ (function () {
    function App() {
        this.webService = express();
        this.atm = new atm_1.Atm();
        this.mountATMRoutes();
    }
    App.prototype.mountATMRoutes = function () {
        var _this = this;
        var atmLive = express.Router();
        var atmWithdraw = express.Router();
        var atmDeposit = express.Router();
        var atmBalance = express.Router();
        var atmTransactions = express.Router();
        atmLive.get('/atm', function (req, resp) {
            resp.json({
                status: 0,
                message: 'ok'
            });
        });
        atmBalance.get('/atm/acct:', function (req, resp) {
            resp.json({
                accountNumber: req.params,
                currentBalance: _this.atm.getCurrentBalance(req.params)
            });
        });
        atmTransactions.get('/atm/transactions/acct:', function (req, resp) {
            resp.json({
                accountNumber: req.params,
                transactions: _this.atm.getLastOperations(req.params).transactions
            });
        });
        atmDeposit.get('/atm/deposit/acct:/amount/amount:', function (req, resp) {
            resp.json({
                accountNumber: req.params.acct,
                currentBalance: _this.atm.deposit(req.params.acct, parseFloat(req.params.amount))
            });
        });
        atmWithdraw.get('/atm/withdraw/acct:/amount/amount:', function (req, resp) {
            resp.json({
                accountNumber: req.params.acct,
                currentBalance: _this.atm.withDraw(req.params.acct, parseFloat(req.params.amount))
            });
        });
    };
    return App;
}());
exports.App = App;
exports.default = new App().webService;
