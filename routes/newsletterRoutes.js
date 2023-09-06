const express = require("express");
const router = express.Router();
const cors = require("cors");
const { subscribeToNewsletter } = require("../controllers/newsletterController")

// middleware
router.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

// Subscribe to newsletter
// POST /api/newsletter
router.post("/newsletter", subscribeToNewsletter)

module.exports = router;