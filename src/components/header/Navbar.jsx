import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo_transparent.png";
const Navbar = () => {
  return (
    <div className="w-4/5 mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <div>
          <img className="w-28 h-16 mt-5" src={logo} alt="" />
        </div>
        <h1 className="text-3xl font-bold">GadgetGrove</h1>
      </div>
      <div>
        <ul className="flex gap-3">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-red-400 px-2 rounded-lg py-1 text-white"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-red-400 px-2 rounded-lg py-1 text-white"
                  : ""
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Link to="/login"><button className="btn">Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
