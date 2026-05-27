import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token1");

  if (token !== "key123") {
    return <Navigate to="/signin" />;
  }

  return children;
}
