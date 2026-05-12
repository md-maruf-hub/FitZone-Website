// src/pages/UserDashboard.jsx

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
    LayoutDashboard,
    History,
    Heart,
    Settings,
    LogOut,
    ExternalLink,
    Plus,
} from "lucide-react";

import api from "../api/api";

const UserDashboard = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const token = localStorage.getItem("token");

        if (!storedUser || !token) {
            navigate("/login");
            return;
        }

        setUser(storedUser);
        fetchOrders();
        fetchWishlist();
    }, []);

    const fetchOrders = async () => {
        try {
            const res = await api.get("/orders/my-orders");
            setOrders(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchWishlist = async () => {
        try {
            const res = await api.get("/wishlist");
            setWishlist(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const removeWishlist = async (id) => {
        try {
            await api.delete(`/wishlist/${id}`);
            setWishlist((prev) =>
                prev.filter((item) => item._id !== id)
            );
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-[#f5f5f2] flex flex-col lg:flex-row">

            {/* SIDEBAR */}
            <div className="w-full lg:w-[260px] bg-[#efefef] border-r border-gray-300 flex lg:flex-col justify-between">

                <div className="flex lg:block w-full">

                    {/* LOGO */}
                    <div className="px-5 sm:px-8 py-5 border-r lg:border-r-0 lg:border-b border-gray-300">
                        <h1 className="text-lg sm:text-xl font-black">
                            FITZONE_SYSTEMS
                        </h1>
                    </div>

                    {/* USER */}
                    <div className="hidden lg:block px-8 py-8 border-b border-gray-300">
                        <h2 className="text-2xl font-black uppercase">
                            {user?.name}
                        </h2>
                        <p className="text-sm text-gray-400 uppercase mt-1">
                            PREMIUM_TIER_MEMBER
                        </p>
                    </div>
                </div>

                {/* MENU */}
                <div className="hidden lg:block mt-6">
                    <button className="w-full flex items-center gap-4 px-8 py-5 bg-[#d6ff00] font-bold uppercase">
                        <LayoutDashboard size={20} />
                        Dashboard
                    </button>

                    <button className="w-full flex items-center gap-4 px-8 py-5 text-gray-400 uppercase hover:bg-gray-200 transition">
                        <History size={20} />
                        Order_History
                    </button>

                    <button className="w-full flex items-center gap-4 px-8 py-5 text-gray-400 uppercase hover:bg-gray-200 transition">
                        <Heart size={20} />
                        Wishlist
                    </button>

                    <button className="w-full flex items-center gap-4 px-8 py-5 text-gray-400 uppercase hover:bg-gray-200 transition">
                        <Settings size={20} />
                        Settings
                    </button>
                </div>

                {/* LOGOUT */}
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center lg:justify-start gap-3 px-5 sm:px-8 py-4 lg:py-6 border-t border-gray-300 text-gray-500 uppercase hover:bg-red-100 transition text-sm"
                >
                    <LogOut size={18} />
                    Logout
                </button>
            </div>

            {/* MAIN */}
            <div className="flex-1 p-4 sm:p-6 lg:p-10">

                <Navbar />

                {/* TOP */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">

                    {/* USER CARD */}
                    <div className="xl:col-span-2 bg-white border border-gray-300 p-5 sm:p-8 overflow-hidden">

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">

                            <div>
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase">
                                    {user?.name}
                                </h1>

                                <p className="text-gray-400 uppercase mt-2 sm:mt-3 text-xs sm:text-sm">
                                    ACTIVE_SINCE: 2024.Q1
                                </p>
                            </div>

                            <div className="bg-[#d6ff00] px-3 py-2 text-xs sm:text-sm font-bold w-fit">
                                CORE_ID: A0042
                            </div>

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 sm:mt-16">

                            <div>
                                <p className="text-gray-400 uppercase text-xs">
                                    MEMBER_TIER
                                </p>
                                <h2 className="text-xl sm:text-2xl lg:text-3xl uppercase mt-2">
                                    VANTAGE_PREMIUM
                                </h2>
                            </div>

                            <div>
                                <p className="text-gray-400 uppercase text-xs">
                                    REWARD_CREDITS
                                </p>
                                <h2 className="text-xl sm:text-2xl lg:text-3xl mt-2">
                                    12,450_PTS
                                </h2>
                            </div>

                        </div>

                    </div>

                    {/* STATUS */}
                    <div className="bg-[#d6ff00] border-4 border-black flex flex-col items-center justify-center p-6 sm:p-10 text-center">

                        <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">
                            ⚡
                        </div>

                        <h2 className="text-xl sm:text-2xl lg:text-3xl uppercase font-black mb-4 sm:mb-6">
                            Upgrade_Protocol
                        </h2>

                        <p className="text-sm sm:text-lg leading-7 sm:leading-10 mb-6 sm:mb-8">
                            Deploy 1,550 more points to unlock QUANTUM_CLASS status.
                        </p>

                        <button className="bg-black text-[#d6ff00] px-6 sm:px-8 py-3 sm:py-4 uppercase font-bold hover:scale-105 transition text-sm sm:text-base">
                            Initiate_Upgrade
                        </button>

                    </div>

                </div>

                {/* ORDER HISTORY */}
                <div className="bg-white border border-gray-300 mt-10 sm:mt-14 overflow-x-auto">

                    <div className="flex justify-between items-center px-5 sm:px-8 py-6 sm:py-8 border-b border-gray-300">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl uppercase">
                            Deployment_History
                        </h2>
                    </div>

                    <table className="w-full min-w-[600px]">

                        <thead className="border-b border-gray-300">
                            <tr className="text-left text-gray-400 text-xs sm:text-sm uppercase">
                                <th className="p-4 sm:p-6">Unit_ID</th>
                                <th className="p-4 sm:p-6">Timestamp</th>
                                <th className="p-4 sm:p-6">Total</th>
                                <th className="p-4 sm:p-6">Status</th>
                                <th className="p-4 sm:p-6">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {orders.map((order) => (
                                <tr key={order._id} className="border-b">
                                    <td className="p-4 sm:p-6 font-bold">
                                        #{order._id.slice(-6)}
                                    </td>

                                    <td className="p-4 sm:p-6 text-gray-500 text-sm">
                                        {new Date(order.createdAt).toLocaleDateString()}
                                    </td>

                                    <td className="p-4 sm:p-6 font-bold">
                                        ${order.totalPrice}
                                    </td>

                                    <td className="p-4 sm:p-6">
                                        <span className="bg-[#d6ff00] px-2 sm:px-3 py-1 text-xs font-bold uppercase">
                                            {order.status}
                                        </span>
                                    </td>

                                    <td className="p-4 sm:p-6">
                                        <ExternalLink size={18} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>

                {/* WISHLIST */}
                <div className="mt-10 sm:mt-16">

                    <div className="flex justify-between items-center mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl uppercase">
                            Saved_Gear
                        </h2>

                        <p className="text-gray-400 uppercase text-sm">
                            {wishlist.length}_UNITS
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">

                        {wishlist.map((item) => (
                            <div key={item._id} className="bg-white border">

                                <img
                                    src={item.image}
                                    className="w-full h-[240px] sm:h-[300px] object-cover"
                                />

                                <div className="p-4 sm:p-5">

                                    <h2 className="text-lg sm:text-xl font-black uppercase">
                                        {item.name}
                                    </h2>

                                    <div className="flex justify-between items-center mt-4">

                                        <p className="text-[#7d9d00] font-bold">
                                            ${item.price}
                                        </p>

                                        <button
                                            onClick={() => removeWishlist(item._id)}
                                            className="text-red-500 text-sm"
                                        >
                                            Remove
                                        </button>

                                    </div>

                                </div>

                            </div>
                        ))}

                        {/* ADD */}
                        <Link
                            to="/products"
                            className="border-2 border-dashed flex items-center justify-center min-h-[300px] sm:min-h-[400px] hover:border-[#d6ff00]"
                        >
                            <Plus size={40} className="text-gray-300" />
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default UserDashboard;