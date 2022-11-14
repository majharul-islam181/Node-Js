//########  Show File List From File System


const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');

//Write File 

// for(i=0;i<5;i++){
//     fs.writeFileSync(dirPath+'/hello'+i+'.txt','a sample text file');
// }


// Read File
//directory read => then file read

fs.readdir(dirPath,(err,files)=>{
    // console.log(files); //it gives us in a Array format
    files.forEach((items)=>{
        console.log(items);
    });
});