
const Product = require("../product/Product")

const createProduct = async ({name, price, description, image}) =>
{
    const product = new Product({
        name,
        price,
        description,
        image
    })

    await product.save();

    return Product;

}

const getProductById = async (id) => {
   const product = await Product.findById(id)

   if(!product) throw new Error("Product not found")     
   return product
}

const getAllProduct = async () => {
    const product = await Product.find();
    return product;
    
}

const deleteProductById = async (id) => {
    const product = await Product.findByIdAndDelete(id)

    if(!product) throw new Error("Product not Found")

    return product;
}

const updateProductById = async (id, updateData) => {
    const product = await Product.findByIdAndUpdate(id, updateData, { new: true});

     if(!product) throw new Error("Product not Found")

    return product;
}


module.exports = { 
    createProduct, 
    getProductById, 
    getAllProduct, 
    deleteProductById, 
    updateProductById
}