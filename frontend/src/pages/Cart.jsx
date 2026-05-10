// src/pages/Cart.jsx

import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
    Trash2,
    Plus,
    Minus,
} from "lucide-react";

import api from "../api/api";


const Cart = () => {

    const [cartItems, setCartItems] = useState([]);

    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("token");

    const handleOrder = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

   await api.post(
  "/orders",
  {
    userId: user._id,
    products: cartItems,
    totalPrice,
  },
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

  alert("Order placed!");
};



    // FETCH USER CART
    const fetchCart = async () => {

        try {

            const res = await api.get(
                "/cart",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setCartItems(res.data);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);
        }
    };


    useEffect(() => {

        fetchCart();

    }, []);


    // INCREASE QUANTITY
    const increaseQty = async (
        id,
        quantity
    ) => {

        try {

            await api.put(
                `/cart/${id}`,
                {
                    quantity: quantity + 1,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            fetchCart();

        } catch (error) {

            console.log(error);
        }
    };


    // DECREASE QUANTITY
    const decreaseQty = async (
        id,
        quantity
    ) => {

        if (quantity <= 1) return;

        try {

            await api.put(
                `/cart/${id}`,
                {
                    quantity: quantity - 1,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            fetchCart();

        } catch (error) {

            console.log(error);
        }
    };


    // REMOVE ITEM
    const removeItem = async (id) => {

        try {

            await api.delete(
                `/cart/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            fetchCart();

        } catch (error) {

            console.log(error);
        }
    };


    // TOTAL PRICE
    const totalPrice = cartItems.reduce(

        (total, item) =>

            total +
            (item.product?.price || 0) *
            item.quantity,

        0
    );


    if (loading) {

        return (

            <div className="min-h-screen flex items-center justify-center">

                <h1 className="text-4xl font-black">
                    Loading...
                </h1>

            </div>
        );
    }


    return (

        <div className="bg-[#f5f5f3] min-h-screen text-black">

            <Navbar />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">

                {/* Header */}
                <div className="mb-16">

                    <p className="uppercase tracking-[4px] text-gray-500 text-sm mb-4">
                        Secure Checkout System
                    </p>

                    <h1 className="text-6xl lg:text-7xl font-black uppercase">
                        Cart Grid
                    </h1>

                </div>

                {
                    cartItems.length === 0 ? (

                        <div className="bg-white border border-gray-300 p-20 text-center">

                            <h2 className="text-4xl font-black uppercase mb-6">
                                Cart Is Empty
                            </h2>

                            <p className="text-gray-500 text-lg">
                                Add products to initialize checkout sequence.
                            </p>

                        </div>

                    ) : (

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                            {/* Cart Items */}
                            <div className="lg:col-span-2 space-y-6">

                                {
                                    cartItems.map((item) => (

                                        <div
                                            key={item._id}
                                            className="bg-white border border-gray-300 p-6 flex flex-col lg:flex-row gap-6"
                                        >

                                            {/* Image */}
                                            <img
                                                src={item.product?.image}
                                                alt={item.product?.name}
                                                className="w-full lg:w-[220px] h-[220px] object-cover"
                                            />

                                            {/* Content */}
                                            <div className="flex-1 flex flex-col justify-between">

                                                <div>

                                                    <p className="uppercase tracking-[3px] text-sm text-gray-400 mb-3">
                                                        {
                                                            item.product?.category
                                                        }
                                                    </p>

                                                    <h2 className="text-3xl font-black uppercase leading-tight">
                                                        {
                                                            item.product?.name
                                                        }
                                                    </h2>

                                                    <h3 className="text-3xl text-[#7d9d00] mt-6">
                                                        $
                                                        {
                                                            item.product?.price
                                                        }
                                                    </h3>

                                                </div>

                                                {/* Controls */}
                                                <div className="flex flex-wrap items-center justify-between mt-10 gap-5">

                                                    {/* Quantity */}
                                                    <div className="flex items-center border border-gray-300">

                                                        <button
                                                            onClick={() =>
                                                                decreaseQty(
                                                                    item._id,
                                                                    item.quantity
                                                                )
                                                            }
                                                            className="px-5 py-3 hover:bg-gray-100"
                                                        >
                                                            <Minus size={18} />
                                                        </button>

                                                        <span className="px-8 font-bold">
                                                            {item.quantity}
                                                        </span>

                                                        <button
                                                            onClick={() =>
                                                                increaseQty(
                                                                    item._id,
                                                                    item.quantity
                                                                )
                                                            }
                                                            className="px-5 py-3 hover:bg-gray-100"
                                                        >
                                                            <Plus size={18} />
                                                        </button>

                                                    </div>

                                                    {/* Remove */}
                                                    <button
                                                        onClick={() =>
                                                            removeItem(item._id)
                                                        }
                                                        className="flex items-center gap-3 uppercase tracking-[2px] text-red-500 hover:text-red-700"
                                                    >

                                                        <Trash2 size={18} />

                                                        Remove

                                                    </button>

                                                </div>

                                            </div>

                                        </div>
                                    ))
                                }

                            </div>

                            {/* Summary */}
                            <div className="bg-white border border-gray-300 p-8 h-fit sticky top-24">

                                <h2 className="text-3xl font-black uppercase mb-10">
                                    Order Summary
                                </h2>

                                <div className="space-y-6">

                                    <div className="flex justify-between uppercase text-sm tracking-[2px]">

                                        <span>
                                            Total Items
                                        </span>

                                        <span>
                                            {cartItems.reduce((total, item) => total + item.quantity, 0)}
                                        </span>

                                    </div>

                                    <div className="flex justify-between uppercase text-sm tracking-[2px]">

                                        <span>
                                            Shipping
                                        </span>

                                        <span>
                                            FREE
                                        </span>

                                    </div>

                                    <div className="border-t border-gray-300 pt-6 flex justify-between items-center">

                                        <span className="uppercase tracking-[2px] font-bold">
                                            Total
                                        </span>

                                        <h3 className="text-4xl font-black text-[#7d9d00]">
                                            $
                                            {totalPrice.toFixed(2)}
                                        </h3>

                                    </div>

                                </div>

                                <button onClick={handleOrder} className="w-full bg-[#d6ff00] py-5 uppercase tracking-[3px] font-bold text-lg hover:bg-lime-300 transition mt-10">
                                    Proceed To Checkout →
                                </button>

                            </div>

                        </div>
                    )
                }

            </div>

            <Footer />

        </div>
    );
};

export default Cart;