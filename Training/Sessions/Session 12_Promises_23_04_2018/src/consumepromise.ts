import { Promise1 } from './promiseclasses'

var promiseExec = new Promise1();

Promise.race([promiseExec.Iphone(), promiseExec.Showoff()])
    .then(values => {
        console.log(values);
    });

Promise.all([promiseExec.Iphone(), promiseExec.Showoff()])
    .then(values => {
        console.log(values);
    });

promiseExec.Iphone().then(
    (result) => {
        console.log(result);
            promiseExec.Showoff().then(result =>{
                console.log(result);
            })
    }
);