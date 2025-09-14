import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiousSecure from './useAxiousSecure';

const useAdmin = () => {
    const {user} = useAuth();
    const axiousSecure = useAxiousSecure();
    const {data: isAdmin , isPending:isAdminLoading} = useQuery({
        queryKey: ['isAdmin' , user?.email],

        queryFn: async()=>{
            const res = await axiousSecure.get(`/users/admin/${user?.email}`);
            console.log('addmin' , res.data);
            return res.data?.admin;

        }
    })
    return [isAdmin,isAdminLoading]
};

export default useAdmin;