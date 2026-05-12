export default function HeroSection() {
  return (
    <section
      className="relative h-[70vh] sm:h-[80vh] lg:h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop')",
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-14">

        <div className="max-w-xl sm:max-w-2xl">

          <p className="uppercase tracking-[3px] sm:tracking-[4px] text-lime-400 text-xs sm:text-sm mb-3 sm:mb-4">
            Elite Performance Standards
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase text-white leading-tight sm:leading-none">
            Forged In The
            <span className="block text-lime-400">
              Iron Trenches
            </span>
          </h1>

          <p className="text-gray-300 mt-5 sm:mt-8 text-sm sm:text-lg leading-6 sm:leading-8">
            Professional-grade equipment engineered for athletes.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-6 sm:mt-10">

            <button className="bg-lime-400 text-black px-6 sm:px-8 py-3 sm:py-4 font-bold uppercase text-sm sm:text-base hover:bg-lime-300 transition">
              Get Elite Equipment
            </button>

            <button className="border border-white text-white px-6 sm:px-8 py-3 sm:py-4 font-bold uppercase text-sm sm:text-base hover:bg-white hover:text-black transition">
              View Catalog
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}