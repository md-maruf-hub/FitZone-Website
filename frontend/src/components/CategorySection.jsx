const categories = [
  {
    title: "DUMBBELLS",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "MACHINES",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "ACCESSORIES",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function CategorySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-14 sm:py-20 lg:py-24">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8 sm:mb-12">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-tight">
          Command The
          <span className="text-lime-500"> Floor</span>
        </h2>

        <p className="uppercase tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm text-gray-500">
          01 / Categories
        </p>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">

        {categories.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden h-[220px] sm:h-[320px] lg:h-[450px] group cursor-pointer"
          >

            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8">

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase">
                {item.title}
              </h3>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}