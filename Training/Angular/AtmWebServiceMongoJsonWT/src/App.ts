import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as morgan from 'morgan';
import * as winston from 'winston';

import { errorMessages } from './environment/errorMessages';
import { routeConstants  } from './lib/routeConstants';
import { environment }     from './environment/environment';


import { RouteGuard } from './lib/routeGuard';
import { Atm } from './atm/atm';
import { Logger } from 'mongodb';
 
export class App {

     public webService : any;
     private atm       : Atm;
     private guard     : RouteGuard;
     private logger    : any;

    
     //this will be used to verify it against the account sent in the URL
     private accountInToken : string = '';
 
     constructor() {

        
        this.webService = express();
        this.webService.use(cors());

        this.webService.use(bodyParser.urlencoded({ extended: false }));
        this.webService.use(bodyParser.json());

        if (environment.development) { 
            this.webService.use(morgan('dev'));
        }

        //Define our logger object created from winston class
        const tsFormat = () => (new Date()).toLocaleTimeString();
 
        this.logger = new (winston.Logger)({
        transports: [
            // colorize the output to the console
            new (winston.transports.Console)({
            timestamp: tsFormat,
            colorize: true,
            level: 'info'
            }),

            new (winston.transports.File)({
            filename: `${environment.logDirectory}/atmdev.log`,
            timestamp: tsFormat,
            level: environment.development === true ? 'debug' : 'info'
            })
        ]
        });

                            
        this.atm = new Atm();
        this.guard = new RouteGuard();
        this.mountAtmRoutes();

     }

private mountAtmRoutes(){

    const atmRouter = express.Router();
    const atmPublic  = express.Router();

    /*
     * This is the middleware, in charge to intercept all the PUBLIC Routes
     * below it and validate the API KEY
    */

    atmPublic.use((req,resp,next) => {
        
        //We are retrieving the values from the headers for each request
        var apiKey = <string>req.headers['bbank-apikey'];

        this.logger.info("Intercepting ALL Requests to check API KEY");

        if (apiKey != environment.apiKey) {
                this.logger.info("Invalid API Key",apiKey);
               //instead of going to the requested route, we will stop here and send an error message
               resp.json(errorMessages.INVALID_API_KEY);
        } else {
            this.logger.info("Api Key is VALID, going to requested URL now");

            next();  //it is ok to continue to check the requested public route
        }

    });

    atmPublic.get(routeConstants.ALIVE, (req,resp) => {
            resp.json (errorMessages.OK_MESSAGE);
    });


    atmPublic.get(routeConstants.AUTHENTICATE, (req,resp) => {

        this.atm.findAccountPin(req.params.acct,req.params.pin).then (
            result => {

                    /*
                    * User specified a valid account number and pin
                    * now let´s encrypt the account number inside a token
                    * and return it to the client application in the 
                    * token property of the response object
                    */
                    let jsontoken = this.guard.createToken({'acct': req.params.acct});
                    let response =  { 
                                        status  :     0,
                                        message :  "ok", 
                                        token   : jsontoken 
                                    };

                    resp.json(response);
            },
            err => {
                    resp.json(errorMessages.ACCOUNT_NOT_FOUND);
            }
        );
});


    /*
     * This is the middleware, in charge to intercept all the routes
     * below it and validate the token and also the API KEY
    */

    atmRouter.use((req,resp,next) => {
       
        //We are retrieving the values from the headers for each request
        var token  = <string>req.headers['bbank-secure'];

        /* Here we assume that the rest of the API calls reference the Account Number
        *  in practice this shouldn´t be the case, since the account number is already
        *  in the token.
        */
        var acct  = req.params.acct;

        if (token) {

                if (this.guard.verifyToken(token)) {
                    
                        let decodedValue =  this.guard.getDecoded(token);

                        /* Assign the decoded acct (accountNumber) to a local property
                        *  note that the local editor knows about its properties 
                        * because we are type casting the getDecoded method using an
                        * interface declared in the same guard.ts file
                        */

                        this.accountInToken = decodedValue.acct;

                        if (decodedValue.acct ! = acct) {

                                this.logger.debug("Decoded account in token ",decodedValue.acct,
                                                " is not equal to the one sent by the parameter ", 
                                                req.params.acct);
        
                                return resp.status(403).send(errorMessages.ACCOUNTS_DONT_MATCH);
                        }   
                        else {
                            /*
                                * We are ok. Account passed thru the URL and the one inside
                                * the token match , so let's give green light to the router
                                * endpoint requested by the client application
                             */
                            next();
                        }        
                }
                else {

                    //The token is not valid
                    return resp.status(403).send(errorMessages.TOKEN_NOT_VALID);

                }
        } else {
                // if there is no token return an error
                return resp.status(403).send(errorMessages.NO_TOKEN_PROVIDED);
        } 
            
   });


	atmRouter.get(routeConstants.BALANCE, (req,resp) => {

        //Here we will return an error object if the account don't match
        if (this.accountInToken != req.params.acct ) {
             resp.json(errorMessages.ACCOUNTS_DONT_MATCH);
        }
        else { //we are ok, token account match parameter account
         
            this.logger.debug("Attempting to get Current Balance for Acct # ", 
                        req.params.acct);

            this.atm.getCurrentBalance(req.params.acct).then (  
                result => {

                    //log it 
                    this.logger.debug("Queried Balance for Acct # ", 
                    req.params.acct, "Balance", result.currentBalance);

                    resp.json({
                        status         : 0,
                        accountNumber  : req.params.acct,
                        accountName    : result.accountName,
                        currentBalance : result.currentBalance });      
                    },  
                err => {
                    resp.json(errorMessages.ACCOUNT_NOT_FOUND);
                });
        }
     });
	     

     atmRouter.get(routeConstants.DEPOSIT, (req,resp)=>{

         //Here we will return an error object if the account don't match
         if (this.accountInToken != req.params.acct ) {
            //as the resp.json is a return statement we won't place an else here
            resp.json(errorMessages.ACCOUNTS_DONT_MATCH);
        }
        else { //we are ok, token account match parameter account
                this.atm.deposit(req.params.acct,parseFloat(req.params.amount)).then(
                    result => {
                            //log it 
                            this.logger.debug("Peformed a deposit of  ", req.params.amount,
                                        "to account # ",req.params.acct);
        
                                resp.json ({
                                    status         : 0,
                                    accountNumber  : result.accountNumber,
                                    currentBalance : result.currentBalance
                                });
                },
                err => {   resp.json(errorMessages.ACCOUNT_NOT_FOUND);}
                );
        }
    });


	atmRouter.get(routeConstants.WITHDRAW,(req,resp)=>{

         //Here we will return an error object if the account don't match
         if (this.accountInToken != req.params.acct ) {
            //as the resp.json is a return statement we won't place an else here

            this.logger.info(errorMessages.ACCOUNT_NOT_FOUND);
            resp.json(errorMessages.ACCOUNTS_DONT_MATCH);
        }
        else {  //we are ok, token account match parameter account
 
                this.atm.withDraw(req.params.acct,parseFloat(req.params.amount)).then(
                    result => {

                            //log it 
                            this.logger.debug("Peformed a withtrawl of  ", req.params.amount,
                            " from account # ",req.params.acct);

                                resp.json({
                                    status        : 0,
                                    accountNumber :  result.accountNumber,
                                    currentBalance : result.currentBalance
                                });
                    },
                    err => {   resp.json(errorMessages.ACCOUNT_NOT_FOUND);}
                );
        }
    });

    atmRouter.get(routeConstants.TRANSACTIONS, (req,resp) => {

         //Here we will return an error object if the account don't match
         if (this.accountInToken != req.params.acct ) {
            //as the resp.json is a return statement we won't place an else here
            resp.json(errorMessages.ACCOUNTS_DONT_MATCH);
        }
        else {  //we are ok, token account match parameter account
 
                this.atm.accountExists(req.params.acct).then(
                    found => {
                                this.atm.getLastOperations(req.params.acct).then(
                                    result => { 
                                                //log it 
                                                this.logger.debug("Transaction listing  requested for account # ",req.params.acct);

                                                resp.json({
                                                    status         : 0,
                                                    accountNumber  : req.params.acct,
                                                    transactions   : result
                                                });
                                    },
                                        err => { 
                                            this.logger.info("Error",err);
                                            }
                                    );
                                },
                    notFound => { resp.json(errorMessages.ACCOUNT_NOT_FOUND); }

            );
        }
    });
        //We have to make sure express knows about our routes
        this.webService.use(atmPublic); 
        this.webService.use(atmRouter); 
	    
     }
}

export default new App().webService;