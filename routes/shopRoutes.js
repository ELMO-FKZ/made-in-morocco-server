const express = require("express");
const router = express.Router();
const cors = require("cors");
const { getProducts, getProduct, getCategoryProducts } = require("../controllers/shopController")

// middleware
router.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

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