import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
const Login = () => {
    const [email, setEmail] = useState('');
    const [mat_khau, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Khởi tạo useNavigate để điều hướng

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        const loginData = { email, mat_khau };

        try {
            const response = await fetch('http://127.0.0.1:8000/api/khach-hang/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            console.log(response); // Log phản hồi API để kiểm tra

            const data = await response.json();
            console.log(data); // Log nội dung JSON nhận được từ API

            if (response.ok) {
                localStorage.setItem('userToken', data.token ? data.token : 'token');
                localStorage.setItem('userId', data.user.id);
                localStorage.setItem('userInfo', JSON.stringify(data));
                toast.success('Đăng nhập thành công!');
                navigate('/');
            } else {
                toast.error(data.message || 'Đăng nhập thất bại');

            }
        } catch (err) {
            toast.error(`Có lỗi xảy ra, ${err?.message}`);

        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="login-register-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 ms-auto me-auto">
                            <div className="login-register-wrapper">
                                <div className="login-register-tab-list nav">
                                    <h3 className="active"> Đăng nhập </h3>
                                </div>
                                <div className="tab-content">
                                    <div id="lg1" className="tab-pane active">
                                        <div className="login-form-container">
                                            <div className="login-register-form">
                                                <form onSubmit={handleLogin}>
                                                    <input
                                                        type="email"
                                                        name="user-email"
                                                        placeholder="Email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                    <input
                                                        type="password"
                                                        name="user-password"
                                                        placeholder="Mật khẩu"
                                                        value={mat_khau}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        required
                                                    />
                                                    <div className="button-box">
                                                        <div className="login-toggle-btn">
                                                            <input type="checkbox" />
                                                            <label>Nhớ tài khoản</label>
                                                            <a href="/quen-mat-khau">Quên mật khẩu?</a>
                                                        </div>
                                                        <button type="submit" disabled={loading}>
                                                            {loading ? <span>Đang đăng nhập...</span> : <span>Đăng nhập</span>}
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;