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
    <section className="max-w-7xl mx-auto px-6 lg:px-14 py-24">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-5xl font-black uppercase">
          Command The
          <span className="text-lime-500"> Floor</span>
        </h2>

        <p className="uppercase tracking-[3px] text-sm text-gray-500">
          01 / Categories
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden h-[450px] group"
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-8 left-8">
              <h3 className="text-4xl font-black text-white uppercase">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}