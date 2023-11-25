import { Helmet } from "react-helmet-async";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Shared/Sidebar/Sidebar";
import Cart from "../Pages/DashboardPages/Cart/Cart";
import { useEffect } from "react";

const Dashboard = () => {
    const pathname= useLocation()
    useEffect(() => {
        window.scrollTo(0,0)
    }, [pathname])

    return (
        <section>
            <Helmet>
                <title>Bistro Boss || Dashboard</title>
            </Helmet>

            <div className="flex">
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
            
            
        </section>
    );
};

export default Dashboard;