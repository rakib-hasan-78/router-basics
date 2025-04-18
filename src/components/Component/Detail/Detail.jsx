import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Detail = () => {
    const user = useLoaderData();
    const {name, company: { name: companyName } } = user;
    return (
        <div>
            <h5>Name: <small>{name}</small> </h5>
            <p>Company Name: <small>{companyName}</small></p>
        </div>
    );
};

export default Detail;