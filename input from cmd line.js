//  console.log(process.argv); 
 /*it gives us two line: 
    'C:\\Program Files\\nodejs\\node.exe', 
    'F:\\Node Js(practice)\\input from cmd line.js'
*/


 const fs = require('fs');
 const input = process.argv;

 if(input[2]=='add'){
    fs.writeFileSync(input[3], input[4]);
 }else if(input[2]='remove'){
    fs.unlinkSync(input[3]);
 }else{
    console.log('invalid input');
 }

 /*
 terminal pannel: 
 
        node '.\input from cmd line.js' add  inputfromcommand.txt  'input from command linee' =>

        node '.\input from cmd line.js' add  inputfromcommand.txt  'input from command linee' => this added inputfromcommand.txt file 
        node '.\input from cmd line.js' remove  inputfromcommand2.txt  'input from command linee' => this removes inputfromcommand.txt file 

 */

