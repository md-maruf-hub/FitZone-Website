// src/pages/Cart.jsx

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Trash2, Plus, Minus } from "lucide-react";
import api from "../api/api";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    const totalPrice = cartItems.reduce(
        (total, item) =>
            total + (item.product?.price || 0) * item.quantity,
        0
    );

    const fetchCart = async () => {
        try {
            const res = await api.get("/cart", {
                headers: { Authorization: `Bearer ${token}` },
            });

            setCartItems(res.data);

            window.dispatchEvent(
                new CustomEvent("cart-update", {
                    detail: res.data.length,
                })
            );

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const increaseQty = async (id, quantity) => {
        try {
            await api.put(
                `/cart/${id}`,
                { quantity: quantity + 1 },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            fetchCart();
        } catch (error) {
            console.log(error);
        }
    };

    const decreaseQty = async (id, quantity) => {
        if (quantity <= 1) return;

        try {
            await api.put(
                `/cart/${id}`,
                { quantity: quantity - 1 },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            fetchCart();
        } catch (error) {
            console.log(error);
        }
    };

    const removeItem = async (id) => {
        try {
            await api.delete(`/cart/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            fetchCart();
        } catch (error) {
            console.log(error);
        }
    };

    const handleOrder = async () => {
        try {
            await api.post(
                "/orders",
                {
                    userId: user._id,
                    products: cartItems,
                    totalPrice,
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            alert("Order placed successfully!");
        } catch (error) {
            console.log(error);
            alert("Order failed!");
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl sm:text-4xl font-black">
                    Loading...
                </h1>
            </div>
        );
    }

    return (
        <div className="bg-[#f5f5f3] min-h-screen text-black">

            <Navbar />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-16">

                {/* TITLE */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase mb-8 sm:mb-10">
                    Cart
                </h1>

                {cartItems.length === 0 ? (
                    <div className="bg-white p-6 sm:p-10 border text-center">
                        Cart is empty
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">

                        {/* ITEMS */}
                        <div className="lg:col-span-2 space-y-5 sm:space-y-6">

                            {cartItems.map((item) => (
                                <div
                                    key={item._id}
                                    className="bg-white p-4 sm:p-6 border flex flex-col sm:flex-row gap-4 sm:gap-6"
                                >

                                    <img
                                        src={item.product?.image}
                                        className="w-full sm:w-[130px] lg:w-[150px] h-[180px] sm:h-[130px] lg:h-[150px] object-cover"
                                    />

                                    <div className="flex-1">

                                        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
                                            {item.product?.name}
                                        </h2>

                                        <p className="text-green-600 text-lg sm:text-xl mt-1">
                                            ${item.product?.price}
                                        </p>

                                        {/* QTY */}
                                        <div className="flex items-center mt-4 border w-fit">

                                            <button
                                                onClick={() =>
                                                    decreaseQty(item._id, item.quantity)
                                                }
                                                className="p-2"
                                            >
                                                <Minus size={16} />
                                            </button>

                                            <span className="px-3 sm:px-4 text-sm sm:text-base">
                                                {item.quantity}
                                            </span>

                                            <button
                                                onClick={() =>
                                                    increaseQty(item._id, item.quantity)
                                                }
                                                className="p-2"
                                            >
                                                <Plus size={16} />
                                            </button>

                                        </div>

                                        {/* REMOVE */}
                                        <button
                                            onClick={() => removeItem(item._id)}
                                            className="text-red-500 mt-4 flex items-center gap-2 text-sm sm:text-base"
                                        >
                                            <Trash2 size={16} />
                                            Remove
                                        </button>

                                    </div>

                                </div>
                            ))}

                        </div>

                        {/* SUMMARY */}
                        <div className="bg-white p-5 sm:p-6 border h-fit sticky top-24">

                            <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6">
                                Order Summary
                            </h2>

                            <div className="flex justify-between mb-3 sm:mb-4 text-sm sm:text-base">
                                <span>Total</span>
                                <span className="font-bold">
                                    ${totalPrice.toFixed(2)}
                                </span>
                            </div>

                            <button
                                onClick={handleOrder}
                                className="w-full bg-black text-white py-3 sm:py-4 mt-5 sm:mt-6 uppercase font-bold tracking-[2px] text-sm sm:text-base"
                            >
                                Checkout
                            </button>

                        </div>

                    </div>
                )}

            </div>

            <Footer />

        </div>
    );
};

export default Cart;