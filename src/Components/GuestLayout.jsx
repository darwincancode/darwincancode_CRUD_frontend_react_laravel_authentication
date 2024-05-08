import React from "react";
import { useStateContext } from "../Contexts/ContextProvider";
import { Outlet, Navigate } from "react-router-dom";
const GuestLayout = () => {
  const { token } = useStateContext();
  if (token) {
    return <Navigate to="/" />;
  }
  return (
    <div id="guestLayout">
      <div>Guest Layout</div>
      <Outlet />
    </div>
  );
};

export default GuestLayout;
