import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const NotLoginRoute = () => {
  const loggedIn = useAuth();

  return loggedIn ? <Navigate to="/home" /> : <Outlet />;
};

export default NotLoginRoute;
