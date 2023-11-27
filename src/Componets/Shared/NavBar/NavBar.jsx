import { NavLink, useNavigate } from "react-router-dom";
import { Navbar } from 'flowbite-react';
import logo from '/logo.png'
import { BsCartFill } from "react-icons/bs";
import { useAuth } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
    const { user ,logOut } = useAuth()
    
    const [cart] = useCart();

    const [photo, setPhoto] = useState(null);
    const [name, setName] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            setName(user.displayName?user.displayName :'User')
            if (user.photoURL) {
                setPhoto(user.photoURL)
            }
            else {
                setPhoto('https://i.ibb.co/bBT6RPm/pngwing-com.png')
            }
        }
    }, [user])
    

    const handleLogOut = () => {
        logOut()
            .then(result => {
                toast.success('Log Out Successfull')
                navigate('/')
                
            })
            .catch(error => {
            toast.error('Log Out Failed !!')
        })
    }
    return (
        <div className='fixed top-0 z-40 w-full bg-black bg-opacity-80'>
            <Toaster></Toaster>
            <Navbar fluid rounded className=' bg-transparent max-w-screen-xl mx-auto text-white'>
                    <Navbar.Brand className="md:mx-auto lg:mx-0 md:mb-2 lg:mb-0"  href="#">
                        <img src={logo} className="mr-3 h-6 sm:h-9 " alt="Flowbite React Logo" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold">Bistro Boss</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="md:mx-auto lg:mx-0">
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
                            Order Now
                    </NavLink>
                    {
                        user ? 
                            <>
                                <NavLink to="/dashboard/cart" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-red-600 mb-2" : "mb-2"}>
                                    <div className="relative">
                                        <BsCartFill className="text-green-400 text-xl mt-2 md:mt-0" />
                                        <div className="absolute -bottom-2 -right-3 text-white bg-red-600 text-xs h-5 w-5 flex items-center justify-center rounded-full">
                                            <p >{ cart.length}</p>
                                        </div> 
                                    </div>
                                </NavLink>

                                <p onClick={handleLogOut} className="inline w-20 hover:text-red-600 hover:cursor-pointer">Sign Out</p>
                                {photo && <div className="mt-2 md:mt-0 flex gap-2 md:flex-row-reverse">
                                    
                                    <img className=" w-6 rounded-full" src={photo} alt="" />
                                    <p>{ name}</p>
                                </div>}
                            </>
                         :
                            <NavLink to="/signIn" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-red-600 mb-2" : "mb-2"}>
                                Sign In
                            </NavLink>
      
                    } 
                        
                    </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;

