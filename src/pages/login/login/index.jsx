const Login = () => {
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
                                                <form action="#" method="post">
                                                    <input type="text" name="user-name" placeholder="Tên người dùng" />
                                                    <input type="password" name="user-password" placeholder="Mật khẩu" />
                                                    <div className="button-box">
                                                        <div className="login-toggle-btn">
                                                            <input type="checkbox" />
                                                            <label >Nhớ tài khoản</label>
                                                            <a href="/quen-mat-khau">Quên mật khẩu?</a>
                                                        </div>
                                                        <button type="submit"><span>Đăng nhập</span></button>
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
