import { Button, Input } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import CustomButton from "../../Custome/CustomButton";
import { useFormik } from "formik";
import { signUpValidation } from "../Validation/SignUpValidation";
import GoogleButton from "../../Custome/GoogleButton";
import { Link, useNavigate } from "react-router-dom";
import {
  useSignInMutation,
  useSignUpMutation,
} from "../../Features/api/Auth/authApi";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logged } from "../../Features/api/Auth/authSlice";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [signUp, { data, isError, isSuccess, isLoading, error: dataError }] =
    useSignUpMutation();
  const [signIn, { data: signInData }] = useSignInMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const userInfo = useFormik({
    initialValues,
    validationSchema: signUpValidation,
    onSubmit: (values, { resetForm }) => {
      handelSubmit();
    },
  });

  const handelSubmit = (e, resetForm) => {
    setError("");
    if (
      [
        userInfo.values.username,
        userInfo.values.email,
        userInfo.values.password,
      ].some((filed) => filed.trim() == "")
    ) {
      return setError("All files are required");
    }

    signUp({
      username: userInfo.values.username,
      email: userInfo.values.email,
      password: userInfo.values.password,
    });
  };

  useEffect(() => {
    if (data?.success === true) {
      signIn({
        email: userInfo?.values?.email,
        password: userInfo?.values?.password,
      });

      toast.success(data?.message);
    } else {
      toast.error(data?.message);
    }
  }, [data]);

  useEffect(() => {
    if (signInData?.success === true) {
      localStorage.setItem(
        "refreshToken",
        JSON.stringify(signInData?.refreshToken)
      );
      localStorage.setItem("authUser", JSON.stringify(signInData?.data));
      dispatch(
        logged({ success: signInData?.success, data: signInData?.data })
      );
      navigate("/home");
      userInfo.resetForm();
      setError("");
    }
  }, [signInData?.refreshToken]);
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
        {userInfo?.touched?.username && userInfo.errors.username && (
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
          {userInfo?.touched?.email && userInfo.errors.email && (
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
          {userInfo?.touched?.password && userInfo.errors.password && (
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
          <Button
            disabled={isLoading}
            type="submit"
            className={`rounded bg-sky-600 py-2 px-10 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700 `}
          >
            {isLoading ? "Loading..." : " Sign Up"}
          </Button>
        </div>
        {/* BUTTON */}

        {/* GOOGLE BUTTON */}
        <GoogleButton text="sign up" />
        {/* GOOGLE BUTTON */}

        {/* SIGN IN LINK */}
        <span className="flex justify-end items-center gap-2 pt-5">
          <small className=" text-[11px] text-pink-400 font-semibold">
            Already Have An Account
          </small>{" "}
          <Link
            to="/signIn"
            className=" hover:text-blue-400 transition-all duration-300 flex items-center justify-center gap-1 group"
          >
            Sign In{" "}
            <span className=" opacity-0 group-hover:opacity-100 transition-all duration-300">
              ➡️
            </span>
          </Link>
        </span>
        {/* SIGN IN LINK */}
      </form>
    </div>
  );
};

export default SignUp;
