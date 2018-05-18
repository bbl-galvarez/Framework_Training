export const routeConstants = {

    ALIVE        : '/atm',
    AUTHENTICATE : '/atm/find/:acct/pin/:pin',
    BALANCE      : '/atm/:acct',
    DEPOSIT      : '/atm/deposit/:acct/amount/:amount',
    WITHDRAW     : '/atm/withdraw/:acct/amount/:amount',
    TRANSACTIONS : '/atm/transactions/:acct'

}