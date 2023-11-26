import { useState, useEffect } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { FaHome, FaBook, FaShoppingBag,FaUsers } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { MdMenu, MdEmail ,MdRateReview } from "react-icons/md";
import { GrMoney } from "react-icons/gr";
import { FaCartPlus } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { CgMenuGridO } from "react-icons/cg";

const Sidebar = () => {
    const [open, setOpen] = useState(window.innerWidth >= 1024);

    const isAdmin = true;

    const handleOpen = () => {
        if (window.innerWidth < 1024) {
            setOpen(!open);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setOpen(window.innerWidth >= 1024);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="">
            <button onClick={handleOpen} className="text-3xl text-[#D1A054] fixed top-2 left-2">
                <RiMenu2Fill />
            </button>

            <div className="w-72 h-screen bg-black hidden lg:block">

            </div>

            <aside
                onClick={handleOpen}
                className={`w-72 fixed top-0 left-0  bg-[#D1A054] border-r-4  border-[#7e561b] pt-4 h-screen transition-transform duration-700 ease-in-out ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className=" flex flex-col mb-8 items-center">
                    <h1 className="text-2xl font-bold ">BISTRO BOSS</h1>
                    <h2 className="text-base font-semibold">Restaurant</h2>
                </div>

                <section className="flex flex-col gap-4">
                    {
                        isAdmin ? 
                        <>
                                <NavLink to='adminHome' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-white" : "mb-2"}>
                                    <div className="flex gap-2 w-56 mx-auto">
                                        <span className="text-2xl"><FaHome /></span>
                                        <h1 className="text-base  uppercase">Admin Home</h1>
                                    </div>
                                </NavLink>

                                <NavLink to='addItems' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-white" : "mb-2"}>
                                    <div className="flex gap-2 w-56 mx-auto">
                                        <span className="text-2xl"><ImSpoonKnife /></span>
                                        <h1 className="text-base  uppercase">Add items</h1>
                                    </div>
                                </NavLink>

                                <NavLink to='manageItems' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-white" : "mb-2"}>
                                    <div className="flex gap-2 w-56 mx-auto">
                                        <span className="text-2xl"><CgMenuGridO /></span>
                                        <h1 className="text-base  uppercase">Manage items</h1>
                                    </div>
                                </NavLink>

                                <NavLink to='manageBookings' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-white" : "mb-2"}>
                                    <div className="flex gap-2 w-56 mx-auto">
                                        <span className="text-2xl"><FaBook></FaBook></span>
                                        <h1 className="text-base  uppercase">Manage Bookings</h1>
                                    </div>
                                </NavLink>

                                <NavLink to='users' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-white" : "mb-2"}>
                                    <div className="flex gap-2 w-56 mx-auto">
                                        <span className="text-2xl"><FaUsers /></span>
                                        <h1 className="text-base  uppercase">All Users</h1>
                                    </div>
                                </NavLink>

                            </>
                            :
                            <>
                                <NavLink to='userHome' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-white" : "mb-2"}>
                                    <div className="flex gap-2 w-56 mx-auto">
                                        <span className="text-2xl"><FaHome /></span>
                                        <h1 className="text-base  uppercase">User Home</h1>
                                    </div>
                                </NavLink>

                                <NavLink to='reservation' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-white" : "mb-2"}>
                                    <div className="flex gap-2 w-56 mx-auto">
                                        <span className="text-2xl"><CgShoppingCart /></span>
                                        <h1 className="text-base  uppercase">reservation</h1>
                                    </div>
                                </NavLink>

                                <NavLink to='payment' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-white" : "mb-2"}>
                                    <div className="flex gap-2 w-56 mx-auto">
                                        <span className="text-2xl"><GrMoney /></span>
                                        <h1 className="text-base  uppercase">payment history</h1>
                                    </div>
                                </NavLink>

                                <NavLink to='cart' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-white" : "mb-2"}>
                                    <div className="flex gap-2 w-56 mx-auto">
                                        <span className="text-2xl"><FaCartPlus /></span>
                                        <h1 className="text-base  uppercase">My carts</h1>
                                    </div>
                                </NavLink>

                                <NavLink to='review' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-white" : "mb-2"}>
                                    <div className="flex gap-2 w-56 mx-auto">
                                        <span className="text-2xl"><MdRateReview /></span>
                                        <h1 className="text-base  uppercase">add review</h1>
                                    </div>
                                </NavLink>

                                <NavLink to='bookings' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-white" : "mb-2"}>
                                    <div className="flex gap-2 w-56 mx-auto">
                                        <span className="text-2xl"><FaBook/></span>
                                        <h1 className="text-base  uppercase">My booking</h1>
                                    </div>
                                </NavLink>

                            </>
                    }
                    
                </section>

                <hr className="my-6 text-xl" />

                <section className="flex flex-col gap-4">
                    <NavLink to='/' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-white" : "mb-2"}>
                        <div className="flex gap-2 w-56 mx-auto">
                            <span className="text-2xl"><FaHome /></span>
                            <h1 className="text-base  uppercase"> Home</h1>
                        </div>
                    </NavLink>

                    <NavLink to='/menu' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-white" : "mb-2"}>                        
                        <div className="flex gap-2 w-56 mx-auto">
                            <span className="text-2xl"><MdMenu /></span>
                            <h1 className="text-base  uppercase"> Menu</h1>
                        </div>
                    </NavLink>

                    <NavLink to='/shop' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-white" : "mb-2"}>                       
                        <div className="flex gap-2 w-56 mx-auto">
                            <span className="text-2xl"><FaShoppingBag /></span>
                            <h1 className="text-base  uppercase"> Shop</h1>
                        </div>
                    </NavLink>

                    <NavLink to='/contact' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-white" : "mb-2"}>
                        <div className="flex gap-2 w-56 mx-auto">
                            <span className="text-2xl"><MdEmail /></span>
                            <h1 className="text-base  uppercase"> Contact us</h1>
                        </div>
                    </NavLink>
                </section>
            </aside>
        </section>
    );
};

export default Sidebar;
