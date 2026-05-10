const express = require('express')
const router = express.Router()

const {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
  getSingleOrder,
} = require('../controllers/orderController')

const { protect, admin } = require('../middleware/authMiddleware')

/*
========================================
USER ROUTES
========================================
*/

// Create Order
router.post('/', protect, createOrder)

// Get Logged In User Orders
router.get('/my-orders', protect, getMyOrders)

// Get Single Order
router.get('/:id', protect, getSingleOrder)

/*
========================================
ADMIN ROUTES
========================================
*/

// Get All Orders
router.get('/', protect, admin, getAllOrders)

// Update Order Status
router.put('/:id', protect, admin, updateOrderStatus)

module.exports = router