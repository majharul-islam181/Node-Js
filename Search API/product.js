const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    catagory: String
});

module.exports = mongoose.model('bazars1',productSchema);

