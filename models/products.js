const mongoose = require("mongoose");

const {Schema} = mongoose; 

const productsSchema = new Schema(
    {
        title: {type: String, required: true},
        image: {type: String, required: true},
        description: {type: String, required: true},
        category: {type: String, required: true},
        price: {type: Number, required: true},
        promotion: {type: Number, required: true},
    },
    {
        timestamps: true
    }
)

const productModel = mongoose.models.productModel || mongoose.model("products", productsSchema);

module.exports = productModel;