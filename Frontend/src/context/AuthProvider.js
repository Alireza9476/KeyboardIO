import React, { createContext, useMemo, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../firebase-config";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [fromURL, setFromURL] = useState("/");

  const saveCurrentUser = () => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      setAuth({ email: currentUser?.email, uid: currentUser?.uid });
      console.log(currentUser);
    });
  };

  const value = useMemo(
    () => ({
      auth,
      setAuth,
      fromURL,
      setFromURL,
      saveCurrentUser,
    }),
    [auth, setAuth, fromURL, setFromURL]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;

// useEffect(() => {
//   const userInfo = onAuthStateChanged(firebaseAuth, (currentUser) => {
//     setAuth({ email: currentUser?.email, uid: currentUser?.uid });
//     console.log("reached point");
//   });
//   return () => {
//     userInfo();
//   };
// }, [createUserFunc, loginUserFunc, logoutUser]);
