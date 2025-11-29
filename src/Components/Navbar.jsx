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

  // Default profile photo URL (you can use any default image)
  const defaultProfilePhoto =
    "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  return (
    <nav className="bg-base-200 shadow-md lg:px-4 py-3">
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
            <>
              <button
                onClick={handleSignOut}
                className="btn btn-primary mt-2 md:mt-0 md:ml-2 self-start sm:self-start"
              >
                Logout
              </button>

              {/* User photo - always show, use default if no photoURL */}
              <Link
                to="/my-profile"
                tabIndex={-1}
                className="mt-2 md:mt-0 md:ml-2 self-start sm:self-start"
              >
                <img
                  src={user.photoURL || defaultProfilePhoto}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                />
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/auth/signin"
                className="btn btn-primary mt-2 md:mt-0 md:ml-2 self-start sm:self-start"
              >
                SignIn
              </Link>
              <NavLink
                to="/auth/signup"
                className={({ isActive }) => (isActive ? "text-primary" : "")}
              >
                <button className="btn btn-primary mt-2 md:mt-0 md:ml-2 self-start sm:self-start">
                  SignUp
                </button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
