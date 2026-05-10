export default function BundleSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-14 py-28 grid lg:grid-cols-2 gap-16">
      <div>
        <p className="uppercase tracking-[4px] text-lime-500 mb-4">
          Optimized Logistics
        </p>

        <h2 className="text-6xl font-black uppercase leading-none">
          Elite Bundle
          <span className="block text-lime-500">
            Offers
          </span>
        </h2>

        <p className="text-gray-600 mt-8 leading-8">
          Complete training ecosystems pre-configured.
        </p>

        <div className="border-l-4 border-lime-500 bg-white p-10 mt-12">
          <h3 className="text-3xl font-black uppercase">
            Iron Basecamp Kit
          </h3>

          <ul className="mt-6 space-y-3 text-gray-600">
            <li>✔ Olympic Barbell System</li>
            <li>✔ 160LB Bumper Plates</li>
            <li>✔ Adjustable Bench</li>
          </ul>

          <div className="flex items-center gap-4 mt-8">
            <span className="text-5xl font-black">
              $1,499
            </span>

            <span className="line-through text-gray-400">
              $1,860
            </span>
          </div>

          <button className="bg-lime-500 mt-8 px-10 py-4 font-black uppercase">
            Deploy Bundle
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop"
          className="h-[250px] w-full object-cover"
        />

        <img
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop"
          className="h-[250px] w-full object-cover"
        />

        <img
          src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1200&auto=format&fit=crop"
          className="h-[250px] w-full object-cover"
        />

        <img
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop"
          className="h-[250px] w-full object-cover"
        />
      </div>
    </section>
  );
}