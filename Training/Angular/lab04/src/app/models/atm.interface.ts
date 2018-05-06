export interface AtmResponseOperation {
      accountNumber : string,
      currentBalance : number
}

export interface AtmTransaction {
    accountNumber : string,
    dateOfTransaction : Date,
    transactionType : string,
    amount : number
}

export interface AtmResponseTransactions {
    accountNumber : string,
    transactions : Array<AtmTransaction>
}

export interface AtmResponse {
    status : number,
     message : string
}