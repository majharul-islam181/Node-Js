const express = require('express');
const path = require('path');
const app = express();

const pathTEejs = path.join(__dirname,'Template Engine ejs');
const pathTEejsA = path.join(__dirname,'public');

app.set('view engine','ejs');

app.get('/profile',(req,res)=>{
    const user ={
        name : 'majharul islam',
        email: 'majharul.islam03@northsouth.edu',
        city: 'dhaka'
    };
    res.render('profile',{user});
});

    app.get('/login',(req,res)=>{
        res.render('login');
    });


    app.get('*',(req,res)=>{
        res.sendFile(`${pathTEejsA}/errorpage.html`);
    });


app.listen(2000);

