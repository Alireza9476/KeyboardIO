import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import { HOMEPAGE_URL } from "../config/URLs";
import Popup from "./Popup";

const RequireAuth = () => {
  const { auth, setFromURL } = useAuth();
  const location = useLocation();

  return auth?.email ? (
    <Outlet />
  ) : (
    <>
      {/* <Popup /> */}
      {/* <Navigate to={HOMEPAGE_URL} state={{ from: location }} replace /> */}
      <Navigate
        to={HOMEPAGE_URL}
        state={{ popup: true, from: location.pathname }}
        replace
      />
      {setFromURL(location.pathname)}
    </>
  );
};

export default RequireAuth;
