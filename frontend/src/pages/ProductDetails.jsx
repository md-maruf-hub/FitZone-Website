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
          productId: product._id,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Added To Cart");
      console.log(res.data);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl font-black">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-[#f5f5f3] text-black min-h-screen">

      <Navbar />

      {/* PRODUCT SECTION */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12">

        <div className="text-[10px] sm:text-[11px] uppercase tracking-[2px] sm:tracking-[3px] text-gray-500 mb-6 sm:mb-10">
          Equipment / {product.category} / {product.name}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* LEFT IMAGES */}
          <div>

            <div className="relative overflow-hidden border border-gray-200">

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[300px] sm:h-[450px] lg:h-[700px] object-cover"
              />

              <div className="absolute top-3 sm:top-5 left-3 sm:left-5 bg-[#d6ff00] px-3 sm:px-4 py-1 sm:py-2 text-[10px] sm:text-[11px] font-bold tracking-[2px] uppercase">
                Elite Series
              </div>

            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-5 mt-4 sm:mt-5">

              <img
                src={product.image}
                className="h-[140px] sm:h-[200px] lg:h-[240px] w-full object-cover border border-gray-200"
              />

              <img
                src={product.image}
                className="h-[140px] sm:h-[200px] lg:h-[240px] w-full object-cover border border-gray-200"
              />

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-5 sm:mb-6">

              <p className="uppercase tracking-[2px] text-xs sm:text-sm text-gray-500">
                SKU: FITZONE-{product._id.slice(0, 6)}
              </p>

              <div className="bg-[#d6ff00] px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-[2px] w-fit">
                IN STOCK
              </div>

            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase leading-none mb-6 sm:mb-8">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#7d9d00]">
                ${product.price}
              </h2>

              <span className="line-through text-gray-400 text-base sm:text-xl">
                ${(product.price + 300).toFixed(2)}
              </span>

            </div>

            <div className="border-l-4 border-[#d6ff00] pl-4 sm:pl-6 mb-8 sm:mb-10">

              <p className="text-gray-600 leading-7 sm:leading-8 text-base sm:text-lg">
                {product.description}
              </p>

            </div>

            {/* SPECS */}
            <div className="grid grid-cols-2 border border-gray-300 mb-8 sm:mb-10 text-sm sm:text-base">

              <div className="border-r border-b border-gray-300 p-4 sm:p-6">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[2px] text-gray-500 mb-2">
                  Max Load
                </p>
                <h3 className="text-base sm:text-xl font-semibold">
                  1,500 LBS
                </h3>
              </div>

              <div className="border-b border-gray-300 p-4 sm:p-6">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[2px] text-gray-500 mb-2">
                  Material
                </p>
                <h3 className="text-base sm:text-xl font-semibold">
                  11-GA Steel
                </h3>
              </div>

              <div className="border-r border-gray-300 p-4 sm:p-6">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[2px] text-gray-500 mb-2">
                  Dimensions
                </p>
                <h3 className="text-base sm:text-xl font-semibold">
                  84" × 65" × 48"
                </h3>
              </div>

              <div className="p-4 sm:p-6">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[2px] text-gray-500 mb-2">
                  Stock
                </p>
                <h3 className="text-base sm:text-xl font-semibold">
                  {product.stock}
                </h3>
              </div>

            </div>

            {/* BUTTONS */}
            <button
              onClick={addToCart}
              className="w-full bg-[#d6ff00] py-4 sm:py-5 uppercase tracking-[2px] sm:tracking-[3px] font-bold text-base sm:text-lg hover:bg-lime-300 transition mb-4"
            >
              Add To Cart →
            </button>

            <button className="w-full border-2 border-black py-4 sm:py-5 uppercase tracking-[2px] sm:tracking-[3px] font-semibold hover:bg-black hover:text-white transition">
              Download Technical Manual
            </button>

          </div>

        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-16">

        <h2 className="uppercase tracking-[3px] text-sm mb-8 sm:mb-12">
          Complete The System
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

          {relatedProducts.map((item) => (
            <div
              key={item._id}
              className="bg-white border border-gray-300 p-3 sm:p-4 hover:-translate-y-2 transition"
            >
              <img
                src={item.image}
                className="w-full h-[180px] sm:h-[220px] lg:h-[260px] object-cover mb-4 sm:mb-5"
              />

              <h3 className="text-lg sm:text-xl font-black uppercase mb-2 sm:mb-3">
                {item.name}
              </h3>

              <p className="text-[#7d9d00] text-xl sm:text-2xl mb-4 sm:mb-5">
                ${item.price}
              </p>

              <button
                onClick={addToCart}
                className="w-full border border-black py-2 sm:py-3 uppercase tracking-[2px] hover:bg-black hover:text-white transition text-sm sm:text-base"
              >
                Quick Add
              </button>

            </div>
          ))}

        </div>

      </section>

      <Footer />
    </div>
  );
}