import { useSelector } from "react-redux";

export default function useAuth() {
  const { user } = useSelector((state) => state.user);
  if (user?._id && user?.refreshToken) {
    return true;
  } else {
    return false;
  }
}
