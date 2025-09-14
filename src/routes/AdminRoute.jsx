import React from 'react';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {user , loading} = useAuth();
    const [isAdmin , isAdminLoading] = useAdmin();

    if (loading || isAdminLoading) {
    return (
      <div className='text-5xl py-10 text-center'>
       <span className="loading loading-bars loading-lg"></span>
       <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  if(user && isAdmin){
    return children
  }
  return <Navigate state={{form: location?.pathname}} replace to={'/login'}></Navigate>
};

export default AdminRoute;