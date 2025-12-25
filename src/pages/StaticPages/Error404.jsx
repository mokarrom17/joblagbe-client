import React from "react";
import error from "../../assets/Static/404.svg";
import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="w-96 mt-12 " src={error} alt="404 Error" />
      <h2 className="text-3xl font-bold mt-6">Oops! Page Not Found</h2>
      <p className="text-gray-600 mt-4">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="w-full max-w-lg mt-6 px-4">
        <legend className="fieldset-legend ml-2">Search</legend>
        <input
          type="text"
          name="keywords"
          placeholder="Enter Keywords to search"
          className="w-full p-3 border border-[#E5E7EB] rounded-lg outline-none focus:outline-none focus:ring-0 focus:border-[#B0B7C3] text-gray-700 placeholder:text-gray-400"
        />
      </div>
      <Link to="/" className="mt-6 text-blue-600 flex items-center gap-2">
        <p>Back to Homepage</p>
      </Link>
    </div>
  );
};

export default Error404;
