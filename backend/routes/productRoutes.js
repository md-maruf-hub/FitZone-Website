const express = require('express')
const router = express.Router()

const {
  getProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController')

const { protect, admin } = require('../middleware/authMiddleware')

router.get('/', getProducts)
router.get('/:id', getSingleProduct)

router.post('/', protect, admin, addProduct)
router.put('/:id', protect, admin, updateProduct)
router.delete('/:id', protect, admin, deleteProduct)

module.exports = router