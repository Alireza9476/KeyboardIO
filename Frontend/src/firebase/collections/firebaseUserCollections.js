import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { firebaseDB } from "../../firebase-config";

const usersCollectionsRef = collection(firebaseDB, "users"); //get users collections

async function firebaseAddUserToCollection(data, userID) {
  return await setDoc(doc(firebaseDB, "users", userID), {
    name: data.get("name"),
    email: data.get("email"),
    timestamp: serverTimestamp(),
  });
}

export { firebaseAddUserToCollection };
