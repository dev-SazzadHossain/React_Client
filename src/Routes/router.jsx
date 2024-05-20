import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SignUp from "../Components/SignUp/SignUp";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route>
        <Route path="/" element={<SignUp />} />
      </Route>
    </Route>
  )
);
