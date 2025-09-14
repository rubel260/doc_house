import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "./useAxiousSecure";

const useUsers = () => {
    const axiousSecure = useAxiousSecure();
    const {data: users=[] , refetch}= useQuery({
        queryKey:['users'],
        queryFn: async()=>{
            const res = await axiousSecure.get('/users');
            return res.data
        }
    })
    return [users , refetch]
};

export default useUsers;



//  , {
//                 headers: {
//                     authorization: `bearer ${localStorage.getItem('access-token')}`
//                 }
//             }