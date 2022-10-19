import React from "react";
import { useLocation, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Profile() {
  const location = useParams();
  const { auth } = useAuth();

  alert("Reached profile");
  return (
    <div className="mt-20">
      <p>Email: {auth?.email}</p>
      <p>Profile Nr: {location.id}</p>
    </div>
  );
}

export default Profile;
