import { Link, NavLink } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { FaCartArrowDown } from "react-icons/fa";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
  const { name, user, logoutUser } = useAuth();
  const [cart] = useCart();
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        console.log("logout success");
        toast.success("logout success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const navlist = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <NavLink to={"/about"}>about</NavLink>
      </li>
      <li>
        <NavLink>Appoinment</NavLink>
      </li>
      <li>
        <NavLink to={"/service"}>Medicin&Service</NavLink>
      </li>
      <li>
      <Link to={'/dashboard/cart'}>
        <button className="btn btn-outline border-0 text-xl">
          <FaCartArrowDown></FaCartArrowDown>{" "}
          <div className="badge badge-sm badge-secondary">{cart.length}</div>
        </button>
      </Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-black/40 text-white font-bold max-w-11/12">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navlist}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">DocHouse({name})</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlist}</ul>
        </div>
        <div className="navbar-end gap-2">
          {user && user?.email ? (
            <div className="flex gap-3 items-center">
              <div className="flex md:flex-col items-center justify-center">
                <img
                  className="w-9 h-8 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
                <p>{user?.displayName}</p>
              </div>
              <button
                onClick={handleLogout}
                className="btn border-0 btn-outline border-b-2 btn-secondary "
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link to={"/login"} className="btn border-0 btn-outline ">
                Login
              </Link>
              <Link
                to={"/register"}
                className="btn border-0 btn-outline border-b-2 btn-secondary "
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
