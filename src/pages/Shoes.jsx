export default function Shoes() {
  const data = [
    { size: 47, brand: "Nike", color: "Gray", price: "49.99", img: "" },
    { size: 48, brand: "Adidas", color: "Yellow", price: "49.99", img: "" },
    { size: 48, brand: "AZDIADI", color: "Yellow", price: "49.99", img: "" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-[320px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <img
            className="w-full h-56 object-cover"
            src="/image.png"
            alt="Nike shoes"
          />

          <div className="p-5">
            <h2 className="text-2xl font-bold mb-3">Nike Shoes</h2>

            <div className="flex flex-col gap-2 text-gray-600">
              <p>
                <span className="font-semibold text-black">Brand:</span> Nike
              </p>

              <p>
                <span className="font-semibold text-black">Color:</span> Gray
              </p>

              <p>
                <span className="font-semibold text-black">Size:</span> 47
              </p>
            </div>

            <div className="flex justify-between items-center mt-5">
              <span className="text-2xl font-bold text-green-600">$1000</span>

              <button className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-80 transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
