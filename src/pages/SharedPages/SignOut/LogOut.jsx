import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import toast from 'react-hot-toast';
import { FaSignOutAlt } from 'react-icons/fa';

const LogOut = () => {
     const { name, user, logoutUser } = useAuth();
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
    return (
        <div>
              <button
                onClick={handleLogout}
                className="btn border-0 btn-outline border-b-2 btn-neutral w-full font-bold text-xl "
              >
                <FaSignOutAlt />
                Logout
              </button>
        </div>
    );
};

export default LogOut;