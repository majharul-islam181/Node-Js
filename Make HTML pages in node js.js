const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname,'public');
console.log(publicPath);

// app.use(express.static(publicPath));

// Remove Extension using node
app.get('',(req, res)=>{
    res.sendfile(`${publicPath}/index.html`);
});

app.get('/about',(req, res)=>{
    res.sendfile(`${publicPath}/about.html`);
});
// * <- invalid web address 
app.get('*',(req, res)=>{
    res.sendfile(`${publicPath}/errorpage.html`);
});


app.listen(5000);

