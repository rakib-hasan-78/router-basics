import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='w-full flex items-center justify-center space-x-2.5'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/users'}>Users</Link>
            <Link to={'/contact'}>Contact</Link>
        </nav>
    );
};

export default Nav;