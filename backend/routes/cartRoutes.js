// routes/cartRoutes.js

const express = require("express");

const router = express.Router();

const {
    addToCart,
    getUserCart,
    updateCart,
    removeCartItem,
    clearCart,
} = require("../controllers/cartController");

const {
    protect,
} = require("../middleware/authMiddleware");


// ADD TO CART
router.post("/", protect, addToCart);

// GET USER CART
router.get("/", protect, getUserCart);

// UPDATE CART
router.put("/:id", protect, updateCart);

// REMOVE ITEM
router.delete("/:id", protect, removeCartItem);

// CLEAR CART
router.delete("/", protect, clearCart);

module.exports = router;