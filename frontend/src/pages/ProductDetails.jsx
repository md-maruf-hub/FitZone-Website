// src/pages/ProductDetails.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import api from "../api/api";

export default function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {

    fetchProduct();

    fetchRelatedProducts();

  }, [id]);

  const fetchProduct = async () => {

    try {

      const res = await api.get(`/products/${id}`);

      setProduct(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  const fetchRelatedProducts = async () => {

    try {

      const res = await api.get("/products");

      setRelatedProducts(res.data.slice(0, 4));

    } catch (error) {

      console.log(error);
    }
  };


const token = localStorage.getItem("token");

const addToCart = async () => {
    try {
        const res = await api.post(
            "/cart",
            {
                productId: product._id,   // 🔥 MUST match backend
                quantity: 1,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        console.log(res.data);
        alert("Added To Cart");

    } catch (error) {
        console.log(error.response?.data || error.message);
    }
};












  if (!product) {

    return (
      <div className="min-h-screen flex items-center justify-center text-4xl font-black">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-[#f5f5f3] text-black min-h-screen">

      <Navbar />

      {/* PRODUCT SECTION */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12">

        {/* Breadcrumb */}
        <div className="text-[11px] uppercase tracking-[3px] text-gray-500 mb-10">
          Equipment / {product.category} / {product.name}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT IMAGES */}
          <div>

            <div className="relative overflow-hidden border border-gray-200">

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[700px] object-cover"
              />

              <div className="absolute top-5 left-5 bg-[#d6ff00] px-4 py-2 text-[11px] font-bold tracking-[2px] uppercase">
                Elite Series
              </div>

            </div>

            <div className="grid grid-cols-2 gap-5 mt-5">

              <img
                src={product.image}
                alt=""
                className="h-[240px] w-full object-cover border border-gray-200"
              />

              <img
                src={product.image}
                alt=""
                className="h-[240px] w-full object-cover border border-gray-200"
              />

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div>

            <div className="flex justify-between items-center mb-6">

              <p className="uppercase tracking-[3px] text-sm text-gray-500">
                SKU: FITZONE-{product._id.slice(0, 6)}
              </p>

              <div className="bg-[#d6ff00] px-3 py-1 text-[11px] font-bold uppercase tracking-[2px]">
                IN STOCK
              </div>

            </div>

            <h1 className="text-6xl lg:text-7xl font-black uppercase leading-none mb-8">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-8">

              <h2 className="text-5xl font-light text-[#7d9d00]">
                ${product.price}
              </h2>

              <span className="line-through text-gray-400 text-xl">
                ${(product.price + 300).toFixed(2)}
              </span>

            </div>

            <div className="border-l-4 border-[#d6ff00] pl-6 mb-10">

              <p className="text-gray-600 leading-8 text-lg">
                {product.description}
              </p>

            </div>

            {/* SPECS */}
            <div className="grid grid-cols-2 border border-gray-300 mb-10">

              <div className="border-r border-b border-gray-300 p-6">

                <p className="text-[11px] uppercase tracking-[2px] text-gray-500 mb-2">
                  Max Load
                </p>

                <h3 className="text-xl font-semibold">
                  1,500 LBS
                </h3>

              </div>

              <div className="border-b border-gray-300 p-6">

                <p className="text-[11px] uppercase tracking-[2px] text-gray-500 mb-2">
                  Material
                </p>

                <h3 className="text-xl font-semibold">
                  11-GA Steel
                </h3>

              </div>

              <div className="border-r border-gray-300 p-6">

                <p className="text-[11px] uppercase tracking-[2px] text-gray-500 mb-2">
                  Dimensions
                </p>

                <h3 className="text-xl font-semibold">
                  84" × 65" × 48"
                </h3>

              </div>

              <div className="p-6">

                <p className="text-[11px] uppercase tracking-[2px] text-gray-500 mb-2">
                  Stock
                </p>

                <h3 className="text-xl font-semibold">
                  {product.stock}
                </h3>

              </div>

            </div>

            {/* BUTTONS */}
            <button
              onClick={addToCart}
              className="w-full bg-[#d6ff00] py-5 uppercase tracking-[3px] font-bold text-lg hover:bg-lime-300 transition mb-4"
            >
              Add To Cart →
            </button>

            <button className="w-full border-2 border-black py-5 uppercase tracking-[3px] font-semibold hover:bg-black hover:text-white transition">
              Download Technical Manual
            </button>

          </div>

        </div>

      </section>

      {/* ENGINEERING SPECS */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">

        <div className="flex items-center gap-6 mb-12">

          <h2 className="uppercase tracking-[3px] text-sm">
            Engineering Specs
          </h2>

          <div className="h-[1px] bg-gray-300 flex-1"></div>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* BIG CARD */}
          <div className="lg:col-span-2 border border-gray-300 p-10 bg-white">

            <h3 className="uppercase tracking-[3px] text-sm text-[#7d9d00] mb-6">
              Indestructible Chassis
            </h3>

            <p className="text-gray-600 leading-8 text-lg mb-10">
              Laser-cut industrial-grade steel frame with elite
              engineering precision for maximum durability and
              performance.
            </p>

            <div className="w-full h-2 bg-gray-200">

              <div className="w-[65%] h-full bg-[#7d9d00]"></div>

            </div>

          </div>

          {/* WARRANTY */}
          <div className="bg-[#d6ff00] flex flex-col justify-center items-center p-10">

            <div className="text-6xl mb-6">
              🛡
            </div>

            <h3 className="text-2xl uppercase tracking-[3px] text-center">
              Lifetime
              <br />
              Frame Warranty
            </h3>

          </div>

        </div>

      </section>

      {/* RELATED PRODUCTS */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">

        <h2 className="uppercase tracking-[3px] text-sm mb-12">
          Complete The System
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {
            relatedProducts.map((item) => (

              <div
                key={item._id}
                className="bg-white border border-gray-300 p-4 hover:-translate-y-2 transition"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[260px] object-cover mb-5"
                />

                <h3 className="text-xl font-black uppercase leading-tight mb-3">
                  {item.name}
                </h3>

                <p className="text-[#7d9d00] text-2xl mb-5">
                  ${item.price}
                </p>

                <button
                  onClick={addToCart}
                  className="w-full border border-black py-3 uppercase tracking-[2px] hover:bg-black hover:text-white transition"
                >
                  Quick Add
                </button>

              </div>
            ))
          }

        </div>

      </section>

      <Footer />

    </div>
  );
}