import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import api from "../api/api";

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetchProducts();

    }, []);

    const fetchProducts = async () => {

        try {

            const res = await api.get("/products");

            setProducts(res.data);

        } catch (error) {

            console.log(error);
        }
    };

    return (
        <div className="bg-[#f5f5f3] min-h-screen text-black">

            <Navbar />

            <div className="flex flex-col lg:flex-row">

                {/* Sidebar */}
                <div className="w-full lg:w-[260px] border-r border-gray-300 p-8">

                    <h2 className="text-[22px] font-bold tracking-[4px] uppercase mb-8">
                        Filters
                    </h2>

                    {/* Category */}
                    <div className="mb-10">

                        <h3 className="text-sm uppercase tracking-[3px] mb-5 text-gray-600">
                            Category
                        </h3>

                        <div className="space-y-4 text-sm">

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" />
                                STRENGTH TRAINING
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" defaultChecked />
                                FREE WEIGHTS
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" />
                                CARDIO MACHINES
                            </label>

                        </div>
                    </div>

                    {/* Brand */}
                    <div className="mb-10">

                        <h3 className="text-sm uppercase tracking-[3px] mb-5 text-gray-600">
                            Brand
                        </h3>

                        <div className="space-y-4 text-sm">

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" />
                                FITZONE PRO
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" />
                                IRON TECH
                            </label>

                        </div>
                    </div>

                    {/* Price */}
                    <div className="mb-10">

                        <h3 className="text-sm uppercase tracking-[3px] mb-5 text-gray-600">
                            Price Range
                        </h3>

                        <div className="flex gap-3">

                            <input
                                type="text"
                                placeholder="Min"
                                className="w-full border border-gray-400 bg-transparent px-4 py-3 outline-none"
                            />

                            <input
                                type="text"
                                placeholder="Max"
                                className="w-full border border-gray-400 bg-transparent px-4 py-3 outline-none"
                            />

                        </div>
                    </div>

                    {/* Weight */}
                    <div className="mb-12">

                        <h3 className="text-sm uppercase tracking-[3px] mb-5 text-gray-600">
                            Weight (KG)
                        </h3>

                        <div className="flex gap-3">

                            <button className="border border-gray-400 px-5 py-2 text-sm">
                                5-10
                            </button>

                            <button className="bg-[#d6ff00] px-5 py-2 text-sm font-semibold">
                                15-25
                            </button>

                            <button className="border border-gray-400 px-5 py-2 text-sm">
                                30+
                            </button>

                        </div>
                    </div>

                    <button className="bg-[#d6ff00] w-full py-4 font-bold tracking-[2px] hover:bg-lime-300 transition">
                        APPLY FILTERS
                    </button>
                </div>

                {/* Product Section */}
                <div className="flex-1 p-8 lg:p-12">

                    {/* Top */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">

                        <div>

                            <p className="uppercase tracking-[5px] text-gray-500 text-sm mb-3">
                                Elite Equipment
                            </p>

                            <h1 className="text-5xl lg:text-7xl font-black uppercase leading-none">
                                Inventory
                            </h1>

                        </div>

                        <div className="mt-8 lg:mt-0 flex items-center gap-4 text-sm uppercase tracking-[2px]">

                            <span className="text-gray-500">
                                Sort By:
                            </span>

                            <select className="bg-transparent outline-none">

                                <option>
                                    Newest Arrival
                                </option>

                                <option>
                                    Price Low
                                </option>

                                <option>
                                    Price High
                                </option>

                            </select>

                            <span className="text-gray-400">
                                {products.length} Results
                            </span>

                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">

                        {
                            products.map((product) => (

                                <div
                                    key={product._id}
                                    className="bg-white border border-gray-200 p-5 hover:-translate-y-2 transition duration-300"
                                >

                                    <div className="relative overflow-hidden">

                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-[320px] object-cover hover:scale-105 transition duration-500"
                                        />

                                        <div className="absolute top-3 left-3 bg-[#d6ff00] text-black text-[11px] px-3 py-1 font-bold tracking-[2px]">
                                            IN STOCK
                                        </div>

                                    </div>

                                    <div className="mt-5">

                                        <div className="flex justify-between items-start mb-3">

                                            <p className="text-[11px] uppercase tracking-[2px] text-gray-500">
                                                {product.category}
                                            </p>

                                            <p className="text-[#7d9d00] font-bold text-xl">
                                                ${product.price}
                                            </p>

                                        </div>

                                        <h2 className="text-3xl font-black uppercase leading-tight mb-6">
                                            {product.name}
                                        </h2>

                                        <Link
                                            to={`/product/${product._id}`}
                                        >

                                            <button className="w-full border-2 border-black py-4 uppercase tracking-[3px] font-semibold hover:bg-black hover:text-white transition">

                                                Add To Grid

                                            </button>

                                        </Link>

                                    </div>

                                </div>
                            ))
                        }

                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center gap-4 mt-16">

                        <button className="border border-gray-300 w-12 h-12">
                            ‹
                        </button>

                        <button className="bg-[#d6ff00] w-12 h-12 font-bold">
                            01
                        </button>

                        <button className="border border-gray-300 w-12 h-12">
                            02
                        </button>

                        <button className="border border-gray-300 w-12 h-12">
                            03
                        </button>

                        <button className="border border-gray-300 w-12 h-12">
                            
                        </button>

                    </div>

                </div>
            </div>

            <Footer />

        </div>
    );
}
