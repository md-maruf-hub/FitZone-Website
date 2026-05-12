export default function Footer() {
  return (
    <footer className="bg-black text-white py-14 sm:py-16 lg:py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-lime-400 mb-4 sm:mb-5">
            FITZONE
          </h2>

          <p className="text-gray-400 leading-6 sm:leading-7 text-sm sm:text-base">
            Elite performance equipment for athletes.
          </p>
        </div>

        {/* ECOSYSTEM */}
        <div>
          <h4 className="uppercase font-bold mb-4 sm:mb-5 text-sm sm:text-base">
            Ecosystem
          </h4>

          <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
            <li className="hover:text-white transition">Equipment</li>
            <li className="hover:text-white transition">Apparel</li>
            <li className="hover:text-white transition">Accessories</li>
            <li className="hover:text-white transition">Coaching</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="uppercase font-bold mb-4 sm:mb-5 text-sm sm:text-base">
            Support
          </h4>

          <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
            <li className="hover:text-white transition">Privacy Policy</li>
            <li className="hover:text-white transition">Terms Of Service</li>
            <li className="hover:text-white transition">Affiliates</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="uppercase font-bold mb-4 sm:mb-5 text-sm sm:text-base">
            Join The Elite
          </h4>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">

            <input
              type="text"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-white text-black outline-none text-sm sm:text-base"
            />

            <button className="bg-lime-500 text-black px-6 py-3 sm:py-0 font-bold uppercase text-sm sm:text-base hover:bg-lime-400 transition">
              JOIN
            </button>

          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 mt-10 sm:mt-16 pt-6 sm:pt-8 text-center text-gray-500 text-xs sm:text-sm px-4">
        © 2026 FITZONE PERFORMANCE
      </div>

    </footer>
  );
}