import atmWs from './App';

atmWs.listen(3000, (err:any) =>{
    if (err){
        return console.log(err);
    }
    else{
        return console.log('Atm Web Service runnin on port 3000')
    }
});