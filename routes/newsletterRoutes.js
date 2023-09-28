const express = require("express");
const router = express.Router();
const cors = require("cors");
const { subscribeToNewsletter } = require("../controllers/newsletterController")

// middleware
router.use(
    cors({
        origin: `${process.env.CLIENT_URL}`,
        credentials: true,
    })
);

// Subscribe to newsletter
// POST /api/newsletter
router.post("/newsletter", subscribeToNewsletter)

module.exports = router;