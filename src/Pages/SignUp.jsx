import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const { createUser, setUser, updateUser, googleSignUp } = use(AuthContext);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // Reset previous state
    setNameError("");
    setEmailError("");
    setPhotoError("");
    setPasswordError("");

    let hasError = false;

    // Name validation
    if (name.length < 5) {
      setNameError("Name must be at least 5 characters long.");
      toast.error("Name must be at least 5 characters long.");
      hasError = true;
    }

    // Email validation
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegExp.test(email)) {
      setEmailError("Please enter a valid email address.");
      toast.error("Please enter a valid email address.");
      hasError = true;
    }

    // Photo URL validation
    const imgRegExp = /\.(jpeg|jpg|png|gif|webp|svg)$/i;
    if (!imgRegExp.test(photo)) {
      setPhotoError("Please enter a valid image URL.");
      toast.error("Please enter a valid image URL.");
      hasError = true;
    }

    // Password validation
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegExp.test(password)) {
      setPasswordError(
        "Use 1 uppercase, 1 lowercase, and at least 6 characters."
      );
      toast.error("Invalid password format.");
      hasError = true;
    }

    if (hasError) return;

    // Create user with email and password
    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Account created successfully!");
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Google SignUp
  const handleGoogleSignUp = () => {
    googleSignUp()
      .then((result) => {
        toast.success("Signed up with Google!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-400 rounded-3xl">
      <Helmet>
        <title>SignUp | CareerFusion</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-4">
        <h3 className="text-center text-3xl font-bold mb-5">Register here!</h3>

        <div className="card-body p-0">
          <form onSubmit={handleSignUp} className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input name="name" type="text" className="input" placeholder="Name" />
            {nameError && <p className="text-red-500 text-sm">{nameError}</p>}

            {/* Email */}
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

            {/* Photo */}
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
            />
            {photoError && <p className="text-red-500 text-sm">{photoError}</p>}

            {/* Password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}

            <button type="submit" className="btn btn-neutral mt-4 w-full">
              Register
            </button>
          </form>

          {/* Google Login */}
          <button
            onClick={handleGoogleSignUp}
            className="btn bg-white text-black border-[#e5e5e5] w-full mt-4"
          >
            Sign Up with Google
          </button>

          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link to="/auth/signin" className="text-sky-500 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
