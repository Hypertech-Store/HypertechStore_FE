import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import background from "../../../assets/img/illustrations/boy-with-rocket-light.png";

const LoginPage = () => {
    document.title = "Hypertech Store - Đăng nhập hệ thống Admin";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    // Danh sách tài khoản tự tạo
    const users = [
        { email: "admin@hypertech.com", password: "admin123", role: 0 }, // Admin
        { email: "staff@hypertech.com", password: "staff123", role: 1 }, // Staff
    ];

    // Handle login with local user data
    const handleLogin = (e) => {
        e.preventDefault();

        // Tìm người dùng trong danh sách cục bộ
        const user = users.find((user) => user.email === email);

        if (user) {
            if (user.password === password) {
                // Kiểm tra vai trò của người dùng
                if (user.role === 0 || user.role === 1) {
                    localStorage.setItem("customRole", user.role === 0 ? "admin" : "staff"); // Lưu role vào localStorage

                    toast.success("Đăng nhập thành công", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                    });

                    setTimeout(() => {
                        navigate("/admin"); // Chuyển hướng đến /admin
                    }, 2000);
                } else {
                    setErrorMessage("Access denied. Only admins and staff can log in.");
                }
            } else {
                setErrorMessage("Invalid email or password.");
            }
        } else {
            setErrorMessage("User not found.");
        }
    };

    return (
        <div className="authentication-wrapper authentication-cover">
            <ToastContainer />
            <div className="authentication-inner row m-0">
                {/* Left Text */}
                <div className="d-none d-lg-flex col-lg-7 col-xl-8 align-items-center p-5">
                    <div className="w-100 d-flex justify-content-center">
                        <img
                            src={background}
                            className="img-fluid"
                            alt="Login image"
                            width={650}
                            style={{ height: "86vh" }}
                        />
                    </div>
                </div>
                {/* /Left Text */}
                {/* Login */}
                <div className="d-flex col-12 col-lg-5 col-xl-4 align-items-center authentication-bg p-sm-12 p-6">
                    <div className="w-px-400 mx-auto mt-12 pt-5">
                        <h4 className="mb-1">Welcome to hypertech! 👋</h4>
                        <p className="mb-6">
                            Please sign in to your account and start the adventure
                        </p>
                        {errorMessage && (
                            <div className="alert alert-danger" role="alert">
                                {errorMessage}
                            </div>
                        )}
                        <form onSubmit={handleLogin} className="mb-6">
                            <div className="mb-6">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Nhập email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoFocus
                                />
                            </div>
                            <div className="mb-6 form-password-toggle">
                                <label className="form-label" htmlFor="password">
                                    Password
                                </label>
                                <div className="input-group input-group-merge">
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Nhâp mật khẩu"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <span className="input-group-text cursor-pointer">
                                        <i className="bx bx-hide" />
                                    </span>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary d-grid w-100">
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
                {/* /Login */}
            </div>
        </div>
    );
};

export default LoginPage;
