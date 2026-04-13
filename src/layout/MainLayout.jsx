import React from 'react';
import NavBar from '../components/shared/navbar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;