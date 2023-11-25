import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useAuth } from "../Componets/AuthProvider/AuthProvider";

const useCart = () => {
    // tanstack Query
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const {  refetch,data: cart = [] } = useQuery({
        queryKey: ['carts'],
        queryFn: async () => {
            const result = await axiosSecure.get(`/get/carts?email=${user.email}`)
            return result.data;
        }
    })

    return [cart , refetch]
};

export default useCart;