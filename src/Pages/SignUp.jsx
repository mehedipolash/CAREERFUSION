import { Link } from "react-router";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-4">
        <h3 className="text-center text-3xl font-bold mb-5">Register here!</h3>

        <div className="card-body p-0">
          <form className="fieldset">
            <label className="label">Name</label>
            <input name="name" type="text" className="input" placeholder="Name" />

            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />

            <button className="btn btn-neutral mt-4 w-full">Register</button>
          </form>

          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link to="/signin" className="text-sky-500 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
