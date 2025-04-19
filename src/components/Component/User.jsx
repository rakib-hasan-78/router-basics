import React from 'react';
import { Link, useNavigate} from 'react-router-dom';

const User = ({user}) => {
    const navigate = useNavigate();
    const{name, email, phone, id }=user;


    const detailHandler = (e) => {
        e.preventDefault();
        navigate(`/users/${id}`)
    }

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
            <button 
            className='text-lg font-black uppercase rounded-lg font-sans p-2 bg-yellow-800 my-4 cursor-pointer duration-200 ease-in-out hover:bg-yellow-900/70 hover:scale-95 hover:scale-3d hover:font-mono'
            onClick={detailHandler}
            >show detail</button>
        </div>
    );
};

export default User;