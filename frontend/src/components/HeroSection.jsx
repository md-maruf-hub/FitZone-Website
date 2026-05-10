export default function HeroSection() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 lg:px-14">
        <div className="max-w-2xl">
          <p className="uppercase tracking-[4px] text-lime-400 text-sm mb-4">
            Elite Performance Standards
          </p>

          <h1 className="text-5xl lg:text-7xl font-black uppercase text-white leading-none">
            Forged In The
            <span className="block text-lime-400">
              Iron Trenches
            </span>
          </h1>

          <p className="text-gray-300 mt-8 text-lg leading-8">
            Professional-grade equipment engineered for athletes.
          </p>

          <div className="flex gap-5 mt-10">
            <button className="bg-lime-400 text-black px-8 py-4 font-bold uppercase">
              Get Elite Equipment
            </button>

            <button className="border border-white text-white px-8 py-4 font-bold uppercase">
              View Catalog
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}