// controllers/cartController.js

const Cart = require("../models/Cart");


// ADD TO CART
const addToCart = async (req, res) => {

    try {

        const {
            productId,
            quantity,
        } = req.body;

        const userId = req.user._id;

        // CHECK EXISTING ITEM
        const existingItem = await Cart.findOne({
            user: userId,
            product: productId,
        });

        // UPDATE QUANTITY
        if (existingItem) {

            existingItem.quantity += quantity || 1;

            await existingItem.save();

            return res.json({
                message: "Cart Updated",
                cart: existingItem,
            });
        }

        // CREATE NEW CART ITEM
        const cart = await Cart.create({
            user: userId,
            product: productId,
            quantity: quantity || 1,
        });

        res.status(201).json({
            message: "Added To Cart",
            cart,
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Add To Cart Failed",
        });
    }
};


// GET USER CART
const getUserCart = async (req, res) => {

    try {

        const cart = await Cart.find({
            user: req.user._id,
        }).populate("product");

        res.json(cart);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Fetch Cart Failed",
        });
    }
};


// UPDATE CART QUANTITY
const updateCart = async (req, res) => {

    try {

        const {
            quantity,
        } = req.body;

        const cartItem = await Cart.findById(
            req.params.id
        );

        if (!cartItem) {

            return res.status(404).json({
                message: "Cart Item Not Found",
            });
        }

        // SECURITY CHECK
        if (
            cartItem.user.toString() !==
            req.user._id.toString()
        ) {

            return res.status(403).json({
                message: "Unauthorized",
            });
        }

        cartItem.quantity = quantity;

        await cartItem.save();

        res.json({
            message: "Cart Updated",
            cartItem,
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Update Failed",
        });
    }
};


// REMOVE CART ITEM
const removeCartItem = async (req, res) => {

    try {

        const cartItem = await Cart.findById(
            req.params.id
        );

        if (!cartItem) {

            return res.status(404).json({
                message: "Item Not Found",
            });
        }

        // SECURITY CHECK
        if (
            cartItem.user.toString() !==
            req.user._id.toString()
        ) {

            return res.status(403).json({
                message: "Unauthorized",
            });
        }

        await cartItem.deleteOne();

        res.json({
            message: "Item Removed",
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Remove Failed",
        });
    }
};


// CLEAR USER CART
const clearCart = async (req, res) => {

    try {

        await Cart.deleteMany({
            user: req.user._id,
        });

        res.json({
            message: "Cart Cleared",
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Clear Cart Failed",
        });
    }
};


module.exports = {
    addToCart,
    getUserCart,
    updateCart,
    removeCartItem,
    clearCart,
};