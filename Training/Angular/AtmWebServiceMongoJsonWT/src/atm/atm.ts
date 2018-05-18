/*
* This is our main ATM class whose methods are exposed thru the 
* App.ts using express() to the outside world.
* 
* by Mario Estrada Rosa - marioestrada@eycgrupo.com
*/
import * as _ from 'lodash';

import { AtmInterface } from './atm.interface';
import { accountList,accountModel,TransactionList,TransactionModel} from './atm.model';
import { DbConnection  } from './database/dbconnection';
 
export class Atm implements AtmInterface {

    // naming the private variables with the _ prefix is not mandatory
    // this just reflects a our Java programming roots :-)

     private _db               : DbConnection = new DbConnection();
     private _accountDocs      : string = "accounts";
     private _transactionDocs  : string = "transactions";

      private transactionList  : TransactionList;
 
     constructor(){
           /*
           *  Initialize the local DB
           */
          this._db.connectDb().then ( 
                 resp => {
                             console.log("sucessfully connected!");
                         },
                // Here we are handling the reject of the promise
                 err=>   { console.log('error when connecting to DB.');
                         }
           );

           this.transactionList = new TransactionList();

     }
  async  findAccountPin (acct : string,pin:string ) : Promise<accountModel>  {
        let query = { "accountNumber" : acct , "accountPin" : pin };

        console.log("Querying Mongo Remote ", query);
        
        return await  this._db.findOne(this._accountDocs,query);
 }

   async  accountExists(acct : string ) : Promise<accountModel>  {

         return await   this._db.findOne(this._accountDocs,{"accountNumber" : acct });
  }

  /*
   *  If we analyze the following code, it is equivalen to the one line above for method accountExists
   *  This is to highlight the feature async/await, this simplifies the asynchronous programming 
   *  Another way to achieve it is using try{}/catch{} statemnts
   *  Mario Estrada Rosa . May 2018
  */
   public accountExistLongVersion(acct : string ) : Promise<accountModel>  {

        var query = {'accountNumber' : acct};

        return new Promise ( (resolve,reject) => {
               this._db.findOne(this._accountDocs,query).then ( 
                   resp => {
                            if (resp != null ) {
                                resolve(resp);
                            }
                            else {
                                reject ("Account not found ");
                            }
                  }, 
                  err => { reject ("Account not found "); }
            );
        });
     }

     public getCurrentBalance ( acct : string ) : Promise<accountModel> {

        var query = {'accountNumber' : acct};

        return new Promise ( (resolve,reject) => {
               this.accountExists(acct).then (
                 resp => {
                            if (resp != null ) {
                                resolve(resp);
                            }
                            else {
                                reject ("Account not found ");
                            }
                 },                 
                 err => { reject ("Account not found "); }
            );
        });
     }

    async  withDraw ( acct : string , amount : number ) : Promise<accountModel> {

       let resp = await this.accountExists(acct);

       if (resp != null){

               let query = { 'accountNumber' : acct };

                resp.currentBalance -= amount;

                let updatedValue = await this._db.updateOne(this._accountDocs,
                query,resp);

                //record the transaction in the transaction list
                let newTransaction = new TransactionModel();
                newTransaction.accountNumber = acct;
                newTransaction.amount  = amount;
                newTransaction.transactionType = "WithDraw";

                 //save the new transaction
                 this._db.insertOne(this._transactionDocs,newTransaction).then( resp => {
                    console.log("Succesfully added a Transaction");
                }, err=>{
                    console.log("There was an error trying to insert a Transaction");
                } );

        }

        return resp;   
    }


     async deposit ( acct : string , amount : number) : Promise<accountModel>{

        let resp = await   this.accountExists(acct);

        if (resp != null) {

                let query = { 'accountNumber' : acct };

                resp.currentBalance += amount;

                let updatedValue = await this._db.updateOne(this._accountDocs,
                query,resp);


                //record the transaction in the transaction list
                let newTransaction = new TransactionModel();
                newTransaction.accountNumber = acct;
                newTransaction.amount  = amount;
                newTransaction.transactionType = "Deposit";

                //save the new transaction
                this._db.insertOne(this._transactionDocs,newTransaction).then( resp => {
                    console.log("Succesfully added a Transaction");
                }, err=>{
                    console.log("There was an error trying to insert a Transaction");
                } );
         }

        return resp;   

     }


    async getLastOperations ( acct : string ) : Promise<TransactionList> {

        let query = { 'accountNumber' : acct };
        return await this._db.find(this._transactionDocs,query);
          
     }

}
