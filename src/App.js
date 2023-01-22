import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Verification from "./pages/verification";
import LandingPage from "./pages/landingPage";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/verification",
    element: <Verification />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
