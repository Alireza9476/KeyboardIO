import React, { createContext, useMemo, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [fromURL, setFromURL] = useState("/");

  const value = useMemo(
    () => ({ auth, setAuth, fromURL, setFromURL }),
    [auth, setAuth, fromURL, setFromURL]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
