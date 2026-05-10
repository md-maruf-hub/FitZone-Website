export default function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-14 grid md:grid-cols-4 gap-12">
        <div>
          <h2 className="text-3xl font-black text-lime-400 mb-5">
            FITZONE
          </h2>

          <p className="text-gray-400 leading-7">
            Elite performance equipment for athletes.
          </p>
        </div>

        <div>
          <h4 className="uppercase font-bold mb-5">
            Ecosystem
          </h4>

          <ul className="space-y-3 text-gray-400">
            <li>Equipment</li>
            <li>Apparel</li>
            <li>Accessories</li>
            <li>Coaching</li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase font-bold mb-5">
            Support
          </h4>

          <ul className="space-y-3 text-gray-400">
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
            <li>Affiliates</li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase font-bold mb-5">
            Join The Elite
          </h4>

          <div className="flex">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-white text-black outline-none"
            />

            <button className="bg-lime-500 text-black px-6 font-bold">
              JOIN
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
        © 2026 FITZONE PERFORMANCE
      </div>
    </footer>
  );
}