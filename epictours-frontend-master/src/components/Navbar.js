import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "./AuthContext";

function Navbar() {
  const { logout } = useContext(AuthContext);

  const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;

  const triggerLogout = () => {
    logout();
  };

  return (
<div className="bg-gradient-to-r from-dark-gray-300 via-purple-300 to-orange-300 flex items-center justify-between px-6 py-2">
  <div className="text-left">
    <span className="font-bold text-black text-3xl flex-shrink-0">
      <FontAwesomeIcon icon={faLocationDot} className="text-4xl" />
      <span className="ml-4">Fine TOURS</span>
    </span>
  </div>

  <div className="flex items-center">
    <input type="checkbox" id="menu-toggle" className="hidden" />

    <label htmlFor="menu-toggle" className="block cursor-pointer ml-4 lg:hidden">
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-black">
        <path
          fillRule="evenodd"
          d="M3 6.75h18M3 12h18M3 17.25h18"
        ></path>
      </svg>
    </label>

    <nav className="hidden lg:flex lg:items-center">
      <Link
        to="/"
        className="no-underline px-3 py-2 rounded-md text-sm font-bold text-black hover:bg-gray-500 hover:text-white"
      >
        HOME
      </Link>
      <Link
        to="/about"
        className="no-underline ml-4 px-3 py-2 rounded-md text-sm font-bold text-black hover:bg-purple-500 hover:text-white"
      >
        ABOUT
      </Link>
      <Link
        to="/contactus"
        className="no-underline ml-4 px-3 py-2 rounded-md text-sm font-bold text-black hover:bg-purple-500 hover:text-white"
      >
        CONTACTS
      </Link>

      {isLoggedIn ? (
        <Link onClick={triggerLogout}>
          <button className="ml-4 px-10 py-2 rounded-md text-sm font-bold text-black hover:bg-gray-500 hover:text-white">
            Logout
          </button>
        </Link>
      ) : (
        <>
          <Link
            to="/login"
            className="no-underline ml-4 px-10 py-2 rounded-md text-xs font-bold text-black hover:bg-purple-500 hover:text-white"
          >
            LOGIN
          </Link>
          <Link
            to="/signup"
            className="no-underline ml-4 px-3 py-2 rounded-md text-xs font-bold text-black hover:bg-purple-500 hover:text-white"
          >
            SIGN UP
          </Link>
        </>
      )}
    </nav>
  </div>
</div>

  );
}

export default Navbar;
