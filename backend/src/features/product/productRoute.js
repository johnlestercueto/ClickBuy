const express = require("express")
const router = express.Router();
const upload = require("../../middleware/uploadMiddleware")
const productController = require("../product/productController")

router.post("/",upload.single("image") ,productController.createProduct)

module.exports = router;