import { useEffect, useState } from "react";
// import { usersCollectionsRef } from "../firebase-config";
import { collection, doc, getDocs } from "firebase/firestore";
import useAuth from "../hooks/useAuth";

function CustomSettings() {
  const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionsRef); //alle documents from "users" collections
  //     console.log(data);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getUsers();
  // }, []);

  return (
    <>
      <div className="mt-20">Custom Settings</div>
      {/* {users.map((user) => {
        return (
          <div key={user.id}>
            <h1>ID: {user.id}</h1>
            <h1>Name: {user.name}</h1>
            <h1>Email: {user.email}</h1>
            <h1>Password: {user.password}</h1>
            {console.log(user)}
          </div>
        );
      })} */}
    </>
  );
}

export default CustomSettings;
