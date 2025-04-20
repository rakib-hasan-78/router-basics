import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    const backHandler = () => navigate(-1);

    return (
        <div className="p-5 text-center">
            <h2 className="text-2xl text-red-600 font-bold mb-3">Oops! Something went wrong</h2>
            <p className="mb-2 text-gray-700">
                {error.status}
            </p>
            <p className="mb-4">
                {error.data || error.message || "Unknown error occurred"}
            </p>
            <button
                onClick={backHandler}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
                Go Back
            </button>
        </div>
    );
};

export default ErrorPage;
