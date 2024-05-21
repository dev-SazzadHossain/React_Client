import { useEffect } from "react";

export const useOutSideClick = (ref, fun) => {
  console.log(ref, fun);
  useEffect(() => {
    let clickFun = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        console.log(object);
        return false;
      }
      fun();
    };
    document.addEventListener("mousedown", clickFun);
    document.addEventListener("touchstart", clickFun);

    return () => {
      document.removeEventListener("mousedown", clickFun);
      document.removeEventListener("touchstart", clickFun);
    };
  }, [ref]);
};
