import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/Sidebar/Sidebar";
import Cart from "../Pages/DashboardPages/Cart/Cart";

const Dashboard = () => {

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