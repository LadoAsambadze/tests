import { useState } from "react";

export default function Shoes() {
  const [data, setData] = useState([]);

  async function GetData() {
    const res = await fetch("http://localhost:3001/shoes");
    const json = await res.json();
    setData(json);
  }

  async function SendData() {
    await fetch("http://localhost:3001/shoes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        size: "22",
        brand: "Vike",
        color: "Red",
        price: "19.99",
        img: "",
      }),
    });
    GetData();
  }

  async function DeleteData(id) {
    await fetch(`http://localhost:3001/shoes/${id}`, { method: "DELETE" });
    setData((prev) => prev.filter((shoe) => shoe.id !== id));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="text-4xl">👟</span> Shoe Inventory
            </h1>
            <p className="text-zinc-400 text-sm mt-1">
              {data.length} items in stock
            </p>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={GetData}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition"
            >
              🔄 Load
            </button>
            <button
              type="button"
              onClick={SendData}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition shadow-lg shadow-indigo-500/20"
            >
              + Add Shoe
            </button>
          </div>
        </div>

        {/* Empty state */}
        {data.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 text-zinc-500">
            <span className="text-6xl mb-4">👟</span>
            <p className="text-lg font-medium text-zinc-400">
              No shoes loaded yet
            </p>
            <p className="text-sm mt-1">Click "Load" to fetch inventory</p>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {data.map((shoe) => (
            <div
              key={shoe.id}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/40 hover:bg-white/10 transition group"
            >
              {/* Image area */}
              <div className="h-44 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center">
                <img
                  src={shoe.image}
                  alt={shoe.brand}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="text-white font-bold text-lg leading-tight">
                      {shoe.brand}
                    </h2>
                    <p className="text-zinc-400 text-sm mt-0.5">{shoe.color}</p>
                  </div>
                  <span className="bg-indigo-500/20 text-indigo-300 text-xs font-bold px-2.5 py-1 rounded-lg">
                    ${shoe.price}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-500 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    Size {shoe.size}
                  </span>
                  <button
                    type="button"
                    onClick={() => DeleteData(shoe.id)}
                    className="text-xs text-red-400 hover:text-red-300 hover:bg-red-500/10 px-3 py-1 rounded-full transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
