import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
const Navbar = () => {
  const [mode, setMode] = useState("light");
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  const handleMode = () => {
    const html = document.documentElement;

    if (mode === "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  };

  useEffect(() => {
    const currentMode = localStorage.getItem("mode") || "light";
    document.documentElement.classList.add(currentMode);
    setMode(currentMode);
  }, []);
  return (
    <div className="w-4/5 mx-auto lg:flex items-center justify-between my-2 dark:text-white py-5 mt-0">
      <div className="flex items-center justify-center gap-5">
        <div className="">
          <img className="w-12 h-12  dark:text-white" src={logo} alt="" />
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
              to="/myCart"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "bg-red-400 px-2 rounded-lg py-1 text-white"
                  : ""
              }
            >
              My Cart
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
        {user && (
          <div className="flex gap-5 items-center">
            <img className="w-14 rounded-full" src={user.photoURL} alt="" />
            <h1>{user.displayName}</h1>
          </div>
        )}
      </div>
      <div className=" flex justify-between my-5 lg:my-0 ">
        <button onClick={handleMode} className="w-16">
          {mode === "light" ? (
            <BsFillMoonFill className="text-3xl"></BsFillMoonFill>
          ) : (
            <BsFillSunFill className="text-3xl"></BsFillSunFill>
          )}
        </button>
        {user ? (
          <Link>
            <button
              onClick={handleSignOut}
              className="btn bg-red-400 text-white hover:text-black w-full"
            >
              log out
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button className="btn bg-red-400 text-white hover:text-black w-full">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
