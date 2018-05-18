import * as fs from 'fs';

var data = fs.createReadStream('./data/file.txt', { encoding: 'utf8', highWaterMark: 128 * 1024 });

data.on('data',
                (chunk) => {data += chunk;})
               .on ('end', () => {console.log(data);}) 
               .on ('error', (err) => {console.log(data);})
/*
try{
    data = fs.readFileSync('./data/file.txt', 'utf8');
    console.log (data);
}
catch (err){console.log(err);
}*/