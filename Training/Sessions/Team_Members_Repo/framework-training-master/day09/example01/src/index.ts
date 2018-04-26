import { Greeter } from "./lib/Greeter";
import moment from 'moment';
import lodash from 'lodash';

console.log(Greeter("Hitesh"));
console.log(moment().format());

let teamA = ["Fel", "Gus", "Ron"];
let teamB = ["Has", "Jose", "Dav"];

let teamX = lodash.union(teamA, teamB);
console.log(teamX);

console.log(lodash.reverse(teamX));
