import * as fs from 'fs';

let data = '';

try{
    data = fs.readFileSync('./data/file.txt', 'utf8');
    console.log (data);
}
catch (err){console.log(err);
}