import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const location = useLocation();
  console.log('private location',location);
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div>
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }
  if(user){
    return children
  }
  return <Navigate state={{form: location?.pathname}} replace to={'/login'}></Navigate>
};

export default PrivateRoute;
