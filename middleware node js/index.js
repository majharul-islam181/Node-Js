const express = require("express");
const app = express();

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide age");

  }else if(req.query.age<18){
    res.send('You cannot access this page, You entered :'+req.query.age);
  }
   else {
    next();
  }
};

app.use(reqFilter);

app.get("/", (req, res) => {
  res.send("welcome to home page, Your age is: "+req.query.age);
});

app.get("/user", (req, res) => {
  res.send("welcome to user page, Your age is: "+req.query.age);
});
app.listen(5555);
