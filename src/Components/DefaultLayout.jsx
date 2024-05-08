import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../Contexts/ContextProvider";

const DefaultLayout = () => {
  const { user, token } = useStateContext();
  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <div id="defaultLayout">
      <div className="content">
        <header>
          <div>Header</div>
          <div>
            {user.name}
            <a href="#" className="btn-logout">
              Logout
            </a>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
