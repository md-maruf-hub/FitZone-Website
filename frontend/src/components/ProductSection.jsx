const products = [
  {
    name: "VULCAN OLYMPIC BAR",
    price: "$349",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "KINETIC RECOVERY KIT",
    price: "$85",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "TITAN KETTLEBELL",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "EXO-RACK ALPHA",
    price: "$899",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ProductSection() {
  return (
    <section className="bg-[#efefef] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-14">
        <h2 className="text-5xl font-black uppercase mb-14">
          Current
          <span className="text-lime-500"> Deployments</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-4"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-[250px] object-cover"
              />

              <div className="mt-5">
                <div className="flex justify-between items-start">
                  <h3 className="font-black text-lg uppercase">
                    {item.name}
                  </h3>

                  <span className="text-lime-600 font-bold">
                    {item.price}
                  </span>
                </div>

                <button className="w-full border py-3 mt-6 uppercase font-bold">
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}