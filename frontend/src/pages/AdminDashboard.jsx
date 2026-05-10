// src/pages/admin/AdminDashboard.jsx

import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    BarChart3,
    Settings,
    Pencil,
    Trash2,
    Plus,
    LogOut,
} from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../api/api";

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);

    const [loading, setLoading] = useState(true);

    const [showModal, setShowModal] = useState(false);

    const [editingId, setEditingId] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: "",
        image: "",
        stock: "",
    });

    // get products
    const fetchProducts = async () => {
        try {
            const res = await api.get("/products");

            setProducts(res.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // add or update product
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            if (editingId) {
                // update
                await api.put(
                    `/products/${editingId}`,
                    formData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
            } else {
                // create
                await api.post("/products", formData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            }

            fetchProducts();

            setShowModal(false);

            setEditingId(null);

            setFormData({
                name: "",
                price: "",
                category: "",
                image: "",
                stock: "",
            });
        } catch (error) {
            console.log(error);
        }
    };

    // edit
    const handleEdit = (product) => {
        setEditingId(product._id);

        setFormData({
            name: product.name,
            price: product.price,
            category: product.category,
            image: product.image,
            stock: product.stock,
        });

        setShowModal(true);
    };

    // delete
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Delete this product?"
        );

        if (!confirmDelete) return;

        try {
            const token = localStorage.getItem("token");

            await api.delete(`/products/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            fetchProducts();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-[#f5f5f3] min-h-screen flex">

            {/* SIDEBAR */}
            <div className="w-[260px] bg-[#f7f7f5] border-r border-gray-300 flex flex-col justify-between">

                <div>
                    {/* Logo */}
                    <div className="p-8 border-b border-gray-300">
                        <h1 className="text-3xl font-black uppercase">
                            FITZONE OPS
                        </h1>

                        <p className="uppercase text-xs tracking-[2px] text-gray-400 mt-2">
                            Elite Performance Admin
                        </p>
                    </div>

                    {/* Menu */}
                    <div className="mt-6">

                        <button className="w-full flex items-center gap-4 px-8 py-5 bg-[#d6ff00] uppercase text-sm font-bold">
                            <LayoutDashboard size={18} />
                            Dashboard
                        </button>

                        <button className="w-full flex items-center gap-4 px-8 py-5 uppercase text-sm text-gray-500 hover:bg-gray-100">
                            <Package size={18} />
                            Inventory
                        </button>

                        <button className="w-full flex items-center gap-4 px-8 py-5 uppercase text-sm text-gray-500 hover:bg-gray-100">
                            <ShoppingCart size={18} />
                            Sales
                        </button>

                        <button className="w-full flex items-center gap-4 px-8 py-5 uppercase text-sm text-gray-500 hover:bg-gray-100">
                            <BarChart3 size={18} />
                            Analytics
                        </button>

                        <button className="w-full flex items-center gap-4 px-8 py-5 uppercase text-sm text-gray-500 hover:bg-gray-100">
                            <Settings size={18} />
                            Settings
                        </button>
                    </div>
                </div>

                {/* Bottom */}
                <div className="p-6 border-t border-gray-300">
                    <button className="w-full bg-[#d6ff00] py-4 uppercase font-bold tracking-[2px] mb-4">
                        New Arrival
                    </button>

                    <button
                        onClick={() => {
                            localStorage.removeItem("token");
                            localStorage.removeItem("user");
                            window.location.href = "/";
                        }}
                        className="flex items-center gap-3 text-gray-500 uppercase text-sm"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            </div>

            {/* MAIN */}
            <div className="flex-1 p-10">
                <Navbar/>

                {/* Top */}
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-7xl font-black uppercase leading-none">
                            Performance{" "}
                            <span className="text-[#7d9d00]">
                                Metrics
                            </span>
                        </h1>

                        <p className="text-gray-500 text-lg mt-4">
                            Real-time logistics and sales telemetry
                            for the global zone.
                        </p>
                    </div>

                    <button
                        onClick={() => {
                            setShowModal(true);
                            setEditingId(null);

                            setFormData({
                                name: "",
                                price: "",
                                category: "",
                                image: "",
                                stock: "",
                            });
                        }}
                        className="border-2 border-black px-8 py-4 uppercase tracking-[2px] font-bold flex items-center gap-3 hover:bg-black hover:text-white transition"
                    >
                        <Plus size={20} />
                        Add Product
                    </button>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

                    <div className="bg-white border-l-4 border-[#d6ff00] p-8">
                        <p className="uppercase tracking-[3px] text-sm text-gray-500 mb-4">
                            Total Products
                        </p>

                        <h2 className="text-6xl font-black">
                            {products.length}
                        </h2>
                    </div>

                    <div className="bg-white border-l-4 border-black p-8">
                        <p className="uppercase tracking-[3px] text-sm text-gray-500 mb-4">
                            Monthly Sales
                        </p>

                        <h2 className="text-6xl font-black">
                            $284K
                        </h2>
                    </div>

                    <div className="bg-white border-l-4 border-red-500 p-8">
                        <p className="uppercase tracking-[3px] text-sm text-gray-500 mb-4">
                            Stock Alerts
                        </p>

                        <h2 className="text-6xl font-black text-red-500">
                            24
                        </h2>
                    </div>
                </div>

                {/* PRODUCT TABLE */}
                <div className="bg-white border border-gray-300">

                    <div className="flex justify-between items-center p-8 border-b border-gray-300">
                        <h2 className="text-4xl font-black uppercase">
                            Product Inventory
                        </h2>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">

                            <thead className="border-b border-gray-300 bg-[#fafafa]">
                                <tr className="uppercase text-sm tracking-[2px] text-gray-500">
                                    <th className="text-left p-6">
                                        Product
                                    </th>

                                    <th className="text-left p-6">
                                        Price
                                    </th>

                                    <th className="text-left p-6">
                                        Category
                                    </th>

                                    <th className="text-left p-6">
                                        Stock
                                    </th>

                                    <th className="text-left p-6">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="p-10 text-center"
                                        >
                                            Loading...
                                        </td>
                                    </tr>
                                ) : (
                                    products.map((product) => (
                                        <tr
                                            key={product._id}
                                            className="border-b border-gray-200 hover:bg-[#fafafa]"
                                        >
                                            <td className="p-6 flex items-center gap-5">
                                                <img
                                                    src={product.image}
                                                    alt=""
                                                    className="w-20 h-20 object-cover border border-gray-300"
                                                />

                                                <div>
                                                    <h3 className="font-black uppercase text-lg">
                                                        {product.name}
                                                    </h3>
                                                </div>
                                            </td>

                                            <td className="p-6 text-xl font-bold text-[#7d9d00]">
                                                ${product.price}
                                            </td>

                                            <td className="p-6 uppercase">
                                                {product.category}
                                            </td>

                                            <td className="p-6">
                                                {product.stock}
                                            </td>

                                            <td className="p-6">
                                                <div className="flex gap-4">

                                                    <button
                                                        onClick={() =>
                                                            handleEdit(
                                                                product
                                                            )
                                                        }
                                                        className="border border-black p-3 hover:bg-black hover:text-white transition"
                                                    >
                                                        <Pencil size={18} />
                                                    </button>

                                                    <button
                                                        onClick={() =>
                                                            handleDelete(
                                                                product._id
                                                            )
                                                        }
                                                        className="border border-red-500 text-red-500 p-3 hover:bg-red-500 hover:text-white transition"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* MODAL */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

                    <div className="bg-white w-full max-w-2xl p-10 border border-black">

                        <h2 className="text-5xl font-black uppercase mb-10">
                            {editingId
                                ? "Update Product"
                                : "Add Product"}
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >

                            <input
                                type="text"
                                name="name"
                                placeholder="Product Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 px-5 py-4 outline-none"
                            />

                            <input
                                type="number"
                                name="price"
                                placeholder="Price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 px-5 py-4 outline-none"
                            />

                            <input
                                type="text"
                                name="category"
                                placeholder="Category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 px-5 py-4 outline-none"
                            />

                            <input
                                type="text"
                                name="image"
                                placeholder="Image URL"
                                value={formData.image}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 px-5 py-4 outline-none"
                            />

                            <input
                                type="number"
                                name="stock"
                                placeholder="Stock"
                                value={formData.stock}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 px-5 py-4 outline-none"
                            />

                            <div className="flex gap-5 pt-4">

                                <button
                                    type="submit"
                                    className="flex-1 bg-[#d6ff00] py-5 uppercase font-black tracking-[2px]"
                                >
                                    {editingId
                                        ? "Update Product"
                                        : "Add Product"}
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowModal(false)
                                    }
                                    className="flex-1 border border-black py-5 uppercase font-black tracking-[2px]"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;