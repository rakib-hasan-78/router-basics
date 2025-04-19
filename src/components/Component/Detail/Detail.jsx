import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const Detail = () => {
    const user = useLoaderData();
    const navigate = useNavigate()
    const {name, company: { name: companyName } } = user;

    const {userId} = useParams();
    console.log(userId);

    const backHandler = (e)=>{
        e.preventDefault();
        navigate(-1);
    }

    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className='w-full h-auto flex-col flex items-center justify-center border p-5 rounded-2xl shadow-2xl'>
            <div className='flex items-start justify-center flex-col w-full p-1'>
                <h5 className='text-base'>Name: <small>{name}</small> </h5>
                <p className='text-sm'>Searched ID: <small>{userId}</small></p>
                <p className='text-base'>Company Name: <small>{companyName}</small></p>
            </div>
            <button
             className='bg-zinc-500 text-base px-6 py-2 uppercase rounded-md shadow-2xl cursor-pointer text-zinc-50'
             onClick={backHandler}
             >return</button>
            </div>
        </div>
        
    );
};

export default Detail;