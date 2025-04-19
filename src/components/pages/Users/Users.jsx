import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../../Component/User';

const Users = () => {
    const data = useLoaderData();

    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <h1 className='w-full text-center my-12 text-3xl text-pink-400'>we have users: {data.length}</h1>
            <div className='w-full grid xxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-x-2 gap-y-5'>
                {
                    data.map(user=> (<User key={user.id} user={user} />) )
                }
            </div>
        </div>
    );
};

export default Users;