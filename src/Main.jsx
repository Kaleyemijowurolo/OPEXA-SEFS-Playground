import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Verification from "./pages/verification";
// import LandingPage from "./pages/landingPage";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import "./main.css";
import DrapNDrop from "./components/DrapNDrop";
import DragAndDrop from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DragAndDrop />,
  },
  {
    path: "/signin",
    element: <SignIn draggable />,
  },
  {
    path: "/signup",
    element: <SignUp draggable />,
  },
  {
    path: "/verification",
    element: <Verification draggable />,
  },
]);
const Main = () => (
  <div className="main">
    <RouterProvider router={router} />
  </div>
);

export default Main;
