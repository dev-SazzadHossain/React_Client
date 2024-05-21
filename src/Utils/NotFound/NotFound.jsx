import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../Custome/CustomButton";

const NotFound = () => {
  return (
    <div className=" flex w-full h-screen justify-center items-center">
      <div>
        <h1 className="text-center bg-red-500 text-white rounded-md py-1 text-xl font-bold">
          404 - Page Not Found
        </h1>
        <p className="text-center text-red-300 rounded-md  text-sm font-bold py-3">
          Sorry, the page you are looking for could not be found.
        </p>
        <Link to="/" className="flex justify-center items-center">
          <CustomButton>Go To Home</CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
