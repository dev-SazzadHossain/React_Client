import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router";
import useAuthCheck from "./Hooks/useAuthCheck";

function App() {
  const authCheck = useAuthCheck();

  return !authCheck ? (
    <div>Checking ........</div>
  ) : (
    <>
      <div className="absolute inset-0 h-full w-full bg-[#f1f1f1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
