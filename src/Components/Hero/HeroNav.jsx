import { Input } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { FcBusinessman } from "react-icons/fc";
import { BsCartPlus } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useOutSideClick } from "../../Hooks/useOutSideClick";
import { motion } from "framer-motion";
import { NavData } from "../../FakeData/NavData";
const HeroNav = () => {
  const [show, setShow] = useState(false);
  const showRef = useRef();

  useOutSideClick(showRef, () => {
    setShow(false);
  });
  let count = 0;
  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-full ">
        <div className=" w-full relative">
          <div className="flex items-center gap-2 w-full relative">
            <span
              onClick={() => setShow(true)}
              className="flex items-center gap-4 cursor-pointer"
            >
              {" "}
              <BiMenuAltLeft size="34px" /> <span>Shop By Category</span>
            </span>
          </div>
          {show && (
            <motion.div
              initial={{
                opacity: 0,
                top: 50,
              }}
              transition={{ duration: 1 }}
              animate={{
                opacity: show && 1,
              }}
              ref={showRef}
              className={` w-[180px] px-2 py-2 bg-white shadow-lg rounded-md absolute`}
            >
              <ul>
                {NavData?.map((item, index) => {
                  count += 0.2;
                  return (
                    <motion.li
                      initial={{
                        opacity: 0,
                      }}
                      whileInView={{
                        opacity: show && 1,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: count,
                      }}
                    >
                      <motion.span
                        whileHover={{
                          letterSpacing: "2px",
                          cursor: "pointer",
                          boxShadow: `0 0 ${index + 1}px 0px  red`,
                        }}
                        className="text-[19px] font-openSens font-medium"
                      >
                        {item?.title}
                      </motion.span>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </div>

        <div className="xl:block lg:block hidden w-full">
          <input className=" outline-none py-2 px-2 w-full rounded-md border-none shadow-sm" />
        </div>
        <div className="flex items-center gap-10 w-full justify-end">
          <div className="flex items-center">
            <FcBusinessman size="30px" />
            <span>
              <IoIosArrowDown size="20px" />
            </span>
          </div>
          <div>
            <BsCartPlus size="30px" />
          </div>
        </div>
      </div>
      <div className="xl:hidden lg:hidden  flex justify-center w-full items-center py-3">
        <input className=" outline-none py-2  px-2 w-[50%] rounded-md border-none shadow-sm" />
      </div>
    </div>
  );
};

export default HeroNav;
