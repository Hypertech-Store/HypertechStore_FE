import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        ten_nguoi_dung: '',
        mat_khau: '',
        email: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate(); // Khởi tạo useNavigate

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Kích hoạt gửi dữ liệu khi nhấn nút
    };

    useEffect(() => {
        if (isSubmitting) {
            const registerUser = async () => {
                try {
                    const response = await fetch('http://127.0.0.1:8000/api/khach-hang/register', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData)
                    });
                    const data = await response.json();

                    if (response.ok) {
                        alert('Đăng ký thành công');
                        navigate('/dang-nhap'); // Chuyển hướng sang trang đăng nhập
                    } else {
                        alert('Lỗi đăng ký: ' + data.message);
                    }
                } catch (error) {
                    console.error('Lỗi đăng ký:', error);
                    alert('Đã xảy ra lỗi khi đăng ký.');
                } finally {
                    setIsSubmitting(false); // Đặt lại trạng thái
                }
            };
            registerUser();
        }
    }, [isSubmitting, formData, navigate]);

    return (
        <>
            <div className="login-register-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 ms-auto me-auto">
                            <div className="login-register-wrapper">
                                <div className="login-register-tab-list nav">
                                    <h3 className="active"> Đăng ký </h3>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane active">
                                        <div className="login-form-container">
                                            <div className="login-register-form">
                                                <form onSubmit={handleSubmit}>
                                                    <input
                                                        type="text"
                                                        name="ten_nguoi_dung"
                                                        placeholder="Tên người dùng"
                                                        value={formData.ten_nguoi_dung}
                                                        onChange={handleChange}
                                                    />
                                                    <input
                                                        type="password"
                                                        name="mat_khau"
                                                        placeholder="Mật khẩu"
                                                        value={formData.mat_khau}
                                                        onChange={handleChange}
                                                    />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                    <div className="button-box">
                                                        <button type="submit"><span>Đăng ký</span></button>
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

export default Register;
