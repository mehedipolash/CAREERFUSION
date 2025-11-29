import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const SignIn = () => {
  const { signIn, googleSignUp, auth } = use(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        setSuccess(true);
        toast.success("Login successful!");

        navigate(location.state || "/");
      })
      .catch((error) => {
        setError(error);
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleSignUp()
      .then((result) => {
        toast.success("Logged in with Google!");
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    setError("");

    if (!email) {
      toast.error("Please enter your email first!");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Reset email sent! Check your inbox.");
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-400 rounded-3xl">
      <Helmet>
        <title>SignIn | CareerFusion</title>
      </Helmet>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-4">
        <h3 className="text-center text-3xl font-bold mb-5">Login now!</h3>

        <div className="card-body p-0">
          <form className="fieldset" onSubmit={handleSignIn}>
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              ref={emailRef}
              required
            />

            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <div onClick={handleForgetPassword}>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-neutral mt-4 w-full">
              Login
            </button>
          </form>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            className="btn bg-white text-black border-[#e5e5e5] w-full mt-4"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path fill="#fff" d="M0 0H512V512H0" />
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                />
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                />
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                />
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                />
              </g>
            </svg>
            Login with Google
          </button>

          <p className="mt-4 text-center">
            New to this site? Please{" "}
            <Link to="/auth/signup" className="text-sky-500 underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
