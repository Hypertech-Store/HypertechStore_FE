// src/components/PrivateRoute.jsx
import React from 'react';

import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    // Check for token in localStorage (or use your own authentication logic)
    const token = localStorage.getItem('authToken');

    if (!token) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default PrivateRoute;
