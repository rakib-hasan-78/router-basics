import React from 'react';

const Nav = () => {
    return (
        <nav className='w-full flex items-center justify-center space-x-2.5'>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </nav>
    );
};

export default Nav;