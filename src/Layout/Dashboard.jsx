import { Link, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import LogOut from "../pages/SharedPages/SignOut/LogOut";
import { FaHome, FaOrcid, FaPaypal, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { LuUtensilsCrossed } from "react-icons/lu";
import { AiFillProduct } from "react-icons/ai";
import useAdmin from "../Hooks/useAdmin";
import { FaSection } from "react-icons/fa6";

const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      <div className="w-60 min-h-screen p-2 bg-base-300 ">
        <h1 className="text-3xl  font-bold text-center py-3">DocHouse</h1>
        <ul className="font-bold uppercase text-xl text-gray-500">
          {isAdmin ? (
            <div>
              <li className="flex gap-2 items-center ">
                <FaHome></FaHome>{" "}
                <Link to={"/dashboard/adminhome"}> AdminHome</Link>
              </li>

              <li className="flex gap-2 items-center">
                <FaUser></FaUser> {" "}
                <Link to={"/dashboard/allusers"}> User</Link>
              </li>
              <li className="flex gap-2 items-center">
                <FaUtensils></FaUtensils> {" "}
                <Link to={"/dashboard/addproduct"}> Add Product</Link>
              </li>
               <li className="flex gap-2 items-center">
                <AiFillProduct /> {" "}
                <Link to={"/dashboard/allproduct"}> All Products</Link>
              </li>
           
              <li className="flex gap-2 items-center">
                <LuUtensilsCrossed />{" "}
                <Link to={"/"}> Add Apointment</Link>
              </li>
               <li className="flex gap-2 items-center">
                <FaPaypal></FaPaypal>{" "}
                <Link to={"/dashboard/allpayment"}> All Payment</Link>
              </li>
            </div>
          ) : (
            <div>
              <li className="flex gap-2 items-center ">
                <FaHome></FaHome> <Link to={"/dashboard/userhome"}> Home</Link>
              </li>

              <li className="flex gap-2 items-center">
                <FaShoppingCart></FaShoppingCart>{" "}
                <Link to={"/dashboard/cart"}> Cart</Link>
              </li>
              <li className="flex gap-2 items-center">
                <FaOrcid></FaOrcid> <Link to={"/dashboard/paymenthistory"}> Payment-History</Link>
              </li>
              <li className="flex gap-2 items-center">
                <FaShoppingCart></FaShoppingCart> <Link to={"/dashboard/review"}> Review</Link>
              </li>
            </div>
          )}

          {/* fixed ul........... */}

          <div className="divider ">OR</div>

          <li className="flex gap-2 items-center">
            <FaHome></FaHome> <Link to={"/"}> Home</Link>
          </li>
           <li className="flex gap-2 items-center">
            <FaSection></FaSection> <Link to={"/service"}> Service</Link>
          </li>
        </ul>

        {/* user info and logout */}
        <div className="fixed bottom-0 p-2 ">
          <div className="flex gap-2 items-center">
            <img
              className="w-10 h-10 rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <p>
              {user?.displayName} <br />
               <span>
                {
                  user.role == 'admin'? 'admin' :  'user'
                }
                </span>
            </p>
          </div>
          <div>
            <LogOut></LogOut>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gray-300 px-3">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
