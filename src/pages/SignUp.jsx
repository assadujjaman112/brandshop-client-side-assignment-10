import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { BsGoogle } from "react-icons/bs";

const SignUp = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="lg:w-1/3 mx-auto mt-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <h1 className="text-3xl font-bold text-center mt-5 mb-7">
            Sign Up Now!
          </h1>
          <form onSubmit={handleSignUp} className=" w-full card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-red-400 text-white hover:text-black">
                Sign Up
              </button>
            </div>
          </form>
          <div className="flex">
            <button
              onClick={handleGoogleSignIn}
              className="btn mb-5 w-1/3 mx-auto"
            >
              <BsGoogle></BsGoogle> Google login
            </button>
          </div>
          <h2 className="text-center mb-6">
            Already have an account?{" "}
            <Link to="/login" className="text-red-400">
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
