import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import OurMenu from "../../Pages/OurMenu/OurMenu";
import OurShop from "../../Pages/OurShop/OurShop";
import SignIn from "../../Pages/SignIn/SignIn";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Dashboard from "../../Layout/Dashboard";
import Cart from "../../Pages/DashboardPages/Cart/Cart";
import AllUser from "../../Pages/DashboardPages/AllUser/AllUser";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/menu',
                element:<OurMenu></OurMenu>
            },
            {
                path: '/shop',
                element: <OurShop></OurShop>
            },
            {
                path: '/signIn',
                element:<SignIn></SignIn>
            },
            {
                path: '/signUp',
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
        
            // User api
            {
                path: "cart",
                element: <Cart></Cart>
            },

            // Admin Apis
            {
                path: "users",
                element:<AllUser></AllUser>
            }
        ]
    }
])

export default Router;