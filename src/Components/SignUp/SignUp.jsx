import { Input } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import CustomButton from "../../Custome/CustomButton";
import { useFormik } from "formik";
import { signUpValidation } from "../Validation/SignUpValidation";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const userInfo = useFormik({
    initialValues,
    validationSchema: signUpValidation,
    onSubmit: (values) => {},
  });

  const handelSubmit = (e) => {
    setError("");
    e.preventDefault();

    if (
      [
        userInfo.values.username,
        userInfo.values.email,
        userInfo.values.password,
      ].some((filed) => filed.trim() == "")
    ) {
      return setError("All files are required");
    }
  };

  useEffect(() => {
    if (Object.keys(userInfo?.errors).length > 0) {
      setError("");
    }
  }, [Object.keys(userInfo?.errors).length]);
  return (
    <div className="flex justify-center items-center w-full h-screen lg:px-0 px-10">
      <form
        className="lg:max-w-[500px] lg:w-[500px] w-full  shadow-lg shadow-gray-400/70 p-10 rounded-lg group/main cursor-pointer"
        onSubmit={userInfo.handleSubmit}
      >
        <h3 className="text-3xl text-center tracking-tighter font-semibold group-hover/main:tracking-wide transition-all duration-300 pb-5">
          Sign Up
        </h3>

        {/* INPUT FORM */}
        <div className="relative">
          <Input
            name="username"
            value={userInfo?.values.username}
            onChange={userInfo.handleChange}
            placeholder="Enter Your Username"
            type="text"
            className="w-full border-none outline-none shadow-sm py-2 px-2 rounded-md focus:ring-2 focus:ring-blue-300/65"
          />
          <div className=" absolute top-1/2 -translate-y-1/2 right-1 text-lg">
            🧑🏻‍💼
          </div>
        </div>
        {userInfo.errors.username && (
          <p className=" text-red-400/80 font-semibold text-sm pt-1 ">
            {userInfo?.errors?.username}
          </p>
        )}
        {/* INPUT FORM */}

        {/* EMAIL */}
        <div className="py-5">
          {/* INPUT FORM */}
          <div className="relative">
            <Input
              name="email"
              value={userInfo?.values?.email}
              onChange={userInfo.handleChange}
              placeholder="Enter Your Email"
              type="email"
              className="w-full border-none outline-none shadow-sm py-2 px-2 rounded-md focus:ring-2 focus:ring-blue-300/65"
            />
            <div className=" absolute top-1/2 -translate-y-1/2 right-1 text-lg">
              📑
            </div>
          </div>
          {userInfo.errors.email && (
            <p className=" text-red-400/80 font-semibold text-sm pt-1 ">
              {userInfo?.errors?.email}
            </p>
          )}
          {/* INPUT FORM */}
        </div>

        {/* EMAIL */}

        {/* PASSWORD */}
        <div className="pb-5">
          {/* INPUT FORM */}
          <div className="relative">
            <Input
              name="password"
              value={userInfo?.values?.password}
              onChange={userInfo.handleChange}
              placeholder="Enter Your Password"
              type={show ? "text" : "password"}
              className="w-full border-none outline-none shadow-sm py-2 px-2 rounded-md focus:ring-2 focus:ring-blue-300/65"
            />
            {!show ? (
              <div
                className=" absolute top-1/2 -translate-y-1/2 right-1 text-lg"
                onClick={() => setShow(true)}
              >
                🔒
              </div>
            ) : (
              <div
                className=" absolute top-1/2 -translate-y-1/2 right-1 text-lg"
                onClick={() => setShow(false)}
              >
                🔓
              </div>
            )}
          </div>
          {userInfo.errors.password && (
            <p className=" text-red-400/80 font-semibold text-sm pt-1 ">
              {userInfo?.errors?.password}
            </p>
          )}
          {/* INPUT FORM */}
        </div>

        {error && (
          <p className=" text-red-400/80 font-semibold text-sm pt-1 ">
            {error}
          </p>
        )}
        {/* PASSWORD */}
        {/*BUTTON */}
        <div className="pt-5 flex justify-center items-center">
          <CustomButton
            onClick={handelSubmit}
            type="submit"
            disabled={Object.keys(userInfo?.errors).length > 0 ? true : false}
          >
            Sign Up
          </CustomButton>
        </div>
        {/* BUTTON */}
      </form>
    </div>
  );
};

export default SignUp;
