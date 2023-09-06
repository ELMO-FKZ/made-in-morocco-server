const express = require("express");
const router = express.Router();
const cors = require("cors");
const { sendMessage } = require("../controllers/contactController")

// middleware
router.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

// Send a message
// POST /api/message
router.post("/message", sendMessage)

module.exports = router;