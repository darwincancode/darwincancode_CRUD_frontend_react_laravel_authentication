import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./Components/DefaultLayout";
import GuestLayout from "./Components/GuestLayout";
import Users from "./Views/Users";
import Login from "./Views/Login";
import Register from "./Views/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [{ path: "/users", element: <Users /> }],
  },

  {
    path: "/",
    element: <GuestLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
export default router;
