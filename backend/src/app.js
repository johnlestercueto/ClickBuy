const express = require('express')
const cors = require('cors')
const app = express()
const path = require("path")
//para di mag undefined ang req.body 
app.use(express.json());

// Basic CORS (lahat ng origins allowed)
app.use(cors());
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.use('/api/auth', require('./features/auth/authRoute'));
app.use('/api/product', require("./features/product/productRoute"))

module.exports = app;