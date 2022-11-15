// Render HTML with Nodejs help of express js

const { json } = require("express");
const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("<h1> Welcome to Home page!</h1>");

  res.send("Hello, this is home page create by :" + req.query.name);
});

app.get("/about", (req, res) => {
  res.send(
    `
        <input type='text' placeholder='User name'/>
        <button>click here</button>
        `
  );
  res.send("Hello, this is about page");
});


// Render json with Nodejs 
app.get("/profile", (req, res) => {
//   res.send("Hello, this is profile sections");
  res.send([{
    name: 'chamok',
    age: 45,
    graduation: 'done'
  },
  {
    name: 'chamok',
    age: 45,
    graduation: 'done'
  }]);
});

// page link
app.get("/name", (req, res) => {
//   res.send("Hello, this is name section");
  res.send(` You can go profile page by clicking <a href='/profile'>profile</a> button
  
  `);
  
});
app.listen(5400);
