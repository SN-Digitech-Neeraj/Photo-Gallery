import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "./authToken";

const PrivateRoute = ({ children }) => {
    const location = useLocation();

    if (!isAuthenticated()) {
        // Agar user login nahi hai → redirect to login
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Agar login hai → children (admin layout) show karo
    return children;
};

export default PrivateRoute;
