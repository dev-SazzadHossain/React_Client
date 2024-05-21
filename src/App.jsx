import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router";
import useAuthCheck from "./Hooks/useAuthCheck";

function App() {
  const authCheck = useAuthCheck();

  return !authCheck ? (
    <div>Checking ........</div>
  ) : (
    <>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
