import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";

export default function ProductSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data.slice(-4).reverse());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="bg-[#f5f5f3] py-14 sm:py-20 lg:py-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">

        {/* HEADER */}
        <div className="mb-8 sm:mb-12">

          <p className="uppercase tracking-[4px] sm:tracking-[5px] text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">
            Elite Equipment
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-none">
            Latest Products
          </h1>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">

          {products.map((product) => (

            <div
              key={product._id}
              className="bg-white border border-gray-200 p-4 sm:p-5 hover:-translate-y-1 sm:hover:-translate-y-2 transition duration-300"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[180px] sm:h-[220px] lg:h-[250px] object-cover hover:scale-105 transition duration-500"
                />

                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-[#d6ff00] text-black text-[10px] sm:text-[11px] px-2 sm:px-3 py-1 font-bold tracking-[2px]">
                  NEW
                </div>

              </div>

              {/* INFO */}
              <div className="mt-4 sm:mt-5">

                <div className="flex justify-between items-start mb-2">

                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[2px] text-gray-500">
                    {product.category}
                  </p>

                  <p className="text-[#7d9d00] font-bold text-sm sm:text-base">
                    ${product.price}
                  </p>

                </div>

                <h2 className="text-lg sm:text-xl font-black uppercase leading-tight mb-4 sm:mb-5">
                  {product.name}
                </h2>

                {/* BUTTONS */}
                <div className="space-y-2 sm:space-y-3">

                  {/* DETAILS PAGE */}
                  <Link to={`/product/${product._id}`}>
                    <button className="w-full border-2 border-black py-2 sm:py-3 uppercase tracking-[2px] sm:tracking-[3px] font-semibold text-sm sm:text-base hover:bg-black hover:text-white transition">
                      View Details
                    </button>
                  </Link>

                  {/* CART */}
                  <button
                    onClick={() => alert("Added to cart")}
                    className="w-full bg-[#d6ff00] py-2 sm:py-3 uppercase tracking-[2px] sm:tracking-[3px] font-semibold text-sm sm:text-base hover:bg-lime-300 transition"
                  >
                    Add To Cart
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}