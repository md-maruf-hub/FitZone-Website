const Order = require('../models/Order')

/*
========================================
CREATE ORDER
========================================
*/

const createOrder = async (req, res) => {
  try {
    const { products, totalPrice } = req.body

    const order = await Order.create({
      user: req.user._id,
      products,
      totalPrice,
    })

    res.status(201).json(order)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

/*
========================================
GET USER ORDERS
========================================
*/

const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user._id,
    }).populate('products.product')

    res.json(orders)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

/*
========================================
GET SINGLE ORDER
========================================
*/

const getSingleOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user', 'name email')
      .populate('products.product')

    if (!order) {
      return res.status(404).json({
        message: 'Order not found',
      })
    }

    res.json(order)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

/*
========================================
ADMIN - GET ALL ORDERS
========================================
*/

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user', 'name email')
      .sort({ createdAt: -1 })

    res.json(orders)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

/*
========================================
ADMIN - UPDATE ORDER STATUS
========================================
*/

const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)

    if (!order) {
      return res.status(404).json({
        message: 'Order not found',
      })
    }

    order.status = req.body.status || order.status

    const updatedOrder = await order.save()

    res.json(updatedOrder)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

module.exports = {
  createOrder,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
  getSingleOrder,
}