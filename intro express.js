const express = require('express');
const app = express();

app.get('',(req,res)=>{
    console.log('Data sent by ',req.query.name);
    res.send('Hello, this is home page create by :'+req.query.name);
});


app.get('/about',(req,res)=>{ 
    res.send('Hello, this is about page');
});


app.get('/profile',(req,res)=>{
    res.send('Hello, this is profile sections');
});

app.get('/name',(req,res)=>{
    res.send('Hello, this is name section');
});
app.listen(5400); 