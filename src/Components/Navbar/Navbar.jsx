import React from "react";
import NavList from "./NavList";
import { NavData } from "../../FakeData/NabData";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold tracking-wide font-openSens">
          Ecommerce Orebi
        </h2>
      </div>
      <NavList>
        {NavData?.map((item) => (
          <NavItem item={item} />
        ))}
      </NavList>
    </div>
  );
};

export default Navbar;
