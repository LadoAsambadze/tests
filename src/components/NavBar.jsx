import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* ლოგო / ბრენდის სახელი */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-slate-800 tracking-wide"
            >
              Snooze<span className="text-blue-500">Lab</span>
            </Link>
          </div>

          {/* ნავიგაციის ლინკები */}
          <div className="hidden md:flex space-x-8 font-medium">
            <Link
              to="/"
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
            >
              მთავარი
            </Link>
            <Link
              to="/products"
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
            >
              პროდუქცია
            </Link>
            <Link
              to="/about"
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
            >
              ჩვენს შესახებ
            </Link>
            <Link
              to="/contact"
              className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
            >
              კონტაქტი
            </Link>
          </div>

          {/* მარჯვენა მხარე: კალათა ან მოქმედების ღილაკი */}
          <div className="flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 shadow-sm transition-all duration-200 transform hover:-translate-y-0.5">
              კონსულტაცია
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
