import { Button } from "@headlessui/react";
import React from "react";

const CustomButton = ({ children, className, onClick, type, ...props }) => {
  return (
    <Button
      type={type || "button"}
      onClick={onClick || ""}
      className={`rounded bg-sky-600 py-2 px-10 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 ${className} ${
        props?.disabled && "bg-red-300/85 cursor-not-allowed"
      }`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
