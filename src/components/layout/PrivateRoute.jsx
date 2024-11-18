import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const isAuthenticated = localStorage.getItem('customRole') === 'admin'; // Check for authentication

    if (!isAuthenticated) {
        // If not authenticated, redirect to the login page
        return <Navigate to="/login" />;
    }

    return <Outlet />; // Render child routes (nested routes) inside the protected area
};

export default PrivateRoute;
