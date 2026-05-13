import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  const [state, setstate] = useState({ username: "", password: "" });

  async function ServerSignin() {
    const response = await fetch("http://localhost:3001/users");

    const data = await response.json();

    const user = data.find(
      (item) =>
        item.username === state.username && item.password === state.password,
    );

    if (user) {
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  }

  function Update(event) {
    setstate({ ...state, [event.target.name]: event.target.value });
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6 relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute w-125 h-125 bg-blue-500/20 blur-3xl rounded-full -top-25 -left-25"></div>

      <div className="absolute w-100 h-100 bg-purple-500/20 blur-3xl rounded-full -bottom-25 -right-25"></div>

      {/* CARD */}
      <div className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8">
        {/* TITLE */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-3">Welcome Back</h2>

          <p className="text-gray-400">Sign in to continue your journey</p>
        </div>

        {/* INPUTS */}
        <div className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-2">Username</label>

            <input
              name="username"
              onChange={Update}
              placeholder="Enter your username"
              type="text"
              className="w-full bg-gray-900/70 border border-gray-700 text-white px-4 py-3 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">Password</label>

            <input
              name="password"
              onChange={Update}
              placeholder="••••••••"
              type="password"
              className="w-full bg-gray-900/70 border border-gray-700 text-white px-4 py-3 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
            />
          </div>

          {/* FORGOT */}
          <div className="flex justify-end">
            <button className="text-sm text-blue-400 hover:text-blue-300 transition">
              Forgot Password?
            </button>
          </div>

          {/* BUTTON */}
          <button
            onClick={ServerSignin}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-lg shadow-blue-500/20"
          >
            Sign In
          </button>
        </div>

        {/* FOOTER */}
        <p className="text-center text-gray-400 mt-8 text-sm">
          Already have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-400 hover:text-blue-300 font-bold transition"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
