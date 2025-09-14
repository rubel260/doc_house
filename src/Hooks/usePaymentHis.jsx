import React from 'react';
import useAxiousSecure from './useAxiousSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const usePaymentHis = () => {
    const {user} = useAuth();
    const axiousSecure = useAxiousSecure();
    const {data: payment=[] , refetch} = useQuery({
        queryKey: ['payment' , user?.email],
        queryFn: async()=>{
            const res = await axiousSecure.get(`/paymenthistory?email=${user?.email}`)
            return res.data
        }
    })
    return [payment , refetch]
};

export default usePaymentHis; 