import { Link } from "react-router-dom";
import {
  ShoppingCart,
  User,
  House,
  LogOut,
  ShieldCheck,
} from "lucide-react";

const Navbar = () => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    window.location.href = "/";
  };

  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-white border-b border-gray-200 sticky top-0 z-50">

      {/* Logo */}
      <Link
        to="/"
        className="text-3xl font-black text-lime-700 tracking-tight"
      >
        FITZONE
      </Link>

      {/* Menu */}
      <div className="hidden md:flex items-center gap-10 uppercase text-sm font-bold tracking-widest">

        <Link
          to="/products"
          className="hover:text-lime-500 transition-all duration-300"
        >
          Equipment
        </Link>

        <Link
          to="/"
          className="hover:text-lime-500 transition-all duration-300"
        >
          Apparel
        </Link>

        <Link
          to="/"
          className="hover:text-lime-500 transition-all duration-300"
        >
          Accessories
        </Link>

        <Link
          to="/"
          className="hover:text-lime-500 transition-all duration-300"
        >
          Coaching
        </Link>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        {/* Username */}
        {
          user && (
            <div className="hidden md:flex flex-col items-end">

              <p className="text-xs uppercase text-gray-400">
                ACTIVE_USER
              </p>

              <h2 className="font-black text-lime-600 uppercase text-sm">
                {user.name}
              </h2>

            </div>
          )
        }

        {/* Home */}
        <Link to="/">
          <House className="w-5 h-5 hover:text-lime-500 transition-all duration-300" />
        </Link>

        {/* Cart */}
        <Link to="/cart">
          <ShoppingCart className="w-5 h-5 hover:text-lime-500 cursor-pointer transition-all duration-300" />
        </Link>

        {/* Admin Dashboard */}
        {
          user?.role === "admin" && (
            <Link to="/admin-dashboard">

              <ShieldCheck className="w-5 h-5 text-lime-600 hover:text-lime-500 transition-all duration-300" />

            </Link>
          )
        }

        {/* User Dashboard */}
        {
          user && (
            <Link to="/dashboard">

              <User className="w-5 h-5 hover:text-lime-500 transition-all duration-300" />

            </Link>
          )
        }

        {/* Logout */}
        {
          user ? (

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-4 py-2 rounded-lg text-sm font-bold uppercase"
            >
              <LogOut className="w-4 h-4" />

              Logout
            </button>

          ) : (

            <div className="flex items-center gap-4">

              <Link
                to="/login"
                className="uppercase text-sm font-bold hover:text-lime-500 transition-all duration-300"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-lime-400 hover:bg-lime-300 transition-all duration-300 px-5 py-2 rounded-lg text-black text-sm font-black uppercase"
              >
                Register
              </Link>

            </div>
          )
        }

      </div>
    </nav>
  );
};

export default Navbar;