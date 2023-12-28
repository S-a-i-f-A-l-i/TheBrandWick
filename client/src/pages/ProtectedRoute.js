import React from "react";
import { Navigate } from "react-router-dom";
import Account from "./Account";
import { getFromLocal } from "../utils/helpers";

const ProtectedRoute = ({ children }) => {
  const user = getFromLocal("user");
  if (!user) {
    return <Navigate to="/account" />;
  }
  return children;
};

export default ProtectedRoute;
