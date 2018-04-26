"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = __importDefault(require("./App"));
App_1.default.listen(3000, function (err) {
    if (err) {
        return console.log(err);
    }
    else {
        return console.log('Atm Web Service runnin on port 3000');
    }
});
