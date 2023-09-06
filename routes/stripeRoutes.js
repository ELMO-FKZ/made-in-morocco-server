const express = require("express");
const router = express.Router();
const cors = require("cors");
const { checkout } = require("../controllers/stripeController")

// middleware
router.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

// Checkout
// POST /api/checkout
router.post("/checkout", checkout)

module.exports = router;