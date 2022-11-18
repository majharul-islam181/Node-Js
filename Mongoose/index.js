const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/teapack");

const main = async () => {
  const ProductSchema = new mongoose.Schema({
    name: String,
  });

  const ProductModel = mongoose.model("bzar", ProductSchema);
  let data = new ProductModel({ name: "m8" });
  let result = await data.save();
  console.log(result);
};
main();
