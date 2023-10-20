import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo_transparent.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleSignOut = ()=> {
    logOut()
    .then()
    .catch()
  }
  return (
    <div className="w-4/5 mx-auto lg:flex items-center justify-between">
      <div className="flex items-center justify-center">
        <div>
          <img className="w-28 h-16 mt-5" src={logo} alt="" />
        </div>
        <h1 className="text-3xl font-bold">GadgetGrove</h1>
      </div>
      <div>
        <ul className="flex gap-3 justify-center">
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
              to="/addProduct"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-red-400 px-2 rounded-lg py-1 text-white"
                  : ""
              }
            >
              Add Product
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
      <div className="my-5 lg:my-0 ">
        {
          user? <Link><button onClick={handleSignOut} className="btn bg-red-400 text-white hover:text-black w-full">log out</button></Link> :
          <Link to="/login"><button className="btn bg-red-400 text-white hover:text-black w-full">Login</button></Link> 
        }
      </div>
    </div>
  );
};

export default Navbar;
