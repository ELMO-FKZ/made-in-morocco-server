const express = require("express");
const router = express.Router();
// const cors = require("cors");
const { sendMessage } = require("../controllers/contactController")

// middleware
// router.use(
//     cors({
//         origin: `${process.env.CLIENT_URL}`,
//         credentials: true,
//     })
// );

// Send a message
// POST /api/message
router.post("/message", sendMessage)

module.exports = router;