const express = require("express");
const dbconnect = require("../Mongodb perpus/mongodb");
const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  let data = await dbconnect();
  data = await data.find().toArray();
  console.log(data);
  //   res.send({ name: "chamok" });
  res.send(data);
});


app.listen(500);
