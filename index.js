const app = require("./app");
const fs = require("fs"); //non global module

// const chamokisfilesytem = require('fs'); // variable(chamokisfilesystem) can be anything

// console.log(app)
// console.log(app.z());
// console.log("welcome to my node js");

// const arr = [1,2,5,4,3,1,5,7,1];
// console.log('this is output');

// let result = arr.filter((item)=>{
//     return item>3;
//     // console.log(item);
// });

// console.log(result);
// console.log('code step by step');
// fs.writeFileSync('hello.txt','chamok'); //it'll create hello.txt file
// chamokisfilesytem.writeFileSync('temp.txt',"this is temp file");

// console.log("dicetoray name: ",__dirname);
// console.log('file name: ',__filename);

// const fs = require('fs').writeFileSync('another.txt','another file'); // if we dont want to add all fs modules function.

//##################creating server

/*
const http = require('http');
// http.createServer().listen(4500); //create is a function who are basically function with parameter.


http.createServer((req,res)=>{
    res.write('<h1>hello this is chamok<h1>');
    res.write('<h1>this is subtext<h1>');
    
    res.end();
}).listen(4500);
 
//functions with parameter
function dataControl(req,res){
    res.write('This is 4000 server');
    res.end();
};
http.createServer(dataControl).listen(4000); 

*/

// Package.json

// colors package
// const colorpackage = require('colors');
// console.log('this is a black'.black);
// console.log('this is a blue'.blue);
// console.log('this is a red'.red);
// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap);

//chalk npm
// import chalk from 'chalk';

// console.log(chalk.blue('Hello world!'));

//nodemon package
console.log("nodemon");
console.log("nodemon install");
//make a simple api

const http = require("http");
const data = require("./data");

http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "application"});
    res.write(JSON.stringify(data));
    res.end();
  }).listen(600);
