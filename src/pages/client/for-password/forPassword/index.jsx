import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/api/reset/quen-mat-khau', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                // Hiển thị thông báo thành công bằng tiếng Việt
                toast.success('Một liên kết đặt lại mật khẩu đã được gửi đến email của bạn.', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,  // Đóng sau 3 giây
                });
            } else {
                // Hiển thị thông báo lỗi từ phản hồi của API
                toast.error(data.message || 'Có lỗi xảy ra. Vui lòng thử lại.', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
            }
        } catch (error) {
            // Log chi tiết lỗi ra console để dễ dàng debug
            console.error('Lỗi khi gửi yêu cầu đặt lại mật khẩu:', error);

            // Hiển thị thông báo lỗi với nội dung rõ ràng hơn
            toast.error('Gửi yêu cầu thất bại. Vui lòng kiểm tra kết nối mạng hoặc thử lại sau.', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
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
                                    <h3 className="active">Quên mật khẩu</h3>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane active">
                                        <div className="login-form-container">
                                            <div className="login-register-form">
                                                <form onSubmit={handleSubmit}>
                                                    <input
                                                        name="user-email"
                                                        placeholder="Email"
                                                        type="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                    <div className="button-box">
                                                        <button type="submit"><span>Gửi</span></button>
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

export default ForPassword;
