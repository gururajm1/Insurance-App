import React from "react";
import { Route, Navigate } from "react-router-dom";

const isAuthenticated = true;

const PrivateRoute = ({ auth,component: Component, ...rest }) => {
  // Check if user is authenticated (you need to implement this logic)
 // Example: You need to replace this with your actual authentication logic

  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? <Component /> : <Navigate to="/dashboard" replace />
      }
    />
  );
};

export default PrivateRoute;
