const ForPassword = () => {
    return (
        <>
            <div className="login-register-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 ms-auto me-auto">
                            <div className="login-register-wrapper">
                                <div className="login-register-tab-list nav">
                                    <h3 className="active"> quên mật khẩu </h3>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane active">
                                        <div className="login-form-container">
                                            <div className="login-register-form">
                                                <form action="#" method="post">
                                                    <input name="user-email" placeholder="Email" type="email" />
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
