import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles
import background from "../../../assets/img/illustrations/boy-with-rocket-light.png";

const LoginPage = () => {
    document.title = "Hypertech Store - Đăng nhập hệ thống Admin"
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    // Handle login with API request
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // API call to get users
            const response = await fetch("http://127.0.0.1:8000/api/quan-tri-viens/getAll");
            const data = await response.json();

            // Find the user matching the provided email
            const user = data.data.find((user) => user.email === email);

            if (user) {
                // Check if password matches (ensure the password is hashed and compare accordingly)
                // You need to add logic to compare hashed passwords, using a library like bcrypt.js or other
                if (user.mat_khau === password) { // Adjust this for hashed password comparison
                    if (user.role === 0 || user.role === 1) { // Check if role is admin (0) or staff (1)
                        localStorage.setItem("customRole", user.role === 0 ? "admin" : "staff"); // Save role to localStorage

                        toast.success("Đăng nhập thành công", {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: true,
                        });

                        setTimeout(() => {
                            navigate("/admin"); // Redirect to /admin
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
        } catch (error) {
            console.error("Error during login:", error);
            setErrorMessage("An error occurred while trying to log in.");
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
