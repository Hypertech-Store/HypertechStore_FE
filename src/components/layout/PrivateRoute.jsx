import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {
    const role = Number(localStorage.getItem("customRole")); // Chuyển về kiểu số

    // Kiểm tra nếu không có role trong localStorage, điều hướng về /login
    if (!role) {
        return <Navigate to="/login" />;
    }

    // Kiểm tra quyền truy cập
    const isAuthenticated = role === 0 || role === 1;

    if (!isAuthenticated) {
        // Nếu không xác thực, chuyển hướng đến trang login
        return <Navigate to="/login" />;
    }

    return <Outlet />; // Render các route con trong vùng bảo vệ
};

export default PrivateRoute;
