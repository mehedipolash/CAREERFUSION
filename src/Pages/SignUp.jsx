import { set } from "date-fns";
import { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {
  const { createUser,setUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // Reset previous state
    setSuccess(false);
    setPasswordError("");
    setNameError("");
    setEmailError("");
    setPhotoError("");

    let hasError = false;
    //name validation
    if (name.length < 5) {
      setNameError("Name must be at least 5 characters long.");
      hasError = true;
    }
    // email validation
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegExp.test(email)) {
      setEmailError("Please enter a valid email address.");
      hasError = true;
    }

    // photo URL validation
    const imgRegExp = /\.(jpeg|jpg|png|gif|webp|svg)$/i;
    if (!imgRegExp.test(photo)) {
      setPhotoError("Please enter a valid image URL.");
      hasError = true;
    }

    //pasdsword validation
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegExp.test(password)) {
      setPasswordError(
        "Use 1 uppercase, 1 lowercase, and at least 6 characters."
      );
      hasError = true;
    }
    if (hasError) {
      return;
    }

    // If success
    setSuccess(true);

    // Create user with email and password
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-400 rounded-3xl">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-4">
        <h3 className="text-center text-3xl font-bold mb-5">Register here!</h3>

        <div className="card-body p-0">
          <form onSubmit={handleSignUp} className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />
            {nameError && <p className="text-red-500 text-sm">{nameError}</p>}

            {/* Email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}

            {/* Photo */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
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
          {/* Success Message */}
          {success && (
            <p className="text-green-600 text-center">
              User has created Successfully
            </p>
          )}
          {/* Login with Google */}
          <button className="btn bg-white text-black border-[#e5e5e5] w-full mt-4">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path fill="#fff" d="m0 0H512V512H0"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            SignUp with Google
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
