import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer'

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;