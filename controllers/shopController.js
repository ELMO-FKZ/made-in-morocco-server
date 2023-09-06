const productModel = require("../models/products");

const getProducts = async(req, res) => {

    try {
        const products = await productModel.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: "An error occured while fetching products!"});
    }
}

const getProduct = async(req, res) => {
    try {
        const product = await productModel.findOne({ _id: req.params.id})
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: "An error occured while fetching a product!"});
    }
}

const getCategoryProducts = async(req, res) => {
    try {
        const products = await productModel.find({ category: req.params.category})
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: "An error occured while fetching products!"});
    }
}

module.exports = { getProducts, getProduct, getCategoryProducts }