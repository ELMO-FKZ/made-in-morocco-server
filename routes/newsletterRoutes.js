const express = require("express");
const router = express.Router();
const { subscribeToNewsletter } = require("../controllers/newsletterController");

// Subscribe to newsletter
// POST /api/newsletter
router.post("/newsletter", subscribeToNewsletter)

module.exports = router;