const express = require('express');
require('./config');
const Product = require('./product');
const app = express();
app.use(express.json());

app.post('/create',async (req,res)=>{

    let data = new Product(req.body);
    let result = await data.save();
    console.log(result);
    res.send('Succesfully done');
    // console.log(req.body);
    // res.send('done');

});

app.get('/list',async(req,res)=>{
    let data =await Product.find({price: '400'});
    res.send(data);
})

//delete with id  // 637915f5b18d42091f9ab1dc
app.delete('/delete/:_id',async (req,res)=>{
    console.log(req.params);
    let data =await Product.deleteOne(req.params);
    res.send(data);
});

//delete with name
// app.delete('/delete',async (req,res)=>{
//     let data =await Product.deleteOne({name: 'Iphone XR'});
//     res.send(data);
// });

app.delete('/delete/:_id',async (req,res)=>{
    console.log(req.params);
    let data =await Product.deleteOne(req.params);
    res.send(data);
});

app.put('/update',async(req,res)=>{

    let data = await Product.updateMany({name: 'Iphone'},
        {
            $set: {price: 20}
        }
        );

    res.send('update successfull')

});

app.listen(5000);



