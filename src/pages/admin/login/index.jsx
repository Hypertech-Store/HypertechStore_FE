import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import background from "../../../assets/img/illustrations/boy-with-rocket-light.png";

const LoginPage = () => {
    document.title = "Hypertech Store - Đăng nhập hệ thống Admin";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/quan-tri-viens/login", {
                email: email,
                mat_khau: password,
            });

            console.log("API Response:", response.data); // Log phản hồi API

            const { quantrivien, message } = response.data;
            console.log("Role:", quantrivien.role); // Thêm log vào đây để kiểm tra giá trị role

            // Kiểm tra vai trò và lưu thông tin vào localStorage
            if (quantrivien.role === 0 || quantrivien.role === 1) {
                // Lưu thông tin vào localStorage
                localStorage.setItem("customRole", quantrivien.role); // Lưu role là số, không phải chuỗi
                localStorage.setItem("userName", quantrivien.ten_dang_nhap);
                localStorage.setItem("userAvatar", quantrivien.anh_nguoi_dung || "default-avatar.png"); // Sử dụng avatar nếu có

                // Log dữ liệu đã lưu vào localStorage
                console.log("Stored in localStorage:");
                console.log("customRole:", localStorage.getItem("customRole"));
                console.log("userName:", localStorage.getItem("userName"));
                console.log("userAvatar:", localStorage.getItem("userAvatar"));

                // Hiển thị thông báo thành công
                toast.success(message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                });

                // Sử dụng setTimeout để đảm bảo lưu xong thông tin trước khi điều hướng
                setTimeout(() => {
                    console.log("Navigating to /admin...");
                    navigate("/admin");
                }, 1000); // Điều hướng sau 1 giây
            } else {
                // Nếu quyền truy cập bị từ chối
                setErrorMessage("Quyền truy cập bị từ chối. Chỉ có quản trị viên và nhân viên mới có thể đăng nhập.");
            }

        } catch (error) {
            console.error("Error during login:", error); // Log lỗi
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message || "Đăng nhập thất bại.");
            } else {
                setErrorMessage("Đã xảy ra lỗi. Vui lòng thử lại.");
            }
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
                        <h4 className="mb-1">Chào mừng đến với hypertech! 👋</h4>
                        <p className="mb-6">
                            Vui lòng đăng nhập vào tài khoản của bạn và bắt đầu cuộc phiêu lưu
                        </p>

                        {/* Form login */}
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
                                    Mật khẩu
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
                                Đăng nhập
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
