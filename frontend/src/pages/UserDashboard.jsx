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
        const storedUser = JSON.parse(
            localStorage.getItem("user")
        );

        const token = localStorage.getItem("token");

        if (!storedUser || !token) {
            navigate("/login");
            return;
        }

        setUser(storedUser);

        fetchOrders();

        fetchWishlist();
    }, []);

    // GET ORDERS
    const fetchOrders = async () => {
        try {
            const res = await api.get("/orders/my-orders");

            setOrders(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    // GET WISHLIST
    const fetchWishlist = async () => {
        try {
            const res = await api.get("/wishlist");

            setWishlist(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    // REMOVE WISHLIST
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

    // LOGOUT
    const handleLogout = () => {
        localStorage.removeItem("token");

        localStorage.removeItem("user");

        navigate("/login");
    };

    return (
        
        
        <div className="min-h-screen bg-[#f5f5f2] flex">
            
            {/* SIDEBAR */}
            <div className="w-[260px] bg-[#efefef] border-r border-gray-300 flex flex-col justify-between">
                <div>
                                        {/* LOGO */}
                    <div className="px-8 py-8 border-b border-gray-300">
                        <h1 className="text-1xl font-black">
                            FITZONE_SYSTEMS
                        </h1>
                    </div>


                    {/* USER */}
                    <div className="px-8 py-8 border-b border-gray-300">
                        <h2 className="text-2xl font-black uppercase">
                            {user?.name}
                        </h2>

                        <p className="text-sm text-gray-400 uppercase mt-1">
                            PREMIUM_TIER_MEMBER
                        </p>
                    </div>

                    {/* MENU */}
                    <div className="mt-6">
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
                </div>

                {/* LOGOUT */}
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-4 px-8 py-6 border-t border-gray-300 text-gray-400 uppercase hover:bg-red-100 transition"
                >
                    <LogOut size={20} />
                    System_Logout
                </button>
            </div>

            {/* MAIN */}
            <div className="flex-1 p-10">
                <Navbar/>
                {/* TOP */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* USER CARD */}
                    <div className="lg:col-span-2 bg-white border border-gray-300 p-8">
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-4xl font-black uppercase">
                                    {user?.name}
                                </h1>

                                <p className="text-gray-400 uppercase mt-3">
                                    ACTIVE_SINCE: 2024.Q1 //
                                    GLOBAL_HQ_LONDON
                                </p>
                            </div>

                            <div className="bg-[#d6ff00] px-4 py-2 text-sm font-bold">
                                CORE_ID: A0042
                            </div>
                        </div>

                        <div className="grid grid-cols-2 mt-24">
                            <div>
                                <p className="text-gray-400 uppercase text-sm">
                                    MEMBER_TIER
                                </p>

                                <h2 className="text-3xl uppercase mt-2">
                                    VANTAGE_PREMIUM
                                </h2>
                            </div>

                            <div>
                                <p className="text-gray-400 uppercase text-sm">
                                    REWARD_CREDITS
                                </p>

                                <h2 className="text-3xl mt-2">
                                    12,450_PTS
                                </h2>
                            </div>
                        </div>
                    </div>

                    {/* STATUS */}
                    <div className="bg-[#d6ff00] border-4 border-black flex flex-col items-center justify-center p-10 text-center">
                        <div className="text-6xl mb-6">⚡</div>

                        <h2 className="text-3xl uppercase font-black mb-6">
                            Upgrade_Protocol
                        </h2>

                        <p className="text-xl leading-10 mb-8">
                            Deploy 1,550 more points to unlock
                            QUANTUM_CLASS status.
                        </p>

                        <button className="bg-black text-[#d6ff00] px-8 py-4 uppercase font-bold hover:scale-105 transition">
                            Initiate_Upgrade
                        </button>
                    </div>
                </div>

                {/* ORDER HISTORY */}
                <div className="bg-white border border-gray-300 mt-14">
                    <div className="flex justify-between items-center px-8 py-8 border-b border-gray-300">
                        <h2 className="text-3xl uppercase">
                            Deployment_History
                        </h2>

                        <p className="text-gray-400 uppercase text-sm">
                            View_All_Logs
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="border-b border-gray-300">
                                <tr className="text-left text-gray-400 text-sm uppercase">
                                    <th className="p-6">
                                        Unit_ID
                                    </th>

                                    <th className="p-6">
                                        Timestamp
                                    </th>

                                    <th className="p-6">
                                        Manifest_Total
                                    </th>

                                    <th className="p-6">
                                        Status_Tag
                                    </th>

                                    <th className="p-6">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {orders.map((order) => (
                                    <tr
                                        key={order._id}
                                        className="border-b border-gray-200"
                                    >
                                        <td className="p-6 font-bold">
                                            #{order._id.slice(-6)}
                                        </td>

                                        <td className="p-6 text-gray-500">
                                            {new Date(
                                                order.createdAt
                                            ).toLocaleDateString()}
                                        </td>

                                        <td className="p-6 text-2xl">
                                            $
                                            {order.totalPrice}
                                        </td>

                                        <td className="p-6">
                                            <span className="bg-[#d6ff00] px-3 py-1 text-sm font-bold uppercase">
                                                {order.status}
                                            </span>
                                        </td>

                                        <td className="p-6">
                                            <button>
                                                <ExternalLink />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* WISHLIST */}
                <div className="mt-16">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl uppercase">
                            Saved_Gear
                        </h2>

                        <p className="text-gray-400 uppercase">
                            {wishlist.length}_UNITS_STAGED
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {wishlist.map((item) => (
                            <div
                                key={item._id}
                                className="bg-white border border-gray-300"
                            >
                                <img
                                    src={item.image}
                                    alt=""
                                    className="w-full h-[320px] object-cover"
                                />

                                <div className="p-5">
                                    <p className="text-gray-400 text-sm uppercase">
                                        UNIT //
                                        {item.category}
                                    </p>

                                    <h2 className="text-2xl font-black uppercase mt-3">
                                        {item.name}
                                    </h2>

                                    <div className="flex justify-between items-center mt-5">
                                        <p className="text-[#7d9d00] text-3xl font-bold">
                                            $
                                            {item.price}
                                        </p>

                                        <button
                                            onClick={() =>
                                                removeWishlist(
                                                    item._id
                                                )
                                            }
                                            className="text-red-500"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* ADD NEW */}
                        <Link
                            to="/products"
                            className="border-2 border-dashed border-gray-300 flex flex-col items-center justify-center min-h-[450px] hover:border-[#d6ff00] transition"
                        >
                            <Plus
                                size={60}
                                className="text-gray-300"
                            />

                            <p className="uppercase text-gray-400 mt-6">
                                Add_New_Unit
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;