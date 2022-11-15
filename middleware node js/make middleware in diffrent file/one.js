const express = require('express');
const app = express();
const reqFilter = require('./middleware.js');


app.get("/",reqFilter, (req, res) => { //only this routes have restrictions
    res.send("welcome to home page, Your age is: "+req.query.age);
  });
  
  app.get("/user", (req, res) => {
    res.send("welcome to user page, Your age is: "+req.query.age);
  });
  app.listen(5555);
  