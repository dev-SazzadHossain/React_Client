import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ item }) => {
  return (
    <li className={``}>
      <NavLink
        to={item?.link}
        className={({ isActive, isPending }) =>
          `${
            isActive ? "text-blue-400" : ""
          } text-lg font-semibold tracking-wide`
        }
      >
        {item?.title}
      </NavLink>
    </li>
  );
};

export default NavItem;
