import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        alert("Logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="bg-base-200 shadow-md lg:px-4 py-3">
      <p className="text-center">{user ? user.email : "user nai"}</p>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-accent">CareerFusion</div>

        {/* Menu (desktop + mobile using same div) */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-4 text-accent font-medium">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/other/about"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/other/contactus"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            Contact
          </NavLink>

          {user ? (
            <button
              onClick={handleSignOut}
              className="btn btn-primary  mt-2 md:mt-0"
            >
              LogOut
            </button>
          ) : (
            <Link
              to="/auth/signin"
              className="btn btn-primary mt-2 md:mt-0"
            >
              SignIn
            </Link>
          )}

          <NavLink
            to="/auth/signup"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            <button className="btn btn-primary mt-2 md:mt-0">SignUp</button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
