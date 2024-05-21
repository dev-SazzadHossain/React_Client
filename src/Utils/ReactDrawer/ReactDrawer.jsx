import React from "react";
// import component 👇
import Drawer from "react-modern-drawer";
import "./Drawer.css";
//import styles 👇
import "react-modern-drawer/dist/index.css";
const ReactDrawer = ({ isOpen, setIsOpen }) => {
  return (
    <div className="md:w-1/2 sm:w-full w-full">
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="left"
        duration={800} // Duration in milliseconds
        className="drawer"
        size="50%"
      >
        <div>Hello World</div>
      </Drawer>
    </div>
  );
};

export default ReactDrawer;
