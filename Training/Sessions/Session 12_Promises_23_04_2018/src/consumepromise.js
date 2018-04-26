"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promiseclasses_1 = require("./promiseclasses");
var promiseExec = new promiseclasses_1.Promise1();
Promise.race([promiseExec.Iphone(), promiseExec.Showoff()])
    .then(values => {
    console.log(values);
});
Promise.all([promiseExec.Iphone(), promiseExec.Showoff()])
    .then(values => {
    console.log(values);
});
promiseExec.Iphone().then((result) => {
    console.log(result);
    promiseExec.Showoff().then(result => {
        console.log(result);
    });
});
