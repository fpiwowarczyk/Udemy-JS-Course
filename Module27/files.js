// run: node app.js
const fs = require('fs');

fs.readFile('user-data.txt',(err,data) =>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data.toString());
});

fs.writeFile('user-data.txt','username=Filip',err=>{
    if(err){
        console.log(err);
    } else {
        console.log('Wrote ot file!');
    }
});
console.log('Hello world!');