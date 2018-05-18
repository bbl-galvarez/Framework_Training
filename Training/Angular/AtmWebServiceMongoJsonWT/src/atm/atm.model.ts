export class accountModel {
    accountNumber : string = '';
    currentBalance : number = 0;
    accountPin     : string = '';
    accountName    : string = '';
}

export class accountList {
    accounts : Array<accountModel> = [];
}

export class TransactionModel {
    accountNumber  : string = '';
    dateOfTransaction : Date = new Date();
    transactionType   : string = '';
    amount            : number = 0;
}

export class TransactionList {
      transactions : Array<TransactionModel> = [];
}