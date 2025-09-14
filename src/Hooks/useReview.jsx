import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiousPublic from './useAxiousPublic';

const useReview = () => {
    const axiousPublic = useAxiousPublic();
   const {data: reviews=[] } = useQuery({
    queryKey: ['review'],
    queryFn: async()=>{
        const res = await axiousPublic.get('/reviews')
        return res.data
    }
   }) 
   return [reviews]
};

export default useReview;