import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading]=useState(true)

    const {  refetch,data: menu = [] } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const result = await axiosSecure.get(`/get/all/menu`)
            setLoading(false);
            return result.data;
        }
    })

    return [menu , loading ,refetch]
};

export default useMenu;