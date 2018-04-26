"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Promise1 {
    constructor() {
    }
    Iphone() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('My mom bought an Iphone 7.');
            }, 2000);
        });
    }
    Showoff() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('I will show it off.');
            }, 2000);
        });
    }
}
exports.Promise1 = Promise1;
;
//export class Promise2{
//  const Promise = new Promise((resolve,reject) => {
//    setTimeout(( )=>{
//      resolve('My mom bought an Iphone 7.');
//}, 2000)
//})
//}
