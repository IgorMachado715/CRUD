const mongoose = require('../../database');

const ProductSchema = new mongoose.Schema({
    firstname: {type: String, required: true },
    price: {type: Number, required: true },
    description: {type: String, required: true },
    dateexpiration: {type: Date, required: true }

})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;