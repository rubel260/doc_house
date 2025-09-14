import { useQuery } from '@tanstack/react-query';
import useAxiousPublic from './useAxiousPublic';

const useMedicine = () => {
    const axiousPublic = useAxiousPublic();
    const {data: medicine=[] , refetch}= useQuery({
        queryKey: ['medicine'],
        queryFn: async()=>{
            const res = await axiousPublic.get('/medicine');
            return res.data;
        }
    })
    return [ medicine ,refetch ]
};

export default useMedicine;