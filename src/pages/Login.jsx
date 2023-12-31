import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { BsGoogle } from "react-icons/bs";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [logError, setLogError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setLogError(error.message)
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="lg:w-1/3 mx-auto lg:mt-6">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <h1 className="text-3xl font-bold text-center mt-5 mb-7">
              Login Now!
            </h1>
            <form onSubmit={handleLogin} className=" w-full card-body">
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
              {
                logError && <p className="text-red-400">{logError}</p>
              }
              <div className="form-control mt-6">
                <button className="btn bg-red-400 text-white hover:text-black">
                  Login
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
              Do not have an account?{" "}
              <Link to="/signup" className="text-red-400">
                Sign Up
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
