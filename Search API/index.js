const express = require('express');

require('./config');
const Product = require('./product');
const app = express();

app.use(express.json());

app.get('/search/:key',async (req,res)=>{
    // console.log(req.params.key);
    let data =await Product.find(
        {
            "$or": [
                {brand: {$regex: req.params.key}},
                {name: {$regex: req.params.key}}
            ]
        }
    )
    res.send(data);

});

app.listen(4000);
