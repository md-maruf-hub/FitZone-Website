import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  User,
  House,
  LogOut,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">

      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-black text-lime-700 tracking-tight"
        >
          FITZONE
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 uppercase text-sm font-bold tracking-widest">

          <Link to="/products" className="hover:text-lime-500 transition">
            Equipment
          </Link>

          <Link to="/" className="hover:text-lime-500 transition">
            Apparel
          </Link>

          <Link to="/" className="hover:text-lime-500 transition">
            Accessories
          </Link>

          <Link to="/" className="hover:text-lime-500 transition">
            Coaching
          </Link>

        </div>

        {/* Right Side (Desktop) */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">

          {user && (
            <div className="flex flex-col items-end">
              <p className="text-xs uppercase text-gray-400">
                ACTIVE_USER
              </p>
              <h2 className="font-black text-lime-600 uppercase text-sm">
                {user.name}
              </h2>
            </div>
          )}

          <Link to="/">
            <House className="w-5 h-5 hover:text-lime-500 transition" />
          </Link>

          <Link to="/cart">
            <ShoppingCart className="w-5 h-5 hover:text-lime-500 transition" />
          </Link>

          {user?.role === "admin" && (
            <Link to="/admin-dashboard">
              <ShieldCheck className="w-5 h-5 text-lime-600 hover:text-lime-500 transition" />
            </Link>
          )}

          {user && (
            <Link to="/dashboard">
              <User className="w-5 h-5 hover:text-lime-500 transition" />
            </Link>
          )}

          {user ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-xs font-bold uppercase"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="uppercase text-sm font-bold hover:text-lime-500"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-lime-400 hover:bg-lime-300 px-4 py-2 rounded-lg text-black text-sm font-black uppercase"
              >
                Register
              </Link>
            </div>
          )}

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-4 uppercase font-bold text-sm">

          <Link to="/products" onClick={() => setOpen(false)}>
            Equipment
          </Link>

          <Link to="/" onClick={() => setOpen(false)}>
            Apparel
          </Link>

          <Link to="/" onClick={() => setOpen(false)}>
            Accessories
          </Link>

          <Link to="/" onClick={() => setOpen(false)}>
            Coaching
          </Link>

          <hr />

          <div className="flex items-center gap-4">

            <Link to="/" onClick={() => setOpen(false)}>
              <House />
            </Link>

            <Link to="/cart" onClick={() => setOpen(false)}>
              <ShoppingCart />
            </Link>

            {user && (
              <Link to="/dashboard" onClick={() => setOpen(false)}>
                <User />
              </Link>
            )}

            {user?.role === "admin" && (
              <Link to="/admin-dashboard" onClick={() => setOpen(false)}>
                <ShieldCheck />
              </Link>
            )}

          </div>

          {user ? (
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-2 rounded-lg"
            >
              Logout
            </button>
          ) : (
            <div className="flex flex-col gap-2">
              <Link to="/login" onClick={() => setOpen(false)}>
                Login
              </Link>
              <Link to="/register" onClick={() => setOpen(false)}>
                Register
              </Link>
            </div>
          )}

        </div>
      )}

    </nav>
  );
};

export default Navbar;