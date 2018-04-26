import * as got from 'got';

console.log('Starting Web Service Calls...');

got.get('http://localhost:3000/atm').then (

    (data) => {

        console.log('Data from web: ' + data.body);

        got.get('http://localhost:3000/atm/111-222').then (

            (data) => {

                console.log('Data from web: ' + data.body);
                
                let result = JSON.parse(data.body);
                
                console.log('Account ID: ' + result.account);
                console.log('Account Balance:' + result.balance);

                got.get('http://localhost:3000/atm/withdraw/111-222/amount/300').then (

                    (data) => {

                        let result = JSON.parse(data.body);
                        console.log('Account ID: ' + result.account);
                        console.log('Account Balance:' + result.balance);

                        got.get('http://localhost:3000/atm/deposit/111-222/amount/200').then (

                            (data) => {
                                let result = JSON.parse(data.body);
                                 console.log('Account ID: ' + result.account);
                                 console.log('Account Balance:' + result.balance);console.log('Finished...');
                            },
            
                            (err) => {
                                console.log('Error from web service call: ' + err.message);
                            }
        
                        )

                    },
        
                    (err) => {
                        console.log('Error from web service call: ' + err.message);
                    }
        
                )

            },

            (err) => {
                console.log('Error from web service call: ' + err.message);
            }

        )

    },

    (err) => {
        console.log('Error from web service call: ' + err.message);
    }
    
)

