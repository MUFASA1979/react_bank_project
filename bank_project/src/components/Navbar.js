import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <span className="font-semibold text-xl text-white">MOB</span>
            </Link>
          </div>
          <div className="block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/notes"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Transactions
              </NavLink>
              <NavLink
                to="/users"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Users
              </NavLink>

              {/* {user ? (
                <button
                  onClick={handleLogout}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              ) : ( */}
              <>
                <NavLink
                  to="/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Register
                </NavLink>
              </>
              {/* )} */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
