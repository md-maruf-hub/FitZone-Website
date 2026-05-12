const Product = require('../models/Product')
const getProducts = async (req, res) => {
const products = await Product.find()
res.json(products)
}

const getSingleProduct = async (req, res) => {
const product = await Product.findById(req.params.id)
res.json(product)
}




const addProduct = async (req, res) => {
  try {
    const data = req.body;

    let result;

    if (Array.isArray(data)) {
      // multiple products
      result = await Product.insertMany(data);
    } else {
      // single product
      result = await Product.create(data);
    }

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};






const updateProduct = async (req, res) => {
const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
new: true,
})
res.json(updated)
}
const deleteProduct = async (req, res) => {
await Product.findByIdAndDelete(req.params.id)
res.json({ message: 'Product deleted' })
}
module.exports = {
getProducts,
getSingleProduct,
addProduct,
updateProduct,
deleteProduct,
}