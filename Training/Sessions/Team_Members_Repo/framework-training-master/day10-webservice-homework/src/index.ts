import app from './App';

const port = 3000;

app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log('Server is listening on port 3000');
})

//http://localhost:3000/atm
//http://localhost:3000/atm/123-456
//http://localhost:3000/atm/withdraw/123-456/amount/100
//http://localhost:3000/atm/deposit/123-456/amount/200
