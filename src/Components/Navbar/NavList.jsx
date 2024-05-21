import React from "react";

const NavList = ({ children, className }) => {
  return (
    <ul className={`${className} flex gap-5 items-center justify-center`}>
      {children}
    </ul>
  );
};

export default NavList;
