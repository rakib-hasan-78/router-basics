import { Outlet, useLocation, useNavigation } from "react-router-dom";

// import React from 'react';
import Nav from './../../Component/Nav';
import Footer from './../../Component/Footer';


const Home = () => {
    const location = useLocation();
    console.log(location);
    const navigation = useNavigation()
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-between">
            <Nav />
            <main className="flex-grow">
            {
                navigation.state === 'loading' ? 'LOADING........'
                :
                <Outlet />
            }
            </main>
            <Footer />
        </div>
    );
};

export default Home;