
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

module.exports = { createProduct}