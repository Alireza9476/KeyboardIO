import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { firebaseAuth } from "../firebase-config";

const createUserFunc = async (email, password) => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
  // .then((userCredential) => setAuth({ ...auth, user: userCredential.user }));
};

const logoutUser = () => {
  signOut(firebaseAuth);
};

const loginUserFunc = async (email, password) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
};

export { createUserFunc, logoutUser, loginUserFunc };
