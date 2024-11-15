import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import Slider from 'react-slick';
import logo from "../../../../src/assets/images/logo-white.png";
import login from "../../../../src/assets/images/login/1.png";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/style.css";
import "../../../assets/css/responsive.css";
import "../../../assets/css/typography.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);  // State to handle loading spinner visibility
    const navigate = useNavigate();  // Use useNavigate instead of useHistory

    useEffect(() => {
        // Simulating a loading process and then hiding the spinner
        const timer = setTimeout(() => {
            setIsLoading(false); // Hide the loading spinner after 2 seconds (or any custom logic)
        }, 2000); // Adjust time as needed

        // Cleanup function to clear the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []);

    const settings = {
        dots: true, // Enable dots navigation
        infinite: true, // Infinite loop
        speed: 500, // Transition speed
        autoplay: true, // Enable auto-play
        autoplaySpeed: 2000, // Speed of auto-play (in ms)
        slidesToShow: 1, // Show 1 slide at a time
        slidesToScroll: 1, // Scroll 1 slide at a time
        arrows: false, // Disable the next and prev arrows
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Assuming backend authentication here
        if (email === 'admin@example.com' && password === 'admin123') {
            localStorage.setItem('authToken', 'yourAuthTokenHere'); // Store token
            navigate('/admin');  // Redirect to the admin page using navigate
            toast.success("Bạn đã đăng nhập hệ thống quản trị viên thành công!"); // Show success toast
        } else {
            toast.error("Có lỗi xảy ra vui lòng thử lại!"); // Show error toast
        }
    };

    return (
        <div>
            {/* Loading Spinner */}
            {isLoading && (
                <div id="loading">
                    <div id="loading-center">
                        {/* Spinner Icon */}
                        <div className="spinner"></div>
                    </div>
                </div>
            )}

            {/* Login Form */}
            <section className="sign-in-page">
                <div className="container bg-white mt-5 p-0">
                    <div className="row no-gutters">
                        <div className="col-sm-6 align-self-center">
                            <div className="sign-in-from">
                                <h1 className="mb-0 dark-signin">Đăng nhập</h1>
                                <p className="mt-3">Nhập email và mật khẩu của bạn để truy cập vào bảng quản trị.</p>
                                <form className="mt-4" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email</label>
                                        <input
                                            type="email"
                                            className="form-control mb-0"
                                            id="exampleInputEmail1"
                                            placeholder="Địa chỉ email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                                        <a href="#" className="float-right">Quên mật khẩu?</a>
                                        <input
                                            type="password"
                                            className="form-control mb-0"
                                            id="exampleInputPassword1"
                                            placeholder="Mật khẩu"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="d-inline-block w-100">
                                        <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Nhớ tài khoản</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary float-right">Đăng nhập</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-6 text-center">
                            <div className="sign-in-detail text-white">
                                <a className="sign-in-logo mb-5" href="#">
                                    <img src={logo} className="img-fluid" alt="logo" />
                                </a>
                                {/* Slick Slider */}
                                <Slider {...settings}>
                                    <div className="item">
                                        <img src={login} className="img-fluid mb-4" alt="login-1" />
                                        <h4 className="mb-1 text-white">Manage your orders</h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                    </div>
                                    <div className="item">
                                        <img src={login} className="img-fluid mb-4" alt="login-2" />
                                        <h4 className="mb-1 text-white">Easy Shopping Experience</h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                    </div>
                                    <div className="item">
                                        <img src={login} className="img-fluid mb-4" alt="login-3" />
                                        <h4 className="mb-1 text-white">Track Your Orders</h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LoginPage;
