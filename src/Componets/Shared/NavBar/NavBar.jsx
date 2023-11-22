import { NavLink } from "react-router-dom";
import { Navbar } from 'flowbite-react';
import logo from '/logo.png'
import { BsCartFill } from "react-icons/bs";

const NavBar = () => {
    return (
        <div className='fixed top-0 z-40 w-full bg-black bg-opacity-80'>
            <Navbar fluid rounded className=' bg-transparent max-w-screen-xl mx-auto text-white'>
                    <Navbar.Brand  href="#">
                        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold ">Bistro Boss</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <NavLink to="/" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-red-600 mb-2" : "mb-2"}>
                            Home
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-red-600 mb-2" : "mb-2"}>
                            Contact Us
                        </NavLink>
                        <NavLink to="/dashboard" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-red-600 mb-2" : "mb-2"}>
                            Dashboard
                        </NavLink>
                        <NavLink to="/menu" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-red-600 mb-2" : "mb-2"}>
                            Our Menu
                        </NavLink>
                        <NavLink to="/shop" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-red-600 mb-2" : "mb-2"}>
                            Our Shop
                        </NavLink>
                        <NavLink to="/signIn" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-red-600 mb-2" : "mb-2"}>
                            Sign In
                        </NavLink>
                        {/* <NavLink to="/cart" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-red-600 mb-2" : "mb-2"}>
                            <BsCartFill className="text-green-400 text-xl" />
                        </NavLink> */}
                    </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;