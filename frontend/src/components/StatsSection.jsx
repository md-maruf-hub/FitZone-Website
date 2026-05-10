export default function StatsSection() {
  return (
    <section className="border-y border-lime-500 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-14 grid md:grid-cols-4 gap-10 text-center">
        <div>
          <h3 className="text-5xl font-black text-lime-500">
            99.8%
          </h3>

          <p className="uppercase tracking-[3px] text-gray-500 mt-4">
            Steel Purity
          </p>
        </div>

        <div>
          <h3 className="text-5xl font-black text-lime-500">
            12K
          </h3>

          <p className="uppercase tracking-[3px] text-gray-500 mt-4">
            Athletes Equipped
          </p>
        </div>

        <div>
          <h3 className="text-5xl font-black text-lime-500">
            Lifetime
          </h3>

          <p className="uppercase tracking-[3px] text-gray-500 mt-4">
            Warranty
          </p>
        </div>

        <div>
          <h3 className="text-5xl font-black text-lime-500">
            ISO-900
          </h3>

          <p className="uppercase tracking-[3px] text-gray-500 mt-4">
            Certified
          </p>
        </div>
      </div>
    </section>
  );
}