//Gustavo Alvarez 
//To call the webservices
//http://localhost:3000/atm
//http://localhost:3000/atm/111-222
//http://localhost:3000/atm/withdraw/111-222/amount/200
//http://localhost:3000/atm/deposit/111-222/amount/200
//11-04-2018

import Atm from './Atm';

const port = 3000;

Atm.listen(port, (err) => {

    if (err) {
        return console.log(err);
    }
        return console.log("Server is listening on port 3000");
})

