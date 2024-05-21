import React, { useEffect, useState } from "react";
import GoogleButton from "../../Custome/GoogleButton";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "@headlessui/react";
import { useFormik } from "formik";
import { useSignInMutation } from "../../Features/api/Auth/authApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logged } from "../../Features/api/Auth/authSlice";

const SignIn = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [signIn, { data: signInData, isLoading }] = useSignInMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const userInfo = useFormik({
    initialValues,
    onSubmit: (values) => {
      handelSubmit();
    },
  });

  const handelSubmit = (e) => {
    setError("");

    if (
      [userInfo.values.email, userInfo.values.password].some(
        (filed) => filed.trim() == ""
      )
    ) {
      return setError("All files are required");
    }
    signIn({
      email: userInfo?.values?.email,
      password: userInfo?.values?.password,
    });
  };

  useEffect(() => {
    if (signInData?.success === true) {
      dispatch(
        logged({ success: signInData?.success, data: signInData?.data })
      );
      localStorage.setItem("authUser", JSON.stringify(signInData?.data));
      toast.success(signInData?.message);
      navigate("/home");
    } else {
      toast.error(signInData?.message);
    }
  }, [signInData]);
  return (
    <div className="flex justify-center items-center w-full h-screen lg:px-0 px-10">
      <form
        className="lg:max-w-[500px] lg:w-[500px] w-full  shadow-lg shadow-gray-400/70 p-10 rounded-lg group/main cursor-pointer"
        onSubmit={userInfo.handleSubmit}
      >
        <h3 className="text-3xl text-center tracking-tighter font-semibold group-hover/main:tracking-wide transition-all duration-300 pb-5">
          Sign Up
        </h3>

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
            {isLoading ? "Loading..." : "Sign In"}
          </Button>
        </div>
        {/* BUTTON */}

        {/* GOOGLE BUTTON */}
        <GoogleButton text="sign in" />
        {/* GOOGLE BUTTON */}

        {/* SIGN IN LINK */}
        <span className="flex justify-end items-center gap-2 pt-5">
          <small className=" text-[11px] text-pink-400 font-semibold">
            Are You New Here
          </small>{" "}
          <Link
            to="/"
            className=" hover:text-blue-400 transition-all duration-300 flex items-center justify-center gap-1 group"
          >
            Sign Up{" "}
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

export default SignIn;
