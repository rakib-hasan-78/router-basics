import { Outlet } from "react-router-dom";

// import React from 'react';
import Nav from './../../Component/Nav';
import Footer from './../../Component/Footer';

const Home = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-between">
            <Nav />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Home;