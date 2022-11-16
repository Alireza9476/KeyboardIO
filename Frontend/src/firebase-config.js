import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "keyboardio.firebaseapp.com",
  projectId: "keyboardio",
  storageBucket: "keyboardio.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
};

//connection
const app = initializeApp(firebaseConfig);

//conntect into firestore
const firebaseDB = getFirestore(app);
const firebaseAuth = getAuth(app);
/////////////////////////////////////////////////////////////////////////////////////////////

export { firebaseAuth, firebaseDB };
// export default db;
