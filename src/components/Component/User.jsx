import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const{name, email, phone, id }=user;
    return (
        <div className='w-full flex flex-col items-center justify-between bg-yellow-500 rounded-md shadow-md inset-0 text-yellow-50'>
            <div>
                <h4
                className='text-lg text-yellow-50'
                >Name:<small>{name}</small></h4>
            </div>
            <div>
                <h3 className='text-lg'>email:<small className='text-xs'>{email}</small> </h3>
            </div>
            <div>
                <h3 className='text-lg'>contact:<small className='text-xs'>{phone}</small> </h3>
            </div>
            <Link className='text-sm p-2 px-4 rounded-lg bg-red-500 my-3' to={`/users/${id}`} >Detail</Link>
        </div>
    );
};

export default User;