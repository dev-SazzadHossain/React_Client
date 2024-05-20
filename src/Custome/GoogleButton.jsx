import React from "react";
import { FcGoogle } from "react-icons/fc";
const GoogleButton = ({ text }) => {
  return (
    <div className="w-full pt-5 flex flex-col justify-center items-center ">
      <p className="flex items-center justify-between gap-4 w-full">
        <span className="w-[30%] h-1 bg-gray-300 "></span>{" "}
        <span className="flex-1 text-center capitalize">Or {text} With</span>{" "}
        <span className="w-[30%] h-1 bg-gray-300 "></span>
      </p>
      <div className="pt-5">
        <FcGoogle size="30px" />
      </div>
    </div>
  );
};

export default GoogleButton;
