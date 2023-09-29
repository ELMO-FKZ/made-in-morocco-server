const express = require("express");
const router = express.Router();
const { getProducts, getProduct, getCategoryProducts } = require("../controllers/shopController");

// Get all products
// GET /api/products
router.get("/products", getProducts);

// Get one product
// GET /api/products/:id
router.get("/products/:id", getProduct);

// Get gategory products
// GET /api/products/category/:category
router.get("/products/category/:category", getCategoryProducts);

module.exports = router;