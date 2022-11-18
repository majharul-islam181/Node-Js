const mongoose = require("mongoose");
const main = async () => {
 await mongoose.connect("mongodb://0.0.0.0:27017/teapack");
  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number
  });

  const ProductModel = mongoose.model("bazar", ProductSchema);
  let data = new ProductModel({ name: "Iphone 13",price:50000});
  let result = await data.save();
  console.log(result);
};
main();
