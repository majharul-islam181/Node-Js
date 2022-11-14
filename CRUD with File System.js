const fs = require('fs');
fs.writeFileSync('demo.txt', 'this is demo');
fs.unlinkSync('demo.txt');

const path = require('path');
const dicPath = path.join(__dirname,'CRUD');
const filePath = `${dicPath}/demo.txt`;

// Write file
fs.writeFileSync(filePath,'this is a demo file');

// Read file
fs.readFile(filePath,'utf-8',((err,item)=>{ //without utf8 gives us buffer
    console.log(item);
}));

// Update file
fs.appendFile(filePath,' and file name is demo.txt',(err)=>{
    if(!err)
    console.log('file text is updated');
});

// Rename file
fs.rename(filePath,`${dicPath}/update-name.txt`,(err)=>{
    if(!err)
    console.log('file name is updated');
});

// Delete file
// fs.unlinkSync(`${dicPath}/update-name.txt`);