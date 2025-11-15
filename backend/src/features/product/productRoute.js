const express = require("express")
const router = express.Router();
const upload = require("../../middleware/uploadMiddleware")
const productController = require("../product/productController")

router.post("/",upload.single("image") ,productController.createProduct)
router.get("/", productController.getAllProduct)
router.get("/:id", productController.getAllProduct)
router.delete("/:id", productController.deleteProductById)
router.put("/:id", upload.single("image"), productController.updateProductById)

module.exports = router;