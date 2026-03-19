import React, { useState } from "react";
import { ShoppingCart, Search, User, X, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../public/logo.png";

const Header = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  const navItem =
    "relative after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300";

  return (
    <>
      <header className="w-full bg-white border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

          {/* LOGO */}
          <img src={logo} alt="logo" className="h-10" />

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-10 text-gray-700 font-medium text-[15px]">
            <NavLink to="/" className={({ isActive }) =>
              `${navItem} ${isActive ? "text-black after:w-full" : "hover:text-[#2364EB]"}`
            }>Home</NavLink>

            <NavLink to="/about" className={({ isActive }) =>
              `${navItem} ${isActive ? "text-black after:w-full" : "hover:text-[#2364EB]"}`
            }>About Us</NavLink>

            <NavLink to="/shop" className={({ isActive }) =>
              `${navItem} ${isActive ? "text-black after:w-full" : "hover:text-[#2364EB]"}`
            }>Shop</NavLink>

            <NavLink to="/customer-service" className={({ isActive }) =>
              `${navItem} ${isActive ? "text-black after:w-full" : "hover:text-[#2364EB]"}`
            }>Contact Us</NavLink>
          </nav>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-4 md:gap-6">

            <Search size={22} className="cursor-pointer" />

            <User size={22} className="cursor-pointer" onClick={() => setAuthOpen(true)} />

            <div className="relative cursor-pointer">
              <ShoppingCart size={22} />
              <span className="absolute -top-2 -right-2 text-[10px] bg-orange-500 text-white px-1 rounded-full">
                0
              </span>
            </div>

            {/* MOBILE MENU ICON */}
            <Menu
              size={22}
              className="md:hidden cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
            />
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex">
          <div className="bg-white w-3/4 max-w-xs h-full p-6 relative">
            <X
              className="absolute top-4 right-4 cursor-pointer text-gray-500"
              onClick={() => setMobileMenuOpen(false)}
            />
            <nav className="flex flex-col gap-4 mt-8">
              <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
              <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</NavLink>
              <NavLink to="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</NavLink>
              <NavLink to="/customer-service" onClick={() => setMobileMenuOpen(false)}>Contact Us</NavLink>
            </nav>
          </div>
          <div
            className="flex-1"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        </div>
      )}

      {/* AUTH MODAL */}
      {authOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] max-w-md rounded-xl shadow-lg relative">
            <X
              className="absolute top-4 right-4 cursor-pointer text-gray-500"
              onClick={() => setAuthOpen(false)}
            />
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab("login")}
                className={`flex-1 py-3 text-sm font-medium ${activeTab === "login" ? "border-b-2 border-black text-black" : "text-gray-400"}`}
              >
                🔒 Login
              </button>
              <button
                onClick={() => setActiveTab("register")}
                className={`flex-1 py-3 text-sm font-medium ${activeTab === "register" ? "border-b-2 border-black text-black" : "text-gray-400"}`}
              >
                👤 Register
              </button>
            </div>
            <div className="p-6 space-y-4">
              {activeTab === "register" && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="First Name" className="border-b py-2 outline-none focus:border-[#2364EB]" />
                    <input type="text" placeholder="Last Name" className="border-b py-2 outline-none focus:border-[#2364EB]" />
                  </div>
                  <input type="email" placeholder="Email" className="w-full border-b py-2 outline-none focus:border-[#2364EB]" />
                </>
              )}
              {activeTab === "login" && (
                <input type="text" placeholder="Username / Email" className="w-full border-b py-2 outline-none focus:border-[#2364EB]" />
              )}
              <input type="password" placeholder="Password" className="w-full border-b py-2 outline-none focus:border-[#2364EB]" />
              {activeTab === "register" && (
                <input type="password" placeholder="Confirm Password" className="w-full border-b py-2 outline-none focus:border-[#2364EB]" />
              )}
              {activeTab === "login" && (
                <div className="flex justify-between text-sm">
                  <span className="text-orange-500 cursor-pointer">Forgot password?</span>
                  <label className="flex items-center gap-1 text-gray-500">
                    <input type="checkbox" />
                    Remember me
                  </label>
                </div>
              )}
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md">
                {activeTab === "login" ? "Login" : "Register"}
              </button>
            </div>
          </div>
          <div className="absolute inset-0 -z-10" onClick={() => setAuthOpen(false)}></div>
        </div>
      )}
    </>
  );
};

export default Header;