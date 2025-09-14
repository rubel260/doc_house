import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiousPublic from './useAxiousPublic';

const useDoctor = () => {
    const axiousPublic = useAxiousPublic();
       const {data: doctors=[] } = useQuery({
    queryKey: ['doctors'],
    queryFn: async()=>{
        const res = await axiousPublic.get('/doctor');
        return res.data
    }
   }) 
   return [doctors]
};

export default useDoctor;