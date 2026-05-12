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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            if (editingId) {
                await api.put(`/products/${editingId}`, formData, {
                    headers: { Authorization: `Bearer ${token}` },
                });
            } else {
                await api.post("/products", formData, {
                    headers: { Authorization: `Bearer ${token}` },
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

    const handleDelete = async (id) => {
        if (!window.confirm("Delete this product?")) return;

        try {
            const token = localStorage.getItem("token");

            await api.delete(`/products/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            fetchProducts();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-[#f5f5f3] min-h-screen flex flex-col md:flex-row">

            {/* SIDEBAR */}
            <div className="w-full md:w-[260px] bg-[#f7f7f5] border-b md:border-b-0 md:border-r border-gray-300 flex flex-col justify-between">

                <div>
                    <div className="p-6 md:p-8 border-b border-gray-300">
                        <h1 className="text-2xl md:text-3xl font-black uppercase">
                            FITZONE OPS
                        </h1>
                        <p className="uppercase text-xs tracking-[2px] text-gray-400 mt-2">
                            Elite Performance Admin
                        </p>
                    </div>

                    <div className="mt-4 md:mt-6 flex md:block overflow-x-auto md:overflow-visible">

                        <button className="flex items-center gap-3 md:gap-4 px-6 md:px-8 py-4 md:py-5 bg-[#d6ff00] uppercase text-xs md:text-sm font-bold whitespace-nowrap">
                            <LayoutDashboard size={18} />
                            Dashboard
                        </button>

                        <button className="flex items-center gap-3 md:gap-4 px-6 md:px-8 py-4 md:py-5 text-gray-500 uppercase hover:bg-gray-100 whitespace-nowrap">
                            <Package size={18} />
                            Inventory
                        </button>

                        <button className="flex items-center gap-3 md:gap-4 px-6 md:px-8 py-4 md:py-5 text-gray-500 uppercase hover:bg-gray-100 whitespace-nowrap">
                            <ShoppingCart size={18} />
                            Sales
                        </button>

                        <button className="flex items-center gap-3 md:gap-4 px-6 md:px-8 py-4 md:py-5 text-gray-500 uppercase hover:bg-gray-100 whitespace-nowrap">
                            <BarChart3 size={18} />
                            Analytics
                        </button>

                        <button className="flex items-center gap-3 md:gap-4 px-6 md:px-8 py-4 md:py-5 text-gray-500 uppercase hover:bg-gray-100 whitespace-nowrap">
                            <Settings size={18} />
                            Settings
                        </button>
                    </div>
                </div>

                <div className="p-6 border-t border-gray-300">
                    <button className="w-full bg-[#d6ff00] py-3 md:py-4 uppercase font-bold tracking-[2px] mb-4 text-sm md:text-base">
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
            <div className="flex-1 p-4 md:p-10 w-full">
                <Navbar />

                {/* TOP */}
                <div className="flex flex-col lg:flex-row justify-between gap-6 mb-12">

                    <div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-none">
                            Performance{" "}
                            <span className="text-[#7d9d00]">
                                Metrics
                            </span>
                        </h1>

                        <p className="text-gray-500 text-sm md:text-lg mt-4">
                            Real-time logistics and sales telemetry.
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
                        className="border-2 border-black px-6 md:px-8 py-3 md:py-4 uppercase tracking-[2px] font-bold flex items-center gap-2 md:gap-3 hover:bg-black hover:text-white transition w-full lg:w-auto justify-center"
                    >
                        <Plus size={20} />
                        Add Product
                    </button>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

                    <div className="bg-white border-l-4 border-[#d6ff00] p-6 md:p-8">
                        <p className="uppercase tracking-[3px] text-xs md:text-sm text-gray-500 mb-4">
                            Total Products
                        </p>
                        <h2 className="text-4xl md:text-6xl font-black">
                            {products.length}
                        </h2>
                    </div>

                    <div className="bg-white border-l-4 border-black p-6 md:p-8">
                        <p className="uppercase tracking-[3px] text-xs md:text-sm text-gray-500 mb-4">
                            Monthly Sales
                        </p>
                        <h2 className="text-4xl md:text-6xl font-black">
                            $284K
                        </h2>
                    </div>

                    <div className="bg-white border-l-4 border-red-500 p-6 md:p-8">
                        <p className="uppercase tracking-[3px] text-xs md:text-sm text-gray-500 mb-4">
                            Stock Alerts
                        </p>
                        <h2 className="text-4xl md:text-6xl font-black text-red-500">
                            24
                        </h2>
                    </div>
                </div>

                {/* TABLE */}
                <div className="bg-white border border-gray-300 overflow-x-auto">

                    <div className="p-6 md:p-8 border-b border-gray-300">
                        <h2 className="text-2xl md:text-4xl font-black uppercase">
                            Product Inventory
                        </h2>
                    </div>

                    <table className="w-full min-w-[700px]">
                        <thead className="bg-[#fafafa]">
                            <tr className="text-xs md:text-sm uppercase text-gray-500">
                                <th className="p-4 md:p-6 text-left">Product</th>
                                <th className="p-4 md:p-6 text-left">Price</th>
                                <th className="p-4 md:p-6 text-left">Category</th>
                                <th className="p-4 md:p-6 text-left">Stock</th>
                                <th className="p-4 md:p-6 text-left">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="5" className="p-10 text-center">
                                        Loading...
                                    </td>
                                </tr>
                            ) : (
                                products.map((product) => (
                                    <tr key={product._id} className="border-b">
                                        <td className="p-4 md:p-6 flex items-center gap-3 md:gap-5">
                                            <img
                                                src={product.image}
                                                className="w-14 md:w-20 h-14 md:h-20 object-cover"
                                            />
                                            <span className="font-bold uppercase text-sm md:text-lg">
                                                {product.name}
                                            </span>
                                        </td>

                                        <td className="p-4 md:p-6 text-green-600 font-bold">
                                            ${product.price}
                                        </td>

                                        <td className="p-4 md:p-6 uppercase text-sm">
                                            {product.category}
                                        </td>

                                        <td className="p-4 md:p-6">
                                            {product.stock}
                                        </td>

                                        <td className="p-4 md:p-6 flex gap-2">
                                            <button onClick={() => handleEdit(product)} className="p-2 border">
                                                <Pencil size={16} />
                                            </button>

                                            <button onClick={() => handleDelete(product._id)} className="p-2 border text-red-500">
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* MODAL */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">

                    <div className="bg-white w-full max-w-2xl p-6 md:p-10">

                        <h2 className="text-3xl md:text-5xl font-black uppercase mb-8">
                            {editingId ? "Update Product" : "Add Product"}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <input className="w-full border p-3" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                            <input className="w-full border p-3" name="price" value={formData.price} onChange={handleChange} placeholder="Price" />
                            <input className="w-full border p-3" name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
                            <input className="w-full border p-3" name="image" value={formData.image} onChange={handleChange} placeholder="Image" />
                            <input className="w-full border p-3" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" />

                            <div className="flex flex-col md:flex-row gap-3 pt-4">

                                <button className="flex-1 bg-[#d6ff00] py-3 font-bold uppercase">
                                    {editingId ? "Update" : "Add"}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="flex-1 border py-3 uppercase"
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