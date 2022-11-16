const dbconnect = require("./mongodb");

const deleteData=async ()=>{
    let data = await dbconnect();
    let result = await data.deleteOne({name: 'demo'});
    console.log(result);
};

deleteData();
