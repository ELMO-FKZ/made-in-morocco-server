const express = require("express");
const router = express.Router();
const { checkout } = require("../controllers/stripeController");

// Checkout
// POST /api/checkout
router.post("/checkout", checkout)

module.exports = router;