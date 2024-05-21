import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logged } from "../Features/api/Auth/authSlice";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  useEffect(() => {
    const auth = localStorage.getItem("authUser");

    if (auth) {
      const user = JSON.parse(auth);
      if (user?._id && user?.refreshToken) {
        dispatch(logged({ success: true, data: user }));
      }
    }
    setTimeout(() => {
      setCheck(true);
    }, 2000);
  }, [dispatch, setCheck]);

  return check;
}
