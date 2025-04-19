// import React from 'react';

import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const {data, error:{message}, status, statusText} = useRouteError();

    const returnRoute = useNavigate();
    const backHandler = (e) => {
        e.preventDefault();
        returnRoute(-1);
    }
    return (
        <div>
            <h2>ooopps...!</h2>
            <p><small>{status}-{statusText}</small></p>
            <p>{message || data}</p>
            <button
            className="uppercase p-3 border border-white m-5 rounded-sm bg-gray-400 text-gray-100"
            onClick={backHandler}
             type="button">go back</button>
        </div>
    );
};

export default ErrorPage;