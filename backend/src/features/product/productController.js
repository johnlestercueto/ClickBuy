const productService = require("../product/productService")

const createProduct = async (req, res) => {
    try {

        const productData = {
         ...req.body,
        image: req.file ? req.file.filename : null
        };

        const product = await productService.createProduct(productData)

        res.status(201).json({
            message: "create product sucessfully",
            product
        })
    } catch (error) {
         res.status(500).json({
            message: error.message
        })
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productService.getProductById(id);

        res.status(200).json(product)
    } catch (error) {
          res.status(500).json({
            message: error.message
        })
    }
}

const getAllProduct = async (req, res) => {
    try {
        const products = await productService.getAllProduct();

        res.status(200).json(products)
    } catch (error) {
         res.status(500).json({
            message: error.message
        })
    }
}

const deleteProductById = async (req, res) => {
    try {

        const { id } = req.params;
        await productService.deleteProductById(id)

        res.status(200).json({message: "deleted product sucessfully"})
    } catch (error) {
         res.status(500).json({
            message: error.message
        })
    }
}

const updateProductById = async (req, res) => {
    try {

        const { id } = req.params;
        const updateData = {
         ...req.body,
         image: req.file ? req.file.filename : undefined,
        };

        const Data = await productService.updateProductById(id, updateData)
        res.status(200).json({message: "updated product sucessfully", Data})
    } catch (error) {
         res.status(500).json({
            message: error.message
        })
    }
}

module.exports = { 
    createProduct,
    getProductById,
    getAllProduct,
    deleteProductById,
    updateProductById
}