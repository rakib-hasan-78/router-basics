import { Outlet } from "react-router-dom";

// import React from 'react';
import Nav from './../../Component/Nav';

const Home = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <Nav />
            <Outlet />
        </div>
    );
};

export default Home;