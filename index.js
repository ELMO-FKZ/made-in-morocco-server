require("dotenv").config();
const express = require("express");
const connectDB = require("./connectDB");

// Routes
const shopRoutes = require("./routes/shopRoutes");
const newsletterRoutes = require("./routes/newsletterRoutes");
const contactRoutes = require("./routes/contactRoutes");
const stripeRoutes = require("./routes/stripeRoutes")

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.use((req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Origin",
        "https://made-in-morocco.onrender.com"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Private-Network", true);
    //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
    res.setHeader("Access-Control-Max-Age", 7200);
    
    next();
});

app.use(express.urlencoded( {extended: true} ));
app.use(express.json());

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