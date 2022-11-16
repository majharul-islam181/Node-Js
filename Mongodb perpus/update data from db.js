const dbconnect = require("./mongodb");

const updateData =async ()=>{
    let data =await dbconnect();
    let result =await data.updateOne(//for one data => updateOne, for all => update
        {name: 'non'}, {$set: {name:'chamok islam', id: 10}}
    );
    console.warn(result);
};
updateData();