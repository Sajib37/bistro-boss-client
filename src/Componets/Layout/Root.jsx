import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer'
import NavBar from '../Shared/NavBar/NavBar';

const Root = () => {
    const pathname= useLocation()
    useEffect(() => {
        window.scrollTo(0,0)
    }, [pathname])

    const location = useLocation()
    const noHeaderfooter = location.pathname.includes('signIn') || location.pathname.includes('signUp') ;

    return (
        <div>
  
            {noHeaderfooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderfooter || <Footer></Footer>}
        </div>
    );
};

export default Root;