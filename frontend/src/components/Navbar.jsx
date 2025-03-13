import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "./../assets/assets";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  // const { setShowSearch, getCartCount } = useContext(ShopContext);

  // ----- Logout Backend Integration Starts Here -----
  const {
    setShowSearch,
    getCartCount,
    token,
    setToken,
    navigate,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  // ----- Logout Backend Integration Ends Here -----

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} alt="logo" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to={"/"} className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to={"/collection"}
          className="flex flex-col items-center gap-1"
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/about"} className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/contact"} className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        {/* <img src="" className="w-5 cursor-pointer" alt="search-bar" /> */}
        <i
          onClick={() => setShowSearch(true)}
          className="ri-search-line cursor-pointer text-2xl"
        ></i>

        <div className="group relative">
          {/* <img
            src={assets.profile_icon}
            onClick={() => (token ? null : navigate("/login"))}
            className="w-5 cursor-pointer"
            alt="person-icon"
          /> */}
          {/* <Link to="/login">
            <i className="ri-user-line w-5 cursor-pointer text-2xl"></i>
            </Link> */}

          {/* ----- Backend Integration Start here ----- */}
          <i
            onClick={() => (token ? null : navigate("/login"))}
            className="ri-user-line w-5 cursor-pointer text-2xl"
          ></i>

          {/* Dropdown Menu */}
          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                {/* <p className="cursor-pointer hover:text-black">Logout</p> */}
                {/* ----- Logout Backend Integration ----- */}
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
          {/* ----- Backend Integration Ends here ----- */}
        </div>
        <Link to={"/cart"} className="relative">
          {/* <img src="" alt="cart-icon" /> */}
          <i className="ri-handbag-line text-2xl"></i>
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        {/* <img
          onClick={() => setVisible(true)}
          src=""
          className="w-5 cursor-pointer sm:hidden"
          alt="menu-icon"
          /> */}

        <i
          onClick={() => setVisible(true)}
          className="ri-menu-2-line text-2xl cursor-pointer sm:hidden"
        ></i>
      </div>

      {/* Sidebar menu for small screen */}
      <div
        className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            {/* <img src="" className="h-4 rotate-180" alt="dropdown-icon" /> */}
            <i className="ri-arrow-left-s-line text-xl"></i>
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
