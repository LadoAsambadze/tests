import React, { useState } from "react";

export default function AddShoes() {
  const [form, setForm] = useState({
    size: "",
    brand: "",
    color: "",
    price: "",
    image: "",
  });

  function Update(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function SendForm() {
    const response = await fetch("http://localhost:3001/shoes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur mb-4">
            <span className="text-3xl">👟</span>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Add New Shoe
          </h1>
          <p className="text-zinc-400 mt-1 text-sm">
            Fill in the details below to add to inventory
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="flex flex-col gap-5">
            {/* Brand */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                Brand
              </label>
              <input
                name="brand"
                onChange={Update}
                placeholder="e.g. Nike, Adidas..."
                className="bg-white/10 border border-white/10 text-white placeholder-zinc-500 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
              />
            </div>

            {/* Color */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                Color
              </label>
              <input
                name="color"
                onChange={Update}
                placeholder="e.g. Midnight Black..."
                className="bg-white/10 border border-white/10 text-white placeholder-zinc-500 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
              />
            </div>

            {/* Size + Price */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                  Size
                </label>
                <input
                  name="size"
                  onChange={Update}
                  type="number"
                  placeholder="42"
                  className="bg-white/10 border border-white/10 text-white placeholder-zinc-500 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                  Price ($)
                </label>
                <input
                  name="price"
                  onChange={Update}
                  type="number"
                  placeholder="120"
                  className="bg-white/10 border border-white/10 text-white placeholder-zinc-500 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                />
              </div>
            </div>

            {/* Image URL */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                Image URL
              </label>
              <input
                name="image"
                onChange={Update}
                placeholder="https://..."
                className="bg-white/10 border border-white/10 text-white placeholder-zinc-500 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
              />
            </div>

            {/* Submit */}
            <button
              type="button"
              onClick={SendForm}
              className="mt-2 w-full bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold py-3.5 rounded-xl transition-all duration-150 shadow-lg shadow-indigo-500/20 text-sm tracking-wide"
            >
              Add to Inventory
            </button>
          </div>
        </div>

        <p className="text-center text-zinc-600 text-xs mt-6">
          Shoe Inventory Management System
        </p>
      </div>
    </div>
  );
}
