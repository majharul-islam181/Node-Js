const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/teapack");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const saveInDB = async () => {
  const ProductModel = mongoose.model("bazar", ProductSchema);
  let data = new ProductModel({ name: "Iphone 16", price: 50000 });
  let result = await data.save();
  console.log(result);
};

/**  not working ###
const updateInDB = async ()=>{
    const ProductModel = mongoose.model("bazar", ProductSchema);
    let data = new ProductModel.updateOne(
        {name: 'Iphone 11'},
        {
            $set: {price: 15000}
        }
        );
        console.log(data);

};
// updateInDB();
*/

const deleteInDB = async ()=>{
  const ProductModel = mongoose.model("bazar", ProductSchema);
  let data = await ProductModel.deleteOne({name:'Iphone 16'})
  console.log(data);
}

// deleteInDB();

const findInDB = async ()=>{
  const ProductModel = mongoose.model('bazar',ProductSchema);
  let data = await ProductModel.find({name:'Iphone 15'})
  console.log(data);
}

findInDB();