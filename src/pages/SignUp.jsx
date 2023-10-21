import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SignUp = () => {
  const [regError, setRegError] = useState("");
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setRegError("");

    if (password.length < 6) {
      setRegError("Password must have at least 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegError("Password must have at least one uppercase character");
      return;
    } else if (!/[^a-zA-Z0-9]/.test(password)) {
      setRegError("Password must have one special character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setRegError(regError);
      });
  };

  return (
    <div>
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
              {regError && <p className="text-red-600">{regError}</p>}
              <div className="form-control mt-6">
                <button className="btn bg-red-400 text-white hover:text-black">
                  Sign Up
                </button>
              </div>
            </form>

            <h2 className="text-center mb-6">
              Already have an account?{" "}
              <Link to="/login" className="text-red-400">
                Login
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
