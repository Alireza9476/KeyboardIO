import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import { HOMEPAGE_URL } from "../config/URLs";
import { useEffect } from "react";

const RequireAuth = () => {
  const { auth, setFromURL } = useAuth();
  const location = useLocation();

  useEffect(() => {
    setFromURL(location.pathname);
  }, []);

  return auth?.email ? (
    <Outlet />
  ) : (
    <>
      <Navigate
        to={HOMEPAGE_URL}
        state={{ popupMessage: "login", from: location.pathname }}
        replace
      />
    </>
  );
};

export default RequireAuth;

// <Popup />
// <Navigate to={HOMEPAGE_URL} state={{ from: location }} replace />
