import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SignUp from "../Components/SignUp/SignUp";
import SignIn from "../Components/SignIn/SignIn";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import NotLoginRoute from "./NotLoginRoute";
import LoginRoute from "./LoginRoute";
import NotFound from "../Utils/NotFound/NotFound";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound />}>
      <Route element={<NotLoginRoute />}>
        <Route path="/" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
      </Route>
      <Route element={<LoginRoute />}>
        <Route path="/home" element={<Layout />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Route>
    </Route>
  )
);
