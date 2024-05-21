import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const LoginRoute = () => {
  const loggedIn = useAuth();
  return loggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default LoginRoute;
