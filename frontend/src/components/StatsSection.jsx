export default function StatsSection() {
  return (
    <section className="border-y border-lime-500 py-12 sm:py-16 lg:py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 text-center">

        {/* ITEM 1 */}
        <div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-lime-500">
            99.8%
          </h3>
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-gray-500 mt-3 sm:mt-4 text-xs sm:text-sm">
            Steel Purity
          </p>
        </div>

        {/* ITEM 2 */}
        <div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-lime-500">
            12K
          </h3>
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-gray-500 mt-3 sm:mt-4 text-xs sm:text-sm">
            Athletes Equipped
          </p>
        </div>

        {/* ITEM 3 */}
        <div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-lime-500">
            Lifetime
          </h3>
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-gray-500 mt-3 sm:mt-4 text-xs sm:text-sm">
            Warranty
          </p>
        </div>

        {/* ITEM 4 */}
        <div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-lime-500">
            ISO-900
          </h3>
          <p className="uppercase tracking-[2px] sm:tracking-[3px] text-gray-500 mt-3 sm:mt-4 text-xs sm:text-sm">
            Certified
          </p>
        </div>

      </div>

    </section>
  );
}