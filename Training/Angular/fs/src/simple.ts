import * as fs from 'fs';

//it will not block the execution main thread, this is asynchronous
fs.readFile ('./data/file.txt', 'utf8', (err,data)=>{
    
    if (err) throw err;
    console.log(data);

})

//asynchronous
//synchonrous
//streaming


