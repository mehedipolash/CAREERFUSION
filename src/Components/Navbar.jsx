import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-base-200 shadow-md lg:px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-accent">CareerFusion</div>

        {/* Menu */}
        <div className="hidden md:flex gap-6 text-accent font-medium">
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
          <NavLink
            to="/auth/signin"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            SignIn
          </NavLink>
          <NavLink
            to="/auth/signup"
            className={({ isActive }) => (isActive ? "text-primary" : "")}
          >
            SignUp
          </NavLink>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex flex-col gap-2 text-accent font-medium">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/other/about">About</NavLink>
          <NavLink to="/other/contactus">Contact</NavLink>
          <NavLink to="/auth/signin">SignIn</NavLink>
          <NavLink to="/auth/signup">SignUp</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
