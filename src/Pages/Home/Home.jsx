import React from "react";
import { useSelector } from "react-redux";
import HeroNav from "../../Components/Hero/HeroNav";

const Home = () => {
  const state = useSelector((state) => state);

  return (
    <div>
      <div className=" relative xl:w-[1520px] xl:mx-auto lg:w-[1320px] lg:mx-auto md:w-full sm:w-full w-full xl:px-0 lg:px-0 ">
        <div className="inset-0 w-full  bg-[#f1f1f1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]   flex items-center py-6 mt-3 rounded-md ">
          <HeroNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
