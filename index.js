require("dotenv").config();
const express = require("express");
const connectDB = require("./connectDB");
const cors = require("cors");

// Routes
const shopRoutes = require("./routes/shopRoutes");
const newsletterRoutes = require("./routes/newsletterRoutes");
const contactRoutes = require("./routes/contactRoutes");
const stripeRoutes = require("./routes/stripeRoutes")

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({origin: `https://made-in-morocco.onrender.com`, credentials: true}))

// APIs
app.use("/api", shopRoutes);
app.use("/api", newsletterRoutes);
app.use("/api", contactRoutes);
app.use("/api", stripeRoutes);

app.get("/", (req, res) => {
    res.json("Hello World!");
});

app.get("*", (req, res) => {
    res.sendStatus("404");
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});