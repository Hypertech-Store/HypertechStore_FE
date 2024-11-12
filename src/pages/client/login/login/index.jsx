import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // import useNavigate từ react-router-dom v6

const Login = () => {
    const [email, setEmail] = useState('');
    const [mat_khau, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate(); // Khởi tạo useNavigate để điều hướng

    const handleLogin = async (e) => {
        e.preventDefault(); // Ngừng reload trang khi form được submit
        setLoading(true); // Bật trạng thái loading

        const loginData = { email, mat_khau };

        try {
            const response = await fetch('http://127.0.0.1:8000/api/khach-hang/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const data = await response.json();

            if (response.ok) {
                // Lưu thông tin người dùng nếu đăng nhập thành công
                setUser(data);
                
                // Hiển thị thông báo đăng nhập thành công
                alert('Đăng nhập thành công!');

                // Chuyển hướng sang trang chủ
                navigate('/');
            } else {
                setError(data.message || 'Đăng nhập thất bại');
            }
        } catch (err) {
            setError('Có lỗi xảy ra, vui lòng thử lại');
        } finally {
            setLoading(false); // Tắt trạng thái loading
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
                                    <h3 className="active"> đăng nhập </h3>
                                </div>
                                <div className="tab-content">
                                    <div id="lg1" className="tab-pane active">
                                        <div className="login-form-container">
                                            <div className="login-register-form">
                                                <form onSubmit={handleLogin}>
                                                    <input
                                                        type="text"
                                                        name="user-email"
                                                        placeholder="Email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                    <input
                                                        type="password"
                                                        name="user-password"
                                                        placeholder="Mật khẩu"
                                                        value={mat_khau}
                                                        onChange={(e) => setPassword(e.target.value)}
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

            {error && <div className="error-message">{error}</div>}
        </>
    );
};

export default Login;
