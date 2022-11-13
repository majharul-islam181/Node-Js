const app = require('./app')
const fs = require('fs'); //non global module 
// const chamokisfilesytem = require('fs'); // variable(chamokisfilesystem) can be anything 

// console.log(app)
// console.log(app.z());
// console.log("welcome to my node js");

const arr = [1,2,5,4,3,1,5,7,1];  
console.log('this is output');

// let result = arr.filter((item)=>{
//     return item>3;
//     // console.log(item);
// });

// console.log(result);
console.log('code step by step');
fs.writeFileSync('hello.txt','chamok'); //it'll create hello.txt file
// chamokisfilesytem.writeFileSync('temp.txt',"this is temp file");

console.log("dic name: ",__dirname);
console.log('file name: ',__filename);

// const fs = require('fs').writeFileSync('another.txt','another file'); // if we dont want to add all fs modules function.


 
//creating server

const http = require('http');
// http.createServer().listen(4500); //create is a function who are basically function with parameter.


http.createServer((req,res)=>{
    res.write('<h1>hello this is chamok<h1>');
    res.end();
}).listen(4500);
 
//functions with parameter
function dataControl(req,res){
    res.write('This is 4000 server');
    res.end();
};
http.createServer(dataControl).listen(4000);




