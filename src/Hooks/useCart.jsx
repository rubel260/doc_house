import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiousSecure from "./useAxiousSecure";

const useCart = () => {
    const {user} = useAuth();
    const axiousSecure = useAxiousSecure();
    const {data:cart=[] , refetch} = useQuery({
        queryKey:['cart' , user?.email],
        queryFn: async()=>{
            const res = await axiousSecure.get(`/cart?email=${user?.email}`)
            return res.data
        }
    })
    return [cart , refetch]
};

export default useCart;