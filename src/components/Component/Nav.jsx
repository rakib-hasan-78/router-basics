import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {

    const getPathName = ({ isActive }) => 
        `duration-100 ease-in transition-all text-base my-1 rounded-sm py-1.5 px-3 ${
            isActive ? 'bg-yellow-500 text-stone-900 font-bold' : 'bg-stone-700 text-stone-50'
        }`;

    return (
        <nav className='w-full flex items-center justify-center space-x-2.5'>
            <NavLink to='/' className={getPathName}>Home</NavLink>
            <NavLink to='/about' className={getPathName}>About</NavLink>
            <NavLink to='/users' className={getPathName}>Users</NavLink>
            <NavLink to='/contact' className={getPathName}>Contact</NavLink>
        </nav>
    );
};

export default Nav;
 