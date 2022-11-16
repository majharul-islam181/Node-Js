const express = require("express");
const dbconnect = require("../Mongodb perpus/mongodb");
const app = express();
app.use(express.json());
const mongodb = require('mongodb');//for delete purpos

app.get("/", async (req, res) => {
  let data = await dbconnect();
  data = await data.find().toArray();
  console.log(data);
  //   res.send({ name: "chamok" });
  res.send(data);
});

app.post('/',async (req,res)=>{
    let data = await dbconnect();
    let result = await data.insertOne(req.body);
    console.log(req.body);
    res.send(result);
});

//req wise sob update hobe
/*
app.put('/',async (req, res)=>{
    let data =await dbconnect();
    let result = await data.updateOne(
        {name:'majharul update'},
        {$set:req.body}
    );
    console.log(result);
    console.log(req.body);
    res.send({result: 'update'});
})

*/

//specific vabe akta hobe
app.put('/',async (req, res)=>{
    let data =await dbconnect();
    let result = await data.updateOne(
        {name:'majharul update'},
        {$set:{contact: `${req.body.contact}`}}
    );
    console.log(result);
    console.log(req.body);
    res.send({result: 'update'});
})


app.delete('/:id',async (req, res)=>{
    console.log(req.params.id);
    const data =await dbconnect()
    const result =await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    console.log(result);
    res.send(result);
});


app.listen(500);
