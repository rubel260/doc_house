import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../pages/SharedPages/Navbar';
import Footer from '../pages/SharedPages/Footer';

const MainLayout = () => {
    const locatin = useLocation();
    const noHeaderFoodter = locatin.pathname.includes('login') || locatin.pathname.includes('register')
    return (
        <div>
           {noHeaderFoodter || <Navbar></Navbar>}
            <Outlet></Outlet>
           {noHeaderFoodter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;