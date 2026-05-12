export default function BundleSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-14 sm:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

      {/* LEFT CONTENT */}
      <div>

        <p className="uppercase tracking-[3px] sm:tracking-[4px] text-lime-500 mb-3 sm:mb-4 text-xs sm:text-sm">
          Optimized Logistics
        </p>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight">
          Elite Bundle
          <span className="block text-lime-500">
            Offers
          </span>
        </h2>

        <p className="text-gray-600 mt-5 sm:mt-8 leading-7 sm:leading-8 text-sm sm:text-base">
          Complete training ecosystems pre-configured.
        </p>

        {/* CARD */}
        <div className="border-l-4 border-lime-500 bg-white p-5 sm:p-8 lg:p-10 mt-8 sm:mt-12">

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase">
            Iron Basecamp Kit
          </h3>

          <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
            <li>✔ Olympic Barbell System</li>
            <li>✔ 160LB Bumper Plates</li>
            <li>✔ Adjustable Bench</li>
          </ul>

          <div className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8">

            <span className="text-3xl sm:text-4xl lg:text-5xl font-black">
              $1,499
            </span>

            <span className="line-through text-gray-400 text-sm sm:text-base">
              $1,860
            </span>

          </div>

          <button className="bg-lime-500 hover:bg-lime-400 transition mt-6 sm:mt-8 px-6 sm:px-10 py-3 sm:py-4 font-black uppercase text-sm sm:text-base w-full sm:w-auto">
            Deploy Bundle
          </button>

        </div>

      </div>

      {/* RIGHT IMAGES */}
      <div className="grid grid-cols-2 gap-3 sm:gap-5">

        {[
          "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop",
        ].map((img, i) => (
          <img
            key={i}
            src={img}
            className="h-[140px] sm:h-[200px] lg:h-[250px] w-full object-cover hover:scale-105 transition duration-300"
          />
        ))}

      </div>

    </section>
  );
}