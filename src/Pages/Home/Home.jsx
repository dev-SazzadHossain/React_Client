import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state) => state);

  return (
    <div>
      <div className="xl:w-[1520px] xl:mx-auto lg:w-[1320px] lg:mx-auto md:w-full sm:w-full w-full xl:px-0 lg:px-0 px-5">
        Home
      </div>
    </div>
  );
};

export default Home;
