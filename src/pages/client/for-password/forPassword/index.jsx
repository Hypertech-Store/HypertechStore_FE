import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForPassword = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false); // State để kiểm soát việc hiển thị

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
                // Cập nhật trạng thái để hiển thị form thông báo
                setIsSubmitted(true);

                // Hiển thị thông báo thành công
                toast.success(
                    '🎉 Một liên kết đặt lại mật khẩu đã được gửi đến email của bạn.',
                    {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: 'colored',
                    }
                );
            } else {
                // Xử lý lỗi từ server
                toast.error(
                    `❌ ${data.message || 'Có lỗi xảy ra. Vui lòng thử lại.'}`,
                    {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: 'colored',
                    }
                );
            }
        } catch (error) {
            // Xử lý lỗi kết nối
            toast.error(
                '🚨 Gửi yêu cầu thất bại. Vui lòng kiểm tra kết nối mạng hoặc thử lại sau.',
                {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: 'colored',
                }
            );
        }
    };

    return (
        <>
            <style>
                {`
                    body { margin-top: 20px; }
                    .mail-seccess {
                        text-align: center;
                        background: #fff;
                        border-top: 1px solid #eee;
                        padding: 20px;
                    }
                    .mail-seccess .success-inner {
                        display: inline-block;
                        padding: 20px;
                    }
                    .mail-seccess .success-inner h1 {
                        font-size: 50px;
                        color: #006DFE;
                        font-weight: 700;
                    }
                    .mail-seccess .success-inner h1 span {
                        display: block;
                        font-size: 20px;
                        color: #333;
                        font-weight: 600;
                        margin-top: 20px;
                    }
                    .mail-seccess .success-inner p {
                        padding: 20px 15px;
                    }
                    .mail-seccess .success-inner .btn {
                        color: #fff;
                        background-color: #006DFE;
                        padding: 10px 20px;
                        text-decoration: none;
                        border-radius: 5px;
                    }
                    .mail-seccess .success-inner .btn:hover {
                        background-color: #004c9a;
                    }
                    .login-register-area {
                        padding: 50px 0;
                    }
                    .login-register-wrapper {
                        background: #fff;
                        border-radius: 8px;
                        padding: 30px;
                    }
                    .login-register-form input {
                        width: 100%;
                        padding: 15px;
                        margin-bottom: 15px;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                    }
                    .button-box button {
                        width: 100%;
                        padding: 15px;
                        background-color: #006DFE;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        font-size: 16px;
                    }
                    .button-box button:hover {
                        background-color: #004c9a;
                    }
                `}
            </style>

            <link
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                rel="stylesheet"
            />

            {isSubmitted ? (
                // Giao diện khi form được gửi thành công
                <section className="mail-seccess section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3 col-12">
                                <div className="success-inner">
                                    <h1>
                                        <i className="fa fa-envelope" />
                                        <span>Yêu cầu đặt lại mật khẩu đã được gửi!</span>
                                    </h1>
                                    <p>
                                        Chúng tôi đã gửi một liên kết đặt lại mật khẩu đến email của bạn.
                                        Vui lòng kiểm tra hộp thư đến (hoặc mục thư rác) và làm theo hướng dẫn để đặt lại mật khẩu.
                                        Nếu bạn không nhận được email, vui lòng thử lại hoặc liên hệ bộ phận hỗ trợ.
                                    </p>
                                    <a href="/" className="btn">Trang chủ</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                // Giao diện form quên mật khẩu
                <div className="login-register-area">
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
            )}
        </>
    );
};

export default ForPassword;
